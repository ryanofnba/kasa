import firebase from 'firebase';

try {
  const config = {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      databaseURL: process.env.DATABASE_URL,
      storageBucket: process.env.STORAGE_BUCKET,
    };

  firebase.initializeApp(config);
} catch (e) {

}

export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const firebaseRef = firebase.database().ref();
export default firebase;
