import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADp3AOkQpVxfwf7ZWHpHI6KpnbwRiT1VU",
  authDomain: "clone-a7d5a.firebaseapp.com",
  projectId: "clone-a7d5a",
  storageBucket: "clone-a7d5a.appspot.com",
  messagingSenderId: "318655555429",
  appId: "1:318655555429:web:dffd48672bb399a55da38c",
  measurementId: "G-WWES0RGSHZ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  db,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  addDoc,
  collection,
  onAuthStateChanged,
  signOut,
};
