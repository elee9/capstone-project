var React = require('react'),
    Link = require('react-router').Link,
    SessionApiUtil = require('../util/session_api_util');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      username: "", email: "", first_name: "", last_name: "", password: ""
    };
  },

  updateUsername: function(event) {
    this.setState({ username: event.target.value });
  },

  updatePassword: function(event) {
    this.setState({ password: event.target.value });
  },

  updateEmail: function(event) {
    this.setState({ email: event.target.value });
  },

  updateFirstName: function(event) {
    this.setState({ first_name: event.target.value });
  },

  updateLastName: function(event) {
    this.setState({ last_name: event.target.value });
  },

  handleSubmit: function(event) {
    event.preventDefault();

    var user = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      first_name: this.state.first_name,
      last_name: this.state.last_name
    };

    SessionApiUtil.signup(user);
  },

  render: function() {
    return(
      <form onSubmit={this.handleSubmit}>
        <h5>Sign Up</h5>
        <label>Username:
        <input type='text' placeholder='Username' onChange={this.updateUsername}/>
        </label><br/>
        <label>Email:
        <input type='text' placeholder='Email' onChange={this.updateEmail}/>
        </label><br/>
        <label>First Name:
        <input type='text' placeholder='First Name' onChange={this.updateFirstName}/>
        </label><br/>
        <label>Last Name:
        <input type='text' placeholder='Last Name' onChange={this.updateLastName}/>
        </label><br/>
        <label>Password:
        <input type='password' placeholder='Password' onChange={this.updatePassword}/>
        </label><br/>
      <input type="submit" value="Sign Up"/>
      </form>
    );
  }
});
