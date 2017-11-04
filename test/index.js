const chai = require('chai');
const s3sign = require('../index')({}, {
  secret: 'secret',
});

const expect = chai.expect;

describe('r2s3sign', () => {
  describe('signature', () => {
    it('should generate v4 signature', () => {
      // TODO
    });
  });
});
