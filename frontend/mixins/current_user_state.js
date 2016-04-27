var SessionStore = require('../stores/session_store'),
    SessionApiUtil = require('../util/session_api_util');

var CurrentUserState = {

	getInitialState: function(){
		return {
			currentUser: SessionStore.currentUser(),
			userErrors: SessionStore.errors()
		};
	},

	componentDidMount: function(){
		SessionStore.addListener(this.updateUser);
	},

	updateUser: function(){
		this.setState({
			currentUser: SessionStore.currentUser(),
			userErrors: SessionStore.errors()
		});
	}

};

module.exports = CurrentUserState;
