import uuid from 'node-uuid';
import moment from 'moment';

export const announcementsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ANNOUNCEMENT':
      return [
        ...state,
        action.announcement
      ];
    case 'ADD_ANNOUNCEMENTS':
      return [
        ...state,
        ...action.announcements
      ];
    default:
      return state;
  }
};

export const familyReducer = (state = 'RBL', action) => {
  switch (action.type) {
    case 'CHANGE_FAMILY':
      return action.family;
    default:
      return state;
  }
};

export const eventReducer = (state = 'Passings', action) => {
  switch (action.type) {
    case 'CHANGE_EVENT':
      return action.events;
    default:
      return state;
  }
};

export const authStateReducer = (state = false, action) => {
  switch (action.type) {
    case 'CHANGE_AUTH_STATE':
      return action.authState;
    default:
      return state;
  }
};

export const authUIDReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
