//import firebase from 'firebase/app';

//import 'firebase/firestore';
//import 'firebase/auth';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyASIjbqvINdAxmCZXV-dLQPtSd0kk3jbik",
    authDomain: "moba-shop-c2cf5.firebaseapp.com",
    projectId: "moba-shop-c2cf5",
    storageBucket: "moba-shop-c2cf5.appspot.com",
    messagingSenderId: "268086984622",
    appId: "1:268086984622:web:c71acc8e9b9891aa68123f",
    measurementId: "G-9P2MZJ17QT"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

