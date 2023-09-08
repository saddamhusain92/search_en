import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore,collection} from '@firebase/firestore'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdZBs3iYyF_rVmwj9wr3LsgDD-VzA7Qv4",
  authDomain: "coin-earning.firebaseapp.com",
  projectId: "coin-earning",
  storageBucket: "coin-earning.appspot.com",
  messagingSenderId: "1003738442491",
  appId: "1:1003738442491:web:6abce8dfc71aa21ea89e5e",
  measurementId: "G-49PG2EE7KD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  db = getFirestore(app)
const auth = getAuth(app)
const usercollectionRef = collection(db,"users");

export {db,auth,usercollectionRef}