import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBizuhZX4crM7YAsJoBuxZJd-DBiWYYQfo",
    authDomain: "linkedin-clone-94a29.firebaseapp.com",
    projectId: "linkedin-clone-94a29",
    storageBucket: "linkedin-clone-94a29.appspot.com",
    messagingSenderId: "453864905200",
    appId: "1:453864905200:web:325bbcb1298fa28861e535"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export { db, auth };