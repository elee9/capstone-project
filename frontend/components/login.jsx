var React = require('react'),
    Link = require('react-router').Link,
    SessionApiUtil = require('../util/session_api_util'),
    CurrentUserState = require('../mixins/current_user_state');

module.exports = React.createClass({
  mixins: [CurrentUserState],

  getInitialState: function() {
    return {
      username: "", password: ""
    };
  },

  updateUsername: function(event) {
    this.setState({ username: event.target.value });
  },

  updatePassword: function(event) {
    this.setState({ password: event.target.value });
  },

  logout: function(event) {
    event.preventDefault();
    SessionApiUtil.logout();
  },

  handleSubmit: function(event) {
    event.preventDefault();

    var user = {
      username: this.state.username,
      password: this.state.password
    };

    SessionApiUtil.login(user);
  },

  errors: function() {
    if (!this.state.userErrors){
      return;
    }
    var self = this;
    return (<ul>
		{
			Object.keys(this.state.userErrors).map(function(key, i){
				return (<li key={i}>{self.state.userErrors[key]}</li>);
			})
		}
		</ul>);
  },

  form: function() {
    if (this.state.currentUser) {
      return;
    }
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Username:
          <input type='text' placeholder='Username' onChange={this.updateUsername}/>
        </label><br/>
        <label>Password:
          <input type='password' placeholder='Password' onChange={this.updatePassword}/>
        </label><br/>
        <input type="submit" value="Log In"/>
        <Link to="signup">Sign Up</Link>
      </form>
    );
  },

  greeting: function() {
    if (!this.state.currentUser) {
      return;
    }
    return(
      <div>
        <h2>Hi, {this.state.currentUser.username}</h2>
        <input type="submit" value="Log out" onClick={this.logout}/>
      </div>
    );
  },

  render: function() {
    return(
      <div>
        {this.greeting()}
        {this.errors()}
        {this.form()}
      </div>
    );
  }
});
