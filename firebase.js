import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBHC6WAcLp8BJwGuqDP3yFrETe-iY4PapQ",
  authDomain: "uglypet-47706.firebaseapp.com",
  projectId: "uglypet-47706",
  storageBucket: "uglypet-47706.appspot.com",
  messagingSenderId: "655878987244",
  appId: "1:655878987244:web:83b9bc4b78c0ec23b074c9"
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const fireDB = app.firestore();
const auth = app.auth();
export  {app, fireDB, auth};