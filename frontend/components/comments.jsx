var React = require('react'),
    CommentForm = require('./comment_form'),
    CommentItem = require('./comment_item');

var Comments = React.createClass({
  getInitialState: function() {
    return {
      comments: this.props.photo.comments,
      photo: this.props.photo
    };
  },

  generateCommentItems: function() {
    var self = this;
    if(this.state.comments) {
      return this.state.comments.map(function(comment, idx) {
        return <CommentItem key={idx} comment={comment}/>;
      });
    }
  },

  componentWillReceiveProps: function(newProps) {
    if (newProps.photo) {
      this.setState({comments: newProps.photo.comments,
                     photo: newProps.photo});
    }
  },

  render: function() {
    return (
      <div className="comment-container">
        <div className="comment-title">Comments</div>
        <CommentForm photo={this.state.photo} current={this.props.current}/>
        <ul className="comment-list">
          {this.generateCommentItems()}
        </ul>
      </div>
    );
  }

});

module.exports = Comments;
