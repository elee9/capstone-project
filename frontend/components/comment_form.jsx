var React = require('react'),
    CommentActions = require('../actions/comment_actions');

var CommentForm = React.createClass({
  getInitialState: function() {
    return {
      photo_id: "",
      body: ""
    };
  },

  handleSubmit: function(event){
		event.preventDefault();
		var params = {
			body: this.state.body,
			photo_id: this.state.photo_id
		};
		CommentActions.createComment(params);
    this.setState({ body: "" });
	},

  updateBody: function(event) {
    this.setState({ body: event.target.value });
    this.setState({ photo_id: this.props.photo.id });
  },

  render: function() {
    return (
  		<div className="comment-form">
  			<form onSubmit={this.handleSubmit}>
  				<div className="comment-input">
  					<input
  						type="text"
              onChange={this.updateBody}
              value={this.state.body}
  						className="form-input"
  						placeholder={"Leave a comment..."}/>
  				</div>
  			</form>
  		</div>
    );
  }

});

module.exports = CommentForm;
