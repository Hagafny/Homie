const crypto = require('crypto');

module.exports = textToEncrypt =>
  crypto
    .createHash('md5')
    .update(textToEncrypt)
    .digest('hex');
