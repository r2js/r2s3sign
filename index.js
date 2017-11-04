const CryptoJS = require('crypto-js');
const log = require('debug')('r2:s3sign');

const getV2SignatureKey = (key, stringToSign) => {
  const words = CryptoJS.HmacSHA1(stringToSign, key);
  return CryptoJS.enc.Base64.stringify(words);
};

const getV4SignatureKey = (key, dateStamp, regionName, serviceName, stringToSign) => {
  const kDate = CryptoJS.HmacSHA256(dateStamp, `AWS4${key}`);
  const kRegion = CryptoJS.HmacSHA256(regionName, kDate);
  const kService = CryptoJS.HmacSHA256(serviceName, kRegion);
  const kSigning = CryptoJS.HmacSHA256('aws4_request', kService);
  return CryptoJS.HmacSHA256(stringToSign, kSigning).toString();
};

module.exports = function S3(app, conf) {
  const getConfig = conf || app.config('s3');
  if (!getConfig) {
    return log('s3 config not found!');
  }

  const { secret } = getConfig;

  return {
    signV2Rest(headersStr) {
      return getV2SignatureKey(secret, headersStr);
    },

    signV4Rest(headersStr) {
      const matches = /.+\n.+\n(\d+)\/(.+)\/s3\/aws4_request\n([\s\S]+)/.exec(headersStr);
      const hashedCanonicalRequest = CryptoJS.SHA256(matches[3]);
      const stringToSign = headersStr.replace(/(.+s3\/aws4_request\n)[\s\S]+/, `$1${hashedCanonicalRequest}`);
      return getV4SignatureKey(secret, matches[1], matches[2], 's3', stringToSign);
    },

    signV2Policy(base64Policy) {
      return getV2SignatureKey(secret, base64Policy);
    },

    signV4Policy(policy, base64Policy) {
      const conditions = policy.conditions;
      let credentialCondition;

      for (let i = 0; i < conditions.length; i++) { // eslint-disable-line
        credentialCondition = conditions[i]['x-amz-credential'];
        if (credentialCondition != null) {
          break;
        }
      }

      const matches = /.+\/(.+)\/(.+)\/s3\/aws4_request/.exec(credentialCondition);
      return getV4SignatureKey(secret, matches[1], matches[2], 's3', base64Policy);
    },
  };
};
