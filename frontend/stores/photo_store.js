var AppDispatcher = require('../dispatcher/dispatcher'),
    Store = require('flux/utils').Store,
    PhotoConstants = require('../constants/photo_constants');

var _photos = [],
    _photo = {};

var PhotoStore = new Store(AppDispatcher);

PhotoStore.all = function() {
  return _photos.slice();
};

PhotoStore.find = function(id) {
  for (var i = 0; i < _photos.length; i++) {
    if (_photos[i].id === id) {
      return _photos[i];
    }
  }
};

PhotoStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case PhotoConstants.RECEIVE_ALL_PHOTOS:
    resetPhotos(payload.photos);
    PhotoStore.__emitChange();
    break;
    case PhotoConstants.RECEIVE_PHOTO:
    setPhoto(payload.photo);
    PhotoStore.__emitChange();
    break;
    case PhotoConstants.UPDATE_PHOTO:
    updatePhoto(payload.photo);
    PhotoStore.__emitChange();
    break;
    case PhotoConstants.DELETE_PHOTO:
    deletePhoto(payload.photo);
    PhotoStore.__emitChange();
    break;
  }
};

function resetPhotos(photos){
	_photos = photos;
}

function setPhoto(photo){
	_photo = photo;
}

function updatePhoto(photo){
	for (var i = 0; i < _photos.length; i++) {
		if (_photos[i].id === photo.id){
			_photos[i] = photo;
			break;
		}
	}

	_photo = photo;
}

function deletePhoto(photo){
	var ind = _photos.indexOf(photo);
	if (ind > -1){
		_photos.splice(ind, 1);
	}
}

module.exports = PhotoStore;
