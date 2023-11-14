
// Import the functions you need from the SDKs you need
import {initializeApp}from 'firebase/app'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcQztNHcWONMRXqE0GF7amphZ436roJQI",
  authDomain: "minekart-6ff8f.firebaseapp.com",
  projectId: "minekart-6ff8f",
  storageBucket: "minekart-6ff8f.appspot.com",
  messagingSenderId: "393505059988",
  appId: "1:393505059988:web:2a566c3c8d5f0852d0f081",
  measurementId: "G-RECYVV41TV"
};

// Initialize Firebase
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db =getFirestore(initializeApp(firebaseConfig))
