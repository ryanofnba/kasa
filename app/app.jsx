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

const announce1 = 'Hey guys, Sunfest is coming soon (5/28)!! It will include 5 of the cultural clubs on campus including CSA, PCE, TVSA, JSA, and of course KASA. It will be day to hang out at the beach and play competitive games amongst the other clubs. Come out and support KASA and enjoy a day of fun. There are tanks for sale at $10 that look like the design below that you can sport at the event. Make sure to sign up and order a tank!! You can sign up and order tanks at this link https://docs.google.com/…/1EgKuUyZJDFLA_dgPjbco_Hb…/viewform';
const announce2 = "SUBLEASING 1 room in a super nice house (5 bed, 3 bath) for the SUMMER (mid June - mid sept) You'd get your own room and possibly your own restroom; if not you will be sharing with one other person. Price is 680 with utilities covered (negotiable) Furnished with bed, chair, table, drawers if needed Located seconds away from Costco Message me if interested!"
const announce3 = "Can anyone speak fluent Korean? I'm interested in learning a bit...I face a language barrier with my grandparents who are in early stages of Alzheimer's and they are forgetting English. Can anyone help me learn basic words/phrases in exchange for coffee or food?!"
const announce4 = "KASA wishes you a happy holidays! We are grateful for taking time out of your life to be apart of ours."


store.dispatch(actions.addAnnouncement(announce1));
store.dispatch(actions.addAnnouncement(announce2));
store.dispatch(actions.addAnnouncement(announce3));
store.dispatch(actions.addAnnouncement(announce4));

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
