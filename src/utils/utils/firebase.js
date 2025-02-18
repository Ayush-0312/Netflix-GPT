// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "netflixgpt-850bf.firebaseapp.com",
  projectId: "netflixgpt-850bf",
  storageBucket: "netflixgpt-850bf.firebasestorage.app",
  messagingSenderId: "688719353360",
  appId: "1:688719353360:web:5f202a18ae7f76de95dc95",
  measurementId: "G-ZYEF0VYBEB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

export const auth = getAuth();
