var React = require('react'),
	  ReactRouter = require('react-router'),
    browserHistory = ReactRouter.browserHistory;


var CommentItem = React.createClass({
  getInitialState: function() {
    return {
      comment: this.props.comment
    };
  },

  handleClick: function() {
    browserHistory.push("/users/" + this.state.comment.user_id);
  },

  commentWillRecieveProps:function(newProps) {
    if (newProps.comment) {
      this.setState({ comment: newProps.comment });
    }
  },

  commentBody: function() {
    if (this.state.comment) {
      return(
        <li className='comment-item'>
          <section className='comment-header'>
            <div className='comment-profile-pic' onClick={this.handleClick}>
              <img src={this.state.comment.user.profile_pic}/>
            </div>
						<div className='comment-user-info' onClick={this.handleClick}>
              {this.state.comment.user.username}
            </div>
          </section>

          <section className='comment-content-container'>


            <div className='comment-content'>
              {this.state.comment.body}
            </div>
          </section>
        </li>
      );
    }
  },

  render: function() {
    return (
      <div>{this.commentBody()}</div>
    );
  }

});

module.exports = CommentItem;
