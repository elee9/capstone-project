var React = require('react');


module.exports = React.createClass({
  render: function() {
    return (
      <li className='photo'>
        <img src={this.props.photo.photo_url}/>
      </li>
    );
  }
});
