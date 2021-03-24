import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA2WJl6uRXFUfpggO5vlYvNIuB2XhrEJXo",
    authDomain: "clothing-store-db-9108c.firebaseapp.com",
    projectId: "clothing-store-db-9108c",
    storageBucket: "clothing-store-db-9108c.appspot.com",
    messagingSenderId: "1098650084104",
    appId: "1:1098650084104:web:7409b94685c7b0dc9c82bd",
    measurementId: "G-KNF5ERX0ZT"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
