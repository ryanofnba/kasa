import { combineReducers } from 'redux';
import {

} from 'reducers';

export const configure = (initialState = {}) => {
  const reducer = combineReducers();
  const store = redux.createStore(reducer, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
