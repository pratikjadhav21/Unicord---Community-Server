import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAbtjysAWk4T4YzG_EgS8xUMj-D0z5mvqc",
    authDomain: "community-server-235a8.firebaseapp.com",
    projectId: "community-server-235a8",
    storageBucket: "community-server-235a8.appspot.com",
    messagingSenderId: "11127598228",
    appId: "1:11127598228:web:5882bc974b2630a7551881",
    measurementId: "G-7DCL5CC7L8"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GithubAuthProvider();

 export {auth, provider};
 export default db;