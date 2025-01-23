// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCluFVEav6bQ-n1hHP-yyETm0zYJdqmZ6Y",
  authDomain: "projetounimarpos.firebaseapp.com",
  projectId: "projetounimarpos",
  storageBucket: "projetounimarpos.firebasestorage.app",
  messagingSenderId: "234819547810",
  appId: "1:234819547810:web:2572d342e54d0374339dfb",
  measurementId: "G-LHE4JQMP9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);