var AppDispatcher = require('../dispatcher/dispatcher'),
    PhotoActions = require('../actions/photo_actions'),
    UserActions = require('../actions/user_actions');

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

  createPhoto: function(params, callback) {
    $.ajax({
      url: 'api/photos',
      method: 'post',
      datatype: 'json',
      data: {photo: params},
      success: function(photos) {
        callback();
        PhotoActions.receivePhotos(photos);
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
  },

  createComment: function(params) {
    $.ajax({
			url: "api/comments",
			data: {comment: params},
			type: "POST",
			datatype: "json",
			success: function(photo){
				PhotoActions.updatePhoto(photo);
			}
		});
  },

  getPresignedUrl: function(data, callback) {
    $.ajax({
      url: 'api/upload',
      method: 'GET',
      data: {prefix: data.prefix, filename: data.filename},
      success: function(url) {
        callback(url);
      }
    });
  },


  uploadToS3: function(file, url) {
    var presignedUrl = url.presigned_url;
    var publicUrl = url.public_url;
    var filetype = file.type;

    var xhr = new XMLHttpRequest();
    xhr.open('PUT', presignedUrl, true);
    xhr.setRequestHeader("Content-Type", filetype);

    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        // if (file.type.match(/^audio.*$/) !== null) {
        //   UserActions.receivePublicAudioUrl(publicUrl);
        // } else {
        PhotoActions.receivePublicImageUrl(publicUrl);
        // }
      }
    };
    xhr.send(file);
  },

  fetchUser: function(id) {
    $.ajax({
      url: "/api/users/" + id,
      method: "GET",
      success: function(user) {
        UserActions.receiveUser(user);
      }
    });
  }
};
