import * as redux from 'redux';
import thunk from 'redux-thunk';

import {
  announcementsReducer,
  familyReducer,
  authStateReducer,
  authUIDReducer,
  eventReducer
} from 'reducers';

export const configure = (initialState = {}) => {
  const reducer = redux.combineReducers({
    authState: authStateReducer,
    announcements: announcementsReducer,
    familyView: familyReducer,
    uid: authUIDReducer,
    events: eventReducer
  });

  const store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
