var React = require('react'),
    Login = require('./login'),
    Link = require('react-router').Link,
    NavBar = require('./nav_bar');

module.exports = React.createClass({
  render: function() {
    return(
      <div className="app-container">
        <NavBar/>

        {this.props.children}

      </div>
    );
  }
});
