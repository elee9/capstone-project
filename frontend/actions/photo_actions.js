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
	}

};
