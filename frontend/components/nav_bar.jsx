var React = require('react'),
    Login = require('./login'),
    CurrentUserState = require('../mixins/current_user_state'),
    SessionApiUtil = require('../util/session_api_util'),
    Signup = require('./signup');



module.exports = React.createClass({
  mixins: [CurrentUserState],

  logout: function(event) {
    event.preventDefault();
    SessionApiUtil.logout();
  },

  render: function() {
    var auth;

    if (this.state.currentUser) {
      auth = (<div className="profile">
                <div className="profile-circle">Profile Picture Circle Thing</div>
                <ul className="dropdown-loggedin">
                  <li>Profile</li>
                  <li>Settings</li>
                  <li onClick={this.logout}>Sign Out</li>
                </ul>
              </div>);
    } else {
      auth = (<div>
                <div className="signup-text"><Signup/></div>
                <div className="login-text"><Login/></div>
              </div>);
    }

    return (
      <div className="navbar">
        <div className="logo">Pyxels</div>
        <div>{auth}</div>
      </div>
    );
  }

});
