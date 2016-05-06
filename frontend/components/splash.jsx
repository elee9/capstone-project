var React = require('react');

module.exports = React.createClass({

  contextTypes: {
    router: React.PropTypes.object
  },

  componentDidMount: function() {
    if (window.localStorage.getItem('currentUser') !== 'false') {
      this.context.router.push('/index');
    }
  },

  render: function() {
    return(
      <div className="splashHolder">
      </div>
    );
  }
});
