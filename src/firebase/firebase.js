import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDc3io3X_evVfbPzt2gb2dXO2gCfMJfo0Y',
    authDomain: 'react-login-e7594.firebaseapp.com',
    databaseURL: 'https://react-login-e7594.firebaseio.com',
    projectId: 'react-login-e7594',
    storageBucket: 'react-login-e7594.appspot.com',
    messagingSenderId: '34767496590',
    appId: '1:34767496590:web:d034b5b3b28d2006a230df',
    measurementId: 'G-RR2CTKB5ZN',
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
