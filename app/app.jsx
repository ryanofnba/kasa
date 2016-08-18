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
const actions = require('actions');
//Redux
const store = require('configureStore').configure();

store.subscribe(() => {
  const state = store.getState();
  console.log('New State', state);
});

//Fetch data
store.dispatch(actions.startAddAnnouncements());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="about" component={About} />
        <Route path="applications" component={Applications} />
        <Route path="groups" component={Groups} />
        <Route path="people" component={People} />
        <IndexRoute component={Home} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
