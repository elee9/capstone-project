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
    this.setState({ username: "" });
    this.setState({ password: "" });
    this.setState({ errors: [] });
    this.setState({ first_name: "" });
    this.setState({ last_name: "" });
    this.setState({ email: "" });
    this.refs.modal.show();
  },

  hideModal: function() {
    this.refs.modal.hide();
  },

  form: function() {
    return(
        <Modal ref="modal">
          <div className="row signupModal">
            <div className="signupText">SIGN UP</div>
              <form onSubmit={this.handleSubmit} className="signupForm">
                  <div className="row">
                    <div className="input-field col s12 inputText">
                      <input type='text' id="username"
                             onChange={this.updateUsername}
                             value={this.state.username}/>
                      <label id='userlabel' htmlFor="username">Username</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s6 inputText">
                      <input type='text' id="first_name"
                             onChange={this.updateFirstName}
                             value={this.state.first_name}/>
                      <label htmlFor="first_name">First Name</label>
                    </div>

                    <div className="input-field col s6 inputText">
                      <input type='text' id="last_name"
                             onChange={this.updateLastName}
                             value={this.state.last_name}/>
                      <label htmlFor="last_name">Last Name</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12 inputText">
                      <input type='text' id="email"
                             onChange={this.updateEmail}
                             value={this.state.email}/>
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12 inputText">
                      <input type='password' id="password"
                             onChange={this.updatePassword}
                             value={this.state.password}/>
                      <label id='passlabel' htmlFor="password">Password</label>
                    </div>
                  </div>

                <button type="submit" name="action" value="submit"
                        className="waves-effect waves-light btn">Log In
                </button>
              </form>
            </div>
        </Modal>
    );
  },

  render: function() {
    return(
      <div>
        {this.form()}
        <div onClick={this.showModal} className="beckiswrong">SIGN UP</div>
      </div>
    );
  }
});
