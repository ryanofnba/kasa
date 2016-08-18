import firebase from 'firebase';

try {
  const config = {
      apiKey: "AIzaSyDm0SVmHECXWSolqr2J0N1mC8Sh7yj2wUQ",
      authDomain: "cpkasa-test.firebaseapp.com",
      databaseURL: "https://cpkasa-test.firebaseio.com",
      storageBucket: "cpkasa-test.appspot.com",
    };

  firebase.initializeApp(config);
} catch (e) {

}

export const firebaseRef = firebase.database().ref();
export default firebase;
