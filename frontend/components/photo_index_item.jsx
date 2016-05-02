var React = require('react');


module.exports = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  handleClick: function(event) {
    this.context.router.push('photos/'+this.props.photo.id);
    event.stopPropagation();
  },

  render: function() {
    return (
      <li className='photo'>
        <img onClick={this.handleClick} src={this.props.photo.photo_url}/>
      </li>
    );
  }
});
