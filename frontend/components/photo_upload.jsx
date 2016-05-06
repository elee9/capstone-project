var React = require('react'),
    UploadStore = require('../stores/upload_store'),
    SessionStore = require('../stores/session_store'),
    Dropzone = require('react-dropzone'),
    PhotoActions = require('../actions/photo_actions'),
    UploadActions = require('../actions/upload_actions'),
    Modal = require('boron/OutlineModal'),
    ApiUtil = require('../util/api_util');

var PhotoUpload = React.createClass({
  getInitialState: function() {
    return {
      title: "",
      description: "",
      image_url: "",
      errors: []
    };
  },

  componentDidMount: function() {
    this.uploadListener = UploadStore.addListener(this.onPhotoUpload);
  },

  onPhotoUpload: function() {
    this.setState({image_url: UploadStore.getImageUrl()});
    document.getElementById('submitPhoto').disabled = false;
  },

  componentWillUnmount: function() {
    this.uploadListener.remove();
  },

  handleImageUpload: function(file) {
    document.getElementById('submitPhoto').disabled = true;
    if ((/\.(gif|jpg|jpeg|tiff|png)$/i).test(file[0].name)) {
      UploadActions.fetchPresignedUrl('photos/', file[0].name, file[0]);
    } else {
      console.log("asdfasdf");
    }
  },

  showModal: function(){
    this.setState({ title: "" });
    this.setState({ description: "" });
    this.setState({ image_url: "" });
    this.setState({ errors: [] });
    this.refs.modal.show();
  },

  hideModal: function() {
    this.refs.modal.hide();
  },

  errors: function() {
    if (!this.state.errors){
      return;
    }
    var self = this;
    return (<ul>
    {
      this.state.errors.map(function(el, i){
        return (<li className="error" key={i}>{el}</li>);
      })
    }
    </ul>);
  },

  updateTitle: function(event) {
    this.setState({ title: event.target.value });
  },

  updateDescription: function(event) {
    this.setState({ description: event.target.value });
  },

  handleSubmit: function(event) {
    if (event) {
      event.preventDefault();
    }
    var that = this;

    var photo = {
      title: this.state.title,
      description: this.state.description,
      photo_url: this.state.image_url,
    };
    console.log(photo);
    ApiUtil.createPhoto(photo, function(){
      this.hideModal();
    }.bind(this));
  },

  dropzone: function () {
    if (this.state.image_url) {
      return (
        <img className='upload-image' ref='img' src={this.state.image_url}/>
      );
    } else {
      return (
        <Dropzone className="drop-zone" activeClassName='drop-activated' onDrop={this.handleImageUpload} multiple={false} accept='image/*' >
          <div className="drop-text">
            Drag and drop your photo here.
          </div>
        </Dropzone>
      );
    }
  },

  form: function() {
    return(
      <Modal ref='modal'>
        <div className="row uploadModal">
          <div className="loginText">UPLOAD</div>
            {this.errors()}
            <form onSubmit={this.handleSubmit} className="loginForm">
                <div className="row">
                  <div className="input-field inputText">
                    <input type='text' id="title" onChange={this.updateTitle} value={this.state.title}/>
                    <label id='userlabel' htmlFor="title" >Title</label>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field inputText">
                    <input type='text' id="description" onChange={this.updateDescription} value={this.state.description}/>
                    <label id='passlabel' htmlFor="description">Description</label>
                  </div>
                </div>

                {this.dropzone()}



              <button type="submit" id='submitPhoto' disabled='true' name="action" value="submit" className="waves-effect waves-light btn">Upload Photo</button>
            </form>
          </div>
      </Modal>

    );
  },

  render: function() {
    var uploadShow;

    if (this.props.onIndex === 'true') {
      uploadShow = 'beckiswrong uploadText';
    } else {
      uploadShow = 'beckiswrong uploadText hidden';
    }

    return (
      <div>
        <div>
          <div onClick={this.showModal} className={uploadShow}>upload</div>
            {this.form()}
        </div>
      </div>
    );
  }

});

module.exports = PhotoUpload;
