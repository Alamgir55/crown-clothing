import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDnq3-chKvaquOGU_kIjAj7JAMxBdLKre0",
    authDomain: "crwn-db-64e9f.firebaseapp.com",
    databaseURL: "https://crwn-db-64e9f.firebaseio.com",
    projectId: "crwn-db-64e9f",
    storageBucket: "crwn-db-64e9f.appspot.com",
    messagingSenderId: "7023792399",
    appId: "1:7023792399:web:ad89acadfaa9c63fb96e7a",
    measurementId: "G-FRP7B7NFPR"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
