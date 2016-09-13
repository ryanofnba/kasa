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
import Families from 'Families';
import KasaEvents from 'KasaEvents';
const actions = require('actions');
//Redux
const store = require('configureStore').configure();
import firebase from 'app/firebase/';




store.subscribe(() => {
  const state = store.getState();
  console.log('New State', state);
});

store.dispatch(actions.startAddAnnouncements());
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(actions.login(user.uid, user.displayName, user.photoURL));
    store.dispatch(actions.changeAuthState(true));
  }
  else {
    store.dispatch(actions.logout());
    store.dispatch(actions.changeAuthState(false));
  }
});

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
        <Route path="families" component={Families} />
        <Route path="kasaevents" component={KasaEvents} />
        <IndexRoute component={Home} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
