var AppDispatcher = require('../dispatcher/dispatcher'),
    SessionConstants = require('../constants/session_constants'),
    SessionActions = require('../actions/session_actions');

var SessionApiUtil = {
  signup: function (data) {
    $.ajax({
      url: 'api/users',
      method: 'post',
      data: { user: data },
      success: function(user){
        SessionActions.signup(user);
      },
      error: SessionApiUtil.handleError
    });
  },

  login: function(user, redirect) {
    $.ajax({
      url: 'api/session',
      method: 'post',
      data : { user: user },
      success: function(currentUser) {
        SessionActions.login(currentUser);
        redirect();
      },
      error: SessionApiUtil.handleError
    });
  },

  logout: function() {
    $.ajax({
      url: '/api/session',
      method: 'delete',
      success: function() {
        SessionActions.logout();
      },
      error: SessionApiUtil.handleError
    });
  },

  fetchCurrentUser: function() {
    $.ajax({
      url: '/api/session',
      datatype: 'json',
      success: function(user) {
        SessionActions.receiveCurrentuser(user);
      },
      error: SessionApiUtil.handleError
    });
  },

  handleError: function(error) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.ERROR,
      errors: error.responseJSON.errors
    });
  }
};

module.exports = SessionApiUtil;
