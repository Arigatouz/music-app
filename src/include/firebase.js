import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOXs818kTRbPQXCzRZI3T9m239VxOZSAw",
  authDomain: "music-a863c.firebaseapp.com",
  projectId: "music-a863c",
  storageBucket: "music-a863c.appspot.com",
  messagingSenderId: "1076065528815",
  appId: "1:1076065528815:web:0fec1cb0c5a75c0589241a",
  measurementId: "G-T78357DMMT",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const Users = db.collection("users");

export { auth, db, Users };
