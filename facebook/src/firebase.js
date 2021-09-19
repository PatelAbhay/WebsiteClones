import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB5QUQe2vn3Y6Y9Ka8UHAqG1EFWp5JrL2I",
    authDomain: "facebookclone-129e8.firebaseapp.com",
    projectId: "facebookclone-129e8",
    storageBucket: "facebookclone-129e8.appspot.com",
    messagingSenderId: "272738369296",
    appId: "1:272738369296:web:f124ea2d56841536506f95",
    measurementId: "G-4Z6R3X20F2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };