var AppDispatcher = require('../dispatcher/dispatcher.js'),
    Store = require('flux/utils').Store,
    SessionConstants = require('../constants/user_constants.js');

var SessionStore = new Store(AppDispatcher);

var _currentUser = {},
    _errors = {};

var login = function(user) {
  _currentUser = user;
  _errors = null;
};

var logout = function() {
  _currentUser = null;
};

var setErrors = function(errors) {
  _errors = errors;
};

SessionStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case SessionConstants.LOGIN:
      login(payload.user);
      break;
    case SessionConstants.LOGOUT:
      logout();
      break;
    case SessionConstants.ERROR:
      setErrors(payload.errors);
      break;
  }
  this.__emitChange();
};

module.exports = SessionStore;
