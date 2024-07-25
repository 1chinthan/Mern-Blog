// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-14297.firebaseapp.com",
  projectId: "blog-14297",
  storageBucket: "blog-14297.appspot.com",
  messagingSenderId: "891861312261",
  appId: "1:891861312261:web:acadc22824a75e11d9cd6c",
  measurementId: "G-Q1EJ16GRME"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 
