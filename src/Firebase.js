// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage' 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "recover-pals.firebaseapp.com",
  databaseURL: "http://recover-pals.firebaseio.com",
  projectId: "recover-pals",
  storageBucket: "recover-pals.appspot.com",
  messagingSenderId: "73234787126",
  appId: "1:73234787126:web:4f74e54b6faaf649d62197",
  measurementId: "G-D6GYK0EFKL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app)


export { db, auth, storage };
