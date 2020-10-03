import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_UA3NJk-9kXvftfrDrc8wSqDZavDxmS4",
  authDomain: "whatsapp-clone-6bfeb.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-6bfeb.firebaseio.com",
  projectId: "whatsapp-clone-6bfeb",
  storageBucket: "whatsapp-clone-6bfeb.appspot.com",
  messagingSenderId: "82848931618",
  appId: "1:82848931618:web:13320aa04e8e211ace8f7b",
  measurementId: "G-SLW90PG39V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

// Implicit imports give access to all visible types in the type (or package) that precedes the ".*"; types imported in this way never shadow other types.
export { auth, provider };
// Explicit imports give access to just the named type; they can shadow other types that would normally be visible through an implicit import, or through the normal package visibility rules
export default db;
