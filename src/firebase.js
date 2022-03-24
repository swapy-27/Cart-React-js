import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC9ezKjCFqfwiHTTGRhAavOC_LSJjlul00",
    authDomain: "cart-react-js.firebaseapp.com",
    projectId: "cart-react-js",
    storageBucket: "cart-react-js.appspot.com",
    messagingSenderId: "251531743137",
    appId: "1:251531743137:web:d3a362587a7ea56f5e45e0"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;