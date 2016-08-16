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
