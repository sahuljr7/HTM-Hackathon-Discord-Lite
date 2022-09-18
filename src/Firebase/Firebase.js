import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const provider = new firebase.auth.GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyD_DovLz-2ouIbByp0BFGtDEP_u23pRzkA",
  authDomain: "hackathon-htm.firebaseapp.com",
  projectId: "hackathon-htm",
  storageBucket: "hackathon-htm.appspot.com",
  messagingSenderId: "914618077567",
  appId: "1:914618077567:web:5b4c82794f5b8cb58dca4a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, provider, storage };
