// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'; // Corrected import

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrJGAF2zGZVtXnmsKR_LjxXipmhvMxCDw",
  authDomain: "pantrytracker-7613a.firebaseapp.com",
  projectId: "pantrytracker-7613a",
  storageBucket: "pantrytracker-7613a.appspot.com",
  messagingSenderId: "390059639725",
  appId: "1:390059639725:web:09301107af8402ee58d724",
  measurementId: "G-C1BSRTPSSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { app, firestore };
