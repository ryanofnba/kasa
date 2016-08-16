const redux = require('redux');

import {
  announcementsReducer
} from 'reducers';

export const configure = (initialState = {}) => {
  const reducer = redux.combineReducers({
    announcements: announcementsReducer
  });

  const store = redux.createStore(reducer, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
