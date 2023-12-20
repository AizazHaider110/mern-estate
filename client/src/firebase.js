// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-c7210.firebaseapp.com",
  projectId: "mern-estate-c7210",
  storageBucket: "mern-estate-c7210.appspot.com",
  messagingSenderId: "593388891563",
  appId: "1:593388891563:web:004fe6e2fe52e7f873f6ee"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
