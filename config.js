import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyB0wPj81sqc3pHMSVioelgkhGy9kPHUbH4",
    authDomain: "book-santa-167d8.firebaseapp.com",
    projectId: "book-santa-167d8",
    storageBucket: "book-santa-167d8.appspot.com",
    messagingSenderId: "378253563729",
    appId: "1:378253563729:web:73b9012692a090df476570"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();