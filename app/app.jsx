import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  Router,
  IndexRoute,
  hashHistory
} from 'react-router';
import { Provider } from 'react-redux';

import Main from 'Main';
import Home from 'Home';
import About from 'About';
import Applications from 'Applications';
import Groups from 'Groups';
import People from 'People';


// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About} />
      <Route path="applications" component={Applications} />
      <Route path="groups" component={Groups} />
      <Route path="people" component={People} />
      <IndexRoute component={Home} />
    </Route>
  </Router>,
  document.getElementById('app')
);
