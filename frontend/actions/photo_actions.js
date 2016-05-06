var AppDispatcher = require('../dispatcher/dispatcher'),
    PhotoConstants = require('../constants/photo_constants');

module.exports = {
	receivePhotos: function(photos){
		AppDispatcher.dispatch({
			actionType: PhotoConstants.RECEIVE_ALL_PHOTOS,
			photos: photos
		});
	},

	receivePhoto: function(photo){
		AppDispatcher.dispatch({
			actionType: PhotoConstants.RECEIVE_PHOTO,
			photo: photo
		});
	},

	updatePhoto: function(photo){
		AppDispatcher.dispatch({
			actionType: PhotoConstants.UPDATE_PHOTO,
			photo: photo
		});
	},

	removePhoto: function(photo){
		AppDispatcher.dispatch({
			actionType: PhotoConstants.REMOVE_PHOTO,
			photo: photo
		});
	},

  receivePublicImageUrl: function(publicUrl) {
    AppDispatcher.dispatch({
      actionType: PhotoConstants.PUBLIC_IMAGE_URL_RECEIVED,
      publicUrl: publicUrl
    });
  },

  receivePresignedURL: function(presignedUrl) {
    AppDispatcher.dispatch({
      actionType: PhotoConstants.PRESIGNED_URL_RECEIEVED,
      presignedUrl: presignedUrl
    });
  },

  clearUploadStore: function() {
    AppDispatcher.dispatch({
      actionType: PhotoConstants.CLEAR_UPLOAD_STORE
    });
  }
};
