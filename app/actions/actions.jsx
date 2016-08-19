import firebase, { firebaseRef, facebookProvider } from 'app/firebase/';
import moment from 'moment';

export const addAnnouncement = announcement => {
  return {
    type: 'ADD_ANNOUNCEMENT',
    announcement
  };
};

export const startAddAnnouncement = text => {
  return (dispatch, getState) => {
    const announcement = {
      text,
      date: moment().unix()
    };

    const announcementRef = firebaseRef.child('announcements').push(announcement);

    return announcementRef.then(() => {
      dispatch(addAnnouncement({
        ...announcement,
        id: announcementRef.key
      }));
    });
  };
};

export const addAnnouncements = announcements => {
  return {
    type: 'ADD_ANNOUNCEMENTS',
    announcements
  };
};

export const startAddAnnouncements = () => {
  return (dispatch, getState) => {
    const announcementsRef = firebaseRef.child('announcements');

    announcementsRef.once('value').then(snapshot => {
      const announcements = snapshot.val() || {};
      const parsedAnnouncements = [];

      Object.keys(announcements).forEach(announcementId => {
        parsedAnnouncements.push({
          id: announcementId,
          ...announcements[announcementId]
        });
      });

      dispatch(addAnnouncements(parsedAnnouncements));
    });
  };
};

export const changeFamily = family => {
  return {
    type: 'CHANGE_FAMILY',
    family
  };
};

export const changeAuthState = authState => {
  console.log(authState);
  return {
    type: 'CHANGE_AUTH_STATE',
    authState
  };
}

export const startLogin = () => {
  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(facebookProvider).then(result => {
      console.log('Auth Worked!', result);
    }, error => {
      console.log('Unable to auth', error);
    });
  };
};

export const login = uid => {
  return {
    type: 'LOGIN',
    uid
  };
}

export const startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut().then(() => {
      console.log('Logged Out');
    });
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT'
  };
};
