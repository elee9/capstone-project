var React = require('react'),
    ReactDOM = require('react-dom'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    Link = ReactRouter.Link,
    browserHistory = ReactRouter.browserHistory,
    SessionApiUtil = require('./util/session_api_util');

    window.ApiUtil = require('./util/api_util');

var App = require('./components/app'),
    Splash = require('./components/splash'),
    Login = require('./components/login'),
    Signup = require('./components/signup'),
    PhotoIndex = require('./components/photos_index'),
    PhotoDetail = require('./components/photo_detail'),
    UserProfile = require('./components/user_profile');


var Router = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Splash}/>
      <Route path='/index' component={PhotoIndex}/>
      <Route path="/photos/:id" component={PhotoDetail}/>
      <Route path='/users/:id' component={UserProfile}/>
    </Route>
  </Router>
);


document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    Router,
    document.getElementById('root')
  );

  $(".dropdown-button").dropdown();
});
