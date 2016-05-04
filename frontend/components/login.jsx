var React = require('react'),
    Link = require('react-router').Link,
    SessionApiUtil = require('../util/session_api_util'),
    CurrentUserState = require('../mixins/current_user_state'),
    SessionStore = require('../stores/session_store'),
    Modal = require('boron/OutlineModal');

module.exports = React.createClass({
  componentDidMount: function() {
    this.errorListener = SessionStore.addListener(this.getErrors);
  },

  componentWillUnmount: function() {
    this.errorListener.remove();
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getErrors: function() {
    this.setState({ errors: SessionStore.errors() });
  },

  getInitialState: function() {
    return {
      username: "", password: "", errors: []
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
      that.context.router.push('index');
    });
  },

  showModal: function(){
    this.setState({username: ""});
    this.setState({password: ""});
    this.setState({errors: []});
    this.refs.modal.show();
  },

  hideModal: function() {
    this.refs.modal.hide();
  },

  errors: function() {
    if (!this.state.errors){
      return;
    }
    var self = this;
    return (<ul>
		{
			this.state.errors.map(function(el, i){
				return (<li className="error" key={i}>{el}</li>);
			})
		}
		</ul>);
  },

  guestLogin: function(event) {
    event.preventDefault();
    var that = this;
    $('.left').addClass('disabled');
    
    this.setState({
      username: '',
      password: ''
    });

    var username = "demothedog".split("");
    var password = "demodemo".split("");
    var time = 50;

    username.forEach(function (letter) {
      time += 50;
      setTimeout(function() {
        $('#userlabel').addClass("active");
      }, time + 25);
      document.getElementById("username").focus();
      setTimeout(function () {
        that.setState({username: that.state.username + letter});
      }, time);
    });

    time += 500;

    password.forEach(function (letter) {
      time += 50;
      setTimeout(function() {
        $('#passlabel').addClass("active");
      }, time + 25);
      setTimeout(function () {
        document.getElementById("password").focus();
        that.setState({password: that.state.password + letter});
      }, time);
    });

    time += 650;

    setTimeout(this.handleSubmit, time);

  },

  form: function() {
    return(
      <Modal ref='modal'>
        <div className="row loginModal">
          <div className="loginText">LOG IN</div>
            {this.errors()}
            <form onSubmit={this.handleSubmit} className="loginForm">
                <div className="row">
                  <div className="input-field inputText">
                    <input type='text' id="username" onChange={this.updateUsername} value={this.state.username}/>
                    <label id='userlabel' htmlFor="username">Username</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field inputText">
                    <input type='password' id="password" onChange={this.updatePassword} value={this.state.password}/>
                    <label id='passlabel' htmlFor="password">Password</label>
                  </div>
                </div>

              <button type="submit" name="action" value="submit" className="waves-effect waves-light btn right">Log In</button>
              <button onClick={this.guestLogin} className="waves-effect waves-light btn left">Guest</button>
            </form>
          </div>
      </Modal>

    );
  },

  render: function() {
    return(
      <div>
        <div>
          <div onClick={this.showModal} className="beckiswrong">LOG IN</div>
            {this.form()}
        </div>
      </div>
    );
  }
});
