// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9SUx98gk2ao4-Nuh8GGMTqzIeKs8AjM0",
  authDomain: "simple-firebase-authenti-da28e.firebaseapp.com",
  projectId: "simple-firebase-authenti-da28e",
  storageBucket: "simple-firebase-authenti-da28e.appspot.com",
  messagingSenderId: "1096236651568",
  appId: "1:1096236651568:web:9f4833dab00d35da4e09f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth;