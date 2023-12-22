// Import the functions you need from the SDKs you need
"use client";


// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe37hVPALk8g3oqrJvvdKcwvZ3sly3s3Y",
  authDomain: "wall-sf.firebaseapp.com",
  projectId: "wall-sf",
  storageBucket: "wall-sf.appspot.com",
  messagingSenderId: "858892579735",
  appId: "1:858892579735:web:75d84b3a0fff736735cad2"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const storage = firebase.storage();

export default firebase;