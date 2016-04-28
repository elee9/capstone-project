var React = require('react'),
    ReactDOM = require('react-dom'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    Link = ReactRouter.Link,
    hashHistory = ReactRouter.hashHistory,
    SessionApiUtil = require('./util/session_api_util');

var App = require('./components/app'),
    Splash = require('./components/splash'),
    Login = require('./components/login'),
    Signup = require('./components/signup');


var Router = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Splash}/>
      <Route path='login' component={Login}/>
      <Route path='signup' component={Signup}/>
    </Route>
  </Router>
);


document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    Router,
    document.getElementById('root')
  );
});
