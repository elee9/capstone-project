var React = require('react'),
    Login = require('./login'),
    CurrentUserState = require('../mixins/current_user_state'),
    SessionApiUtil = require('../util/session_api_util'),
    ReactRouter = require('react-router'),
    browserHistory = ReactRouter.browserHistory,
    Signup = require('./signup');



module.exports = React.createClass({
  mixins: [CurrentUserState],

  contextTypes: {
    router: React.PropTypes.object
  },

  logout: function(event) {
    event.preventDefault();
    SessionApiUtil.logout();
    this.context.router.push('/');
  },

  render: function() {
    var auth;

    var onSplash;

    if (document.location.pathname === '/') {
      onSplash = 'navbar onsplash';
    } else {
      onSplash = 'navbar';
    }

    if (this.state.currentUser) {
          auth = (<div className='profile'>
                    <ul id='dropdown1' className='dropdown-content dropdown-loggedin'>
                      <li className='divider'/>
                      <li >Profile</li>
                      <li className='divider'/>
                      <li >Settings</li>
                      <li className='divider'/>
                      <li onClick={this.logout}>Sign Out</li>
                    </ul>
                    <a className='username-text'>{this.state.currentUser.username}</a>
                    <a className='dropdown-button profile-circle' data-activates='dropdown1'>
                      <img src={this.state.currentUser.profile_pic}/>
                    </a>
                  </div>);
    } else {
      auth = (<div>
                <div className='signup-text'><Signup/></div>
                <div className='login-text'><Login/></div>
              </div>);
    }

    return (
      <div className={onSplash}>
        <div className='logo'>Pyxels</div>
        <div>{auth}</div>
      </div>
    );
  }

});
