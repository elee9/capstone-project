var React = require('react'),
    SessionStore = require('../stores/session_store'),
    PhotoStore = require('../stores/photo_store'),
    ApiUtil = require('../util/api_util'),
    UserDetail = require('../components/user_detail');

var PhotoDetail = React.createClass({
  getInitialState: function() {
    return {
      photo: "",
    };
  },

  contextTypes: {
    router: React.PropTypes.object
  },

  componentDidMount: function(){
    console.log('i mounted');
    this.photoListener = PhotoStore.addListener(this._onChange);

		this.sessionListener = SessionStore.addListener(this._onSessionChange);

		$(document.body).on('keydown', this.handleKey);

    if (window.localStorage.getItem('currentUser') === "false") {
      this.context.router.push('/');
    }
	},

  _onChange: function(){
    this.setState({photo: PhotoStore.find(parseInt(this.props.params.id))});
  },

  _onSessionChange: function(){
    this.setState({current: SessionStore.currentUser()});
  },

  _photoLoaded: function(){
		if (this.state.photo){
			this.havePhoto = true;
		} else {
			this.havePhoto = false;
			ApiUtil.fetchAllPhotos();
		}
	},

  componentWillUnmount: function(){
		this.photoListener.remove();
		this.sessionListener.remove();
		$(document.body).off('keydown', this.handleKey);
	},

  handleOuterClick: function(e){
    if (e.currentTarget.className === "photo-detail"){
      this.context.router.goBack();
    }
  },

  handleInnerClick: function(e){
    e.stopPropagation();
  },

  handleKey: function(e){
		if (e.which === 27){
			this.context.router.goBack();
		}

		// if (e.which === 37){
		// 	this.grabSequential("prev")
		// } else if (e.which === 39){
		// 	this.grabSequential("next")
		// }
	},

  render: function() {
    this._photoLoaded();
    if (this.havePhoto){
			return (
				<div className="photo-detail-container fade-in">
					<div className="photo-detail" onClick={this.handleOuterClick}>
							<img className="img-detail" src={this.state.photo.photo_url} onClick={this.handleInnerClick}/>
					</div>
					<section className="photo-info">

	          <UserDetail user={this.state.photo.user}/>

	          <div className="info">
	          	<div className="detail-title"> {this.state.photo.title} </div>
	          	<div className="detail-description"> {this.state.photo.description} </div>
	          </div>
					</section>

				</div>
			);
		} else {
			return (<div className="loader">Loading...</div>);
		}
  }
});

module.exports = PhotoDetail;
