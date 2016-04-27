var SessionConstants = require('../constants/session_constants'),
    AppDispatcher = require('../dispatcher/dispatcher');


module.exports = {
  fetchCurrentUser: function(user) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      user: user
    });
  },

  signup: function(user) {
    AppDispatcher.dispatch({
      actionType:SessionConstants.LOGIN,
      user: user
    });
  },

  login: function(user) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      user: user
    });
  },

  logout: function() {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT
    });
  }
};
