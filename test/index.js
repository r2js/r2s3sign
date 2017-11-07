const chai = require('chai');
const s3sign = require('../index')({}, {
  secret: 'secret',
});

const expect = chai.expect;
const params = {
  expiration: '2017-09-13T12:26:44.787Z',
  conditions: [
    { acl: 'private' },
    { bucket: 'test-bucket' },
    { 'Content-Type': 'image/jpeg' },
    { success_action_status: '200' },
    { 'x-amz-algorithm': 'AWS4-HMAC-SHA256' },
    { key: 'dev/images/8a75a4b9-8e7e-4eb4-ac2b-70e7fbe01ec0.jpg' },
    { 'x-amz-credential': 'aaaaaaaaaaaaaaaaaaaa/20170913/us-east-1/s3/aws4_request' },
    { 'x-amz-date': '20170913T122144Z' },
    { 'x-amz-meta-qqfilename': 'photo_001.jpg' },
  ],
};

describe('r2s3sign', () => {
  describe('signature', () => {
    it('should generate v4 signature', () => {
      const signature = s3sign.signV4Policy(params, new Buffer(JSON.stringify(params)).toString('base64'));
      expect(signature).to.not.equal(undefined);
    });
  });
});
