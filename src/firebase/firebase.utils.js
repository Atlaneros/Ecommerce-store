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

export const createUserProfileDocument = async (userAuth, additionalData) =>{
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid})`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createAt = new Date();
    
    try{
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })

    }catch(error){
      console.log('error creating user', error.message); 
    }
  }
  return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

