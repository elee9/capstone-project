var SessionStore = require('../stores/session_store'),
    SessionActions = require('../actions/session_actions');

var CurrentUserState = {

	getInitialState: function(){
		return {
			currentUser: SessionStore.currentUser(),
			userErrors: SessionStore.errors()
		};
	},

	componentDidMount: function(){
		SessionStore.addListener(this.updateUser);
		if (typeof SessionStore.currentUser() === 'undefined') {
			SessionActions.fetchCurrentUser();
		}
	},

	updateUser: function(){
		this.setState({
			currentUser: SessionStore.currentUser(),
			userErrors: SessionStore.errors()
		});
	}

};

module.exports = CurrentUserState;
