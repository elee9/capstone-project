var React = require('react'),
    Link = require('react-router').Link,
    SessionApiUtil = require('../util/session_api_util'),
    CurrentUserState = require('../mixins/current_user_state'),
    Modal = require('boron/OutlineModal');

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

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
    if (event) {
      event.preventDefault();
    }
    var that = this;

    var user = {
      username: this.state.username,
      password: this.state.password
    };

    SessionApiUtil.login(user, function(){
      that.context.router.push("/");
    });
  },

  showModal: function(){
    this.refs.modal.show();
  },

  hideModal: function() {
    this.refs.modal.hide();
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

  guestLogin: function(event) {
    event.preventDefault();
    var that = this;

    this.setState({
      username: '',
      password: ''
    });

    var username = "demothedog".split("");
    var password = "demodemo".split("");
    var time = 50;

    username.forEach(function (letter) {
      time += 50;
      setTimeout(function () {
        that.setState({username: that.state.username + letter});
      }, time);
    });

    time += 500;

    password.forEach(function (letter) {
      time += 50;
      setTimeout(function () {
        that.setState({password: that.state.password + letter});
      }, time);
    });

    time += 500;

    setTimeout(this.handleSubmit, time);

  },

  form: function() {
    return(
      <div>
        <div onClick={this.showModal} className="beckiswrong">LOG IN</div>
        <Modal ref="modal" className="loginModal">
          <div>Log In</div>
          <form onSubmit={this.handleSubmit}>
            {this.errors()}
            <label>Username:
              <input type='text' placeholder='Username' onChange={this.updateUsername} value={this.state.username}/>
            </label><br/>
            <label>Password:
              <input type='password' placeholder='Password' onChange={this.updatePassword} value={this.state.password}/>
            </label><br/>
            <input type="submit" value="Log In"/>
            <div onClick={this.guestLogin}>Guest</div>
          </form>
        </Modal>
      </div>
    );
  },

  greeting: function() {
    if (!this.state.currentUser) {
      return;
    }
    return(
      <div>
        <div>Hi, {this.state.currentUser.username}</div>
        <input type="submit" value="Log out" onClick={this.logout}/>
      </div>
    );
  },

  render: function() {
    return(
      <div>
        {this.greeting()}
        {this.form()}
      </div>
    );
  }
});
