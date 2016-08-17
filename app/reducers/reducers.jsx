import uuid from 'node-uuid';
import moment from 'moment';

export const announcementsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ANNOUNCEMENT':
      return [
        ...state,
        {
          id: uuid(),
          text: action.text,
          date: moment().unix()
        }
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
