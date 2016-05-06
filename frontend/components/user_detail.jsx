var React = require('react');
var SessionStore = require('../stores/session_store');
var ApiUtil = require('../util/api_util'),
		UserStore = require('../stores/user_store'),
	  ReactRouter = require('react-router'),
		browserHistory = ReactRouter.browserHistory;

var UserDetail = React.createClass({

  contextTypes: {
    router: React.PropTypes.object
  },

	handleClick: function(){
		browserHistory.push("/users/" + this.props.user.id);
	},

	render: function() {
		return (
			<div className="user-detail">
				<section className="img-container">
					<img src={this.props.user.profile_pic}/>
				</section>
				<section onClick={this.handleClick} className="user-info">
					{this.props.user.username}
				</section>
			</div>
		);
	}
});

module.exports = UserDetail;
