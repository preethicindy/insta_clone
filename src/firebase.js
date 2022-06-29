import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDSp1NGIiEMynfxxNYnPBMo_LfzpQG9yZo",
  authDomain: "instagram-clone-react-e123e.firebaseapp.com",
  projectId: "instagram-clone-react-e123e",
  storageBucket: "instagram-clone-react-e123e.appspot.com",
  messagingSenderId: "998928910595",
  appId: "1:998928910595:web:aefd009722077e9b45c136",
  measurementId: "G-C6DMT1XVH6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = getFirestore(firebaseApp);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
