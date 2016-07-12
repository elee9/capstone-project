var React = require('react'),
    Masonry = require('react-masonry-component'),
    SessionStore = require('../stores/session_store'),
    UserStore = require('../stores/user_store'),
    ApiUtil = require('../util/api_util'),
    PhotoIndexItem = require('./photo_index_item');

var UserProfile = React.createClass({

  getInitialState: function() {
     return {
       currentUser: SessionStore.currentUser(),
       user: UserStore.getUser(),
     };
   },

   _onUserChange: function() {
     this.setState({ user: UserStore.getUser() });
   },

   _onSessionChange: function() {
     this.setState({ currentUser: SessionStore.currentUser() });
   },

   componentDidMount: function() {
     this.userListener = UserStore.addListener(this._onUserChange);
     this.currentUserListener = SessionStore.addListener(this._onSessionChange);
     ApiUtil.fetchUser(this.props.params.id);
   },

   componentWillUnmount: function() {
     this.userListener.remove();
     this.currentUserListener.remove();
   },

   exploreNavList: function() {
     var cName = "explore-button " + "type-selected";
     if (this.state.selected === "All Images") {
       return (
         <ul>
           <li className={cName} onClick={this.allImages}>All Images</li>
           <li className="explore-button" onClick={this.editUser}>Edit Profile</li>
         </ul>
       );
     } else  {
       return (
         <ul>
           <li className="explore-button" onClick={this.allImages}>All Images</li>
           <li className={cName} onClick={this.editUser}>Edit Profile</li>
         </ul>
       );
     }
   },

   render: function() {
     if (this.state.user) {
       var name = this.state.user.first_name + " " + this.state.user.last_name;
       var imageList = this.state.user.photos.map(function(photo, index) {
         return <PhotoIndexItem key={index} photo={photo} className="photo-index-item"/>;
       });
     }

     var masonryOptions = {
       fitWidth: true,
       itemSelector: ".photo",
       gutter: 7,
       transitionDuration: '0.5s'
     };

     var display;

     display = <Masonry
                 className="photoIndex"
                 elementType={'ul'}
                 options={masonryOptions}
                 disableImagesLoaded={false}>
                 {imageList}
               </Masonry>;



     return (
       <div className="profile-container">
         <div className="cover-container">
           <div className="cover-header">{name}</div>
           <div className="userNavBar">{this.exploreNavList()}</div>
         </div>
         <div className="profile-images-container">
           {display}
         </div>
       </div>
     );
   }


});

module.exports = UserProfile;
