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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        console.log(snapShot);
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }
    // console.log(userRef);
    return  userRef;
};

  !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
