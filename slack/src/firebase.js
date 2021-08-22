import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCVy3TGh5Q55bg5-6ItVur5CpDFl8F0K-E",
    authDomain: "slackclone-eb4e8.firebaseapp.com",
    projectId: "slackclone-eb4e8",
    storageBucket: "slackclone-eb4e8.appspot.com",
    messagingSenderId: "435954608623",
    appId: "1:435954608623:web:3e1a5990f520924ef66e1a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };