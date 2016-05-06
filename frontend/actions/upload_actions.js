var ApiUtil = require('../util/api_util');

module.exports = {
  fetchPresignedUrl: function(prefix, filename, file) {
    ApiUtil.getPresignedUrl({prefix: prefix, filename: filename}, this.uploadToS3.bind(null, file));
  },

  uploadToS3: function(presignedUrl, file) {
    ApiUtil.uploadToS3(presignedUrl, file);
  }
} ;
