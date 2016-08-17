const redux = require('redux');

import {
  announcementsReducer,
  familyReducer
} from 'reducers';

export const configure = (initialState = {}) => {
  const reducer = redux.combineReducers({
    announcements: announcementsReducer,
    familyView: familyReducer
  });

  const store = redux.createStore(reducer, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
