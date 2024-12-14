// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHw9mf_zlhgbIVSJkoOZjKODOzgVzbpmE",
  authDomain: "coffee-store-dca4c.firebaseapp.com",
  projectId: "coffee-store-dca4c",
  storageBucket: "coffee-store-dca4c.firebasestorage.app",
  messagingSenderId: "118891575152",
  appId: "1:118891575152:web:e50c4e839ef2aad20901b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);