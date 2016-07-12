var React = require('react'),
    PhotoStore = require('../stores/photo_store'),
    ApiUtil = require('../util/api_util'),
    PhotoIndexItem = require('./photo_index_item'),
    Masonry = require('react-masonry-component');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      photos: PhotoStore.all()
    };
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  componentDidMount: function() {
    this.photoListener = PhotoStore.addListener(this._onChange);

    if (!window.localStorage.getItem('currentUser') || window.localStorage.getItem('currentUser') === 'false') {
      this.context.router.push('/');
    }
    if (this.state.photos.length === 0){
      ApiUtil.fetchAllPhotos();
    }
  },

  componentWillUnmount: function() {
    this.photoListener.remove();
  },

  _onChange: function() {
    this.setState({ photos: PhotoStore.all() });
  },

  generatePhotoItems: function(){
		return this.state.photos.map(function(photo, key){
			return <PhotoIndexItem
								key={key}
								photo={photo}
								className="photo-index-item"/>;
    });
  },

  render: function(){
    var masonryOptions = {
      fitWidth: true,
      itemSelector: ".photo",
      gutter: 7,
      transitionDuration: '0.5s'

    };

    return(
      <div className='indexWrapper fade-in'>
        <Masonry
          className='photoIndex'
          elementType={'ul'}
          options={masonryOptions}
          disableImageLoaded={true}>

          {this.generatePhotoItems()}
        </Masonry>
      </div>
    );
  }
});
