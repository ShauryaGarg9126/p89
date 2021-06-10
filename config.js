import firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyCJ-MTLM-XA8xeAU_NmS-rB6rQDIiMEShk",
    authDomain: "p-58-79aff.firebaseapp.com",
    databaseURL: "https://p-58-79aff-default-rtdb.firebaseio.com",
    projectId: "p-58-79aff",
    storageBucket: "p-58-79aff.appspot.com",
    messagingSenderId: "593835280333",
    appId: "1:593835280333:web:64b022ae020c9d955aa684"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();