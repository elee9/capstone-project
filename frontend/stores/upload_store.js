var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var PhotoConstants = require('../constants/photo_constants');

var _publicImageUrl = null;
var _presignedUrl = null;

var UploadStore = new Store(AppDispatcher);

UploadStore.getImageUrl = function() {
  return _publicImageUrl;
};

UploadStore.getPresignedUrl = function() {
  return _presignedUrl;
};


var setPublicImageUrl = function(url) {
  _publicImageUrl = url;
  UploadStore.__emitChange();
};

var setPresignedUrl = function(url) {
  _presignedUrl = url;
};

UploadStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case PhotoConstants.PUBLIC_IMAGE_URL_RECEIVED:
      setPublicImageUrl(payload.publicUrl);
      break;
    case PhotoConstants.PRESIGNED_URL_RECEIEVED:
      setPresignedUrl(payload.presignedUrl);
      break;
    case PhotoConstants.CLEAR_UPLOAD_STORE:

      break;
    }
};

module.exports = UploadStore;
