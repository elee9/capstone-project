var AppDispatcher = require('../dispatcher/dispatcher'),
    PhotoActions = require('../actions/photo_actions');

module.exports = {
  fetchAllPhotos: function() {
    $.ajax({
      url: '/api/photos',
      datatype: 'json',
      success: function(photos){
        PhotoActions.receivePhotos(photos);
      }
    });
  },

  fetchPhoto: function(id) {
    $.ajax({
      url: 'api/photos' + id,
      datatype: 'json',
      success: function(photo){
        PhotoActions.receivePhoto(photo);
      }
    });
  },

  createPhoto: function(params) {
    $.ajax({
      url: 'api/photos',
      method: 'post',
      datatype: 'json',
      data: {photo: params},
      success: function(photo) {
        PhotoActions.receivePhoto(photo);
      }
    });
  },

  updatePhoto: function(id, params, callback) {
    $.ajax({
      url: 'api/photos' + id,
      method: 'patch',
      datatype: 'json',
      success: function(photo) {
        PhotoActions.updatePhoto(photo);
        callback();
      }
    });
  },

  deletePhoto: function(id) {
    $.ajax({
      url: 'api/photos' + id,
      method: 'delete',
      datatype: 'json',
      success: function(photo) {
        PhotoActions.removePhoto(photo);
      }
    });
  }
};
