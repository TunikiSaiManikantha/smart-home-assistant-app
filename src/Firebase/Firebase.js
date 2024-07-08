// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD43TL9NGU9ouJbDRRTVFx6P7ZWFds_PxI",
  authDomain: "smart-home-assistant-app-5a1.firebaseapp.com",
  databaseURL: "https://smart-home-assistant-app-5a1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smart-home-assistant-app-5a1",
  storageBucket: "smart-home-assistant-app-5a1.appspot.com",
  messagingSenderId: "1046021640615",
  appId: "1:1046021640615:web:64553826b2af52e85fa682",
  measurementId: "G-YGT1T455R9"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Get Auth instance
const database = getDatabase(app); // Get Database instance
export { app, auth, database }; // Export Firebase instances






