import firebase from 'firebase/compat/app'
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAcmpf2rQ3yB0geIEXxcrhbuUiAihgwXZg",
    authDomain: "theflix0.firebaseapp.com",
    projectId: "theflix0",
    storageBucket: "theflix0.appspot.com",
    messagingSenderId: "333010508168",
    appId: "1:333010508168:web:5e47cb1a95410dd7f0c23d"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth, db};