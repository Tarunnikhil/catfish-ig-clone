import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCW2DQh-IE7PCILjLe-adfwzRjZdDuJrXo",
  authDomain: "instagram-clone-nikhil.firebaseapp.com",
  projectId: "instagram-clone-nikhil",
  storageBucket: "instagram-clone-nikhil.appspot.com",
  messagingSenderId: "159320337393",
  appId: "1:159320337393:web:af93eb492c05806aedf250",
  measurementId: "G-NY74V1XD5K",
};

// Initialize Firebase
const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = firebase.firestore();

export { firebase, db };
