var AppDispatcher = require('../dispatcher/dispatcher'),
    Store = require('flux/utils').Store,
    UserConstants = require('../constants/user_constants');

var UserStore = new Store(AppDispatcher);

var _user;

UserStore.getUser = function() {
  return _user;
};

var updateUser = function(user) {
  _user = undefined;
  _user = user;
};

UserStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case UserConstants.RECEIVE_USER:
      updateUser(payload.user);
      UserStore.__emitChange();
      break;
  }
};

module.exports = UserStore;
