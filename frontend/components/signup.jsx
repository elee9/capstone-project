var React = require('react'),
    Link = require('react-router').Link,
    SessionApiUtil = require('../util/session_api_util'),
    Modal = require('boron/OutlineModal');

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

  showModal: function(){
    this.refs.modal.show();
  },

  hideModal: function() {
    this.refs.modal.hide();
  },

  form: function() {
    return(
      <div>
        <div onClick={this.showModal} className="beckiswrong">SIGN UP</div>
        <Modal ref="modal" className="signupModal">
          <div className="row">
            <div className="signupText">Sign Up</div>
              <form onSubmit={this.handleSubmit} class="signupForm">
                  <div className="row">
                    <div className="input-field col s6 inputText">
                      <input type='text' id="username" onChange={this.updateUsername} value={this.state.username}/>
                      <label id='userlabel' htmlFor="username">Username</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s6 inputText">
                      <input type='text' id="first_name" onChange={this.updateFirstName} value={this.state.first_name}/>
                      <label htmlFor="first_name">First Name</label>
                    </div>

                    <div className="input-field col s6 inputText">
                      <input type='text' id="last_name" onChange={this.updateLastName} value={this.state.last_name}/>
                      <label htmlFor="last_name">Last Name</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s6 inputText">
                      <input type='text' id="email" onChange={this.updatePassword} value={this.state.email}/>
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s6 inputText">
                      <input type='password' id="password" onChange={this.updatePassword} value={this.state.password}/>
                      <label id='passlabel' htmlFor="password">Password</label>
                    </div>
                  </div>

                <button type="submit" name="action" value="submit" className="waves-effect waves-light btn right">Log In</button>
                <button onClick={this.guestLogin} className="waves-effect waves-light btn left">Guest</button>
              </form>
            </div>
        </Modal>
      </div>
    );
  },

  render: function() {
    return(
      <div>
        {this.form()}
      </div>
    );
  }
});
