import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBKvSB--iuS3eYB8DbOEeEX22vvgabVr9Y",
    authDomain: "challenge-12a45.firebaseapp.com",
    databaseURL: "https://challenge-12a45-default-rtdb.firebaseio.com",
    projectId: "challenge-12a45",
    storageBucket: "challenge-12a45.appspot.com",
    messagingSenderId: "495254186184",
    appId: "1:495254186184:web:f6f4206b79de2f27431dfd",
    measurementId: "G-RS78LN9VBM"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };