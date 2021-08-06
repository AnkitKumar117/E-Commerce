import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBZm58aiC9qvGwNY3_GuzfjH3-F0n335k0",
    authDomain: "ecommerce-fb2e5.firebaseapp.com",
    projectId: "ecommerce-fb2e5",
    storageBucket: "ecommerce-fb2e5.appspot.com",
    messagingSenderId: "813500704557",
    appId: "1:813500704557:web:858ff33e95d7db623855a4",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //export
  export const auth = firebase.auth();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();