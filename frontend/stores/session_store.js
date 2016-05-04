var AppDispatcher = require('../dispatcher/dispatcher'),
    Store = require('flux/utils').Store,
    SessionConstants = require('../constants/session_constants');

var SessionStore = new Store(AppDispatcher);
var _currentUser = JSON.parse(window.localStorage.getItem("currentUser"));

var _errors,
    _currentUserFetched = false;

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

SessionStore.currentUser = function() {
  if (_currentUser) {
    return $.extend({}, _currentUser);
  }
};

SessionStore.errors = function(){
  if (_errors){
    return [].slice.call(_errors);
  }
};

SessionStore.currentUserFetched = function() {
  return _currentUserFetched;
};

SessionStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case SessionConstants.LOGIN:
      login(payload.user);
      window.localStorage.setItem("currentUser", JSON.stringify(payload.user));
      _currentUserFetched = true;
      SessionStore.__emitChange();
      break;
    case SessionConstants.LOGOUT:
      logout();
      window.localStorage.setItem("currentUser", "false");
      SessionStore.__emitChange();
      break;
    case SessionConstants.ERROR:
      setErrors(payload.errors);
      SessionStore.__emitChange();
      break;
  }
};

module.exports = SessionStore;
