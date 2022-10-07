import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYI33frPEPQ72xhMj2COxA99Zui_aYZwY",
  authDomain: "u-connect-5624f.firebaseapp.com",
  projectId: "u-connect-5624f",
  storageBucket: "u-connect-5624f.appspot.com",
  messagingSenderId: "251802049343",
  appId: "1:251802049343:web:304941e484340a96bd118a",
  measurementId: "G-K32P49QDE1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
