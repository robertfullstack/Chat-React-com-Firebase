import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDusjskO27dTVBMeR61U28TYVx0T1t6EBU",
    authDomain: "chathub-ec1a8.firebaseapp.com",
    projectId: "chathub-ec1a8",
    storageBucket: "chathub-ec1a8.appspot.com",
    messagingSenderId: "1053172553714",
    appId: "1:1053172553714:web:a54c6443d4c808dd53fd6b"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
