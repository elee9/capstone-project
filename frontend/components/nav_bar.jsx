var React = require('react'),
    Login = require('./login'),
    CurrentUserState = require('../mixins/current_user_state'),
    SessionApiUtil = require('../util/session_api_util'),
    ReactRouter = require('react-router'),
    ApiUtil = require('../util/api_util'),
    browserHistory = ReactRouter.browserHistory,
    Signup = require('./signup'),
    PhotoUpload = require('./photo_upload');



module.exports = React.createClass({
  mixins: [CurrentUserState],

  contextTypes: {
    router: React.PropTypes.object
  },

  componentWillReceiveProps: function() {
    $('.dropdown-button').dropdown();
  },

  logout: function(event) {
    event.preventDefault();
    SessionApiUtil.logout();
  },

  profile: function (event) {
    event.preventDefault();
    this.context.router.push("/users/" + this.state.currentUser.id);
  },

  handleClick: function() {
    this.context.router.push('/index');
  },

  render: function() {
    var auth;

    var onSplash;
    var uploadOnIndex;

    if (document.location.pathname === '/') {
      onSplash = 'navbar onsplash';
    } else {
      onSplash = 'navbar';
    }

    if (document.location.pathname === '/index') {
      uploadOnIndex = <PhotoUpload onIndex='true'/>;
    } else {
      uploadOnIndex = <PhotoUpload onIndex='false'/>;
    }

    if (this.state.currentUser) {
          auth = (<div className='profile'>
                    <div className='upload-text'>{uploadOnIndex}</div>
                    <ul id='dropdown1' className='dropdown-content dropdown-loggedin'>
                      <li className='divider'/>
                      <li className='dropdown-item' onClick={this.profile}><i className="material-icons dropdown-icon">perm_identity</i>Profile</li>
                      <li className='divider'/>
                      <li className='dropdown-item'><i className="material-icons dropdown-icon">settings</i>Settings</li>
                      <li className='divider'/>
                      <li className='dropdown-item' onClick={this.logout}><i className="material-icons dropdown-icon">input</i>Sign Out</li>
                    </ul>
                    <div className='dropdown-button username-text' data-activates='dropdown1'>{this.state.currentUser.username}</div>
                    <a className='dropdown-button profile-circle' data-activates='dropdown1'>
                      <img src={this.state.currentUser.profile_pic}/>
                    </a>
                  </div>);
    } else {
      auth = (<div className='splashbar'>
                <div className='signup-text'><Signup/></div>
                <div className='login-text'><Login/></div>
              </div>);
    }

    return (
      <div className={onSplash}>
        <div className='logo' onClick={this.handleClick}>PYXELS</div>
        <div>{auth}</div>
      </div>
    );
  }

});
