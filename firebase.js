import firebase from 'firebase/app'

import 'firebase/firestore'

var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: `${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com`,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: `${process.env.FIREBASE_PROJECT_ID}.appspot.com`,
    messagingSenderId: process.env.FIREBASE_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: `G-${process.env.FIREBASE_MEASUREMENT_ID}`
  };
  // Initialize Firebase
  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  export default firebase
