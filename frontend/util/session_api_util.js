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

  login: function(user) {
    $.ajax({
      url: 'api/session',
      method: 'post',
      data : { user: user },
      success: function(currentUser) {
        console.log("logging in 2");
        SessionActions.login(currentUser);
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
      success: function(user) {
        SessionActions.fetchCurrentUser();
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
