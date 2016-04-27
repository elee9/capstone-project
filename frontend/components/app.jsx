var React = require('react'),
    Login = require('./login'),
    Link = require('react-router').Link;

module.exports = React.createClass({
  render: function() {
    return(
      <div className="app-container">
        <div className="photo-grid">
          {this.props.children}
          <Login/>
        </div>
      </div>
    );
  }
});
