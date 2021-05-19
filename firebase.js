import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseapp.com`,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.appspot.com`,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: `G-${process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID}`
  };
  // Initialize Firebase
  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  export default firebase
