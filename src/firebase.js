// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAiZaVUNNqN_TomZ4eG__Km8UZyAThK9mU",
    authDomain: "facebook-clone-quang.firebaseapp.com",
    projectId: "facebook-clone-quang",
    storageBucket: "facebook-clone-quang.appspot.com",
    messagingSenderId: "43761448416",
    appId: "1:43761448416:web:f7c25c20ad69292231a785",
    measurementId: "G-ßLP1RTRN1EQ"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;