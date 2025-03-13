// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChNNtqnmGWqcEe7219yd2Pe4cpjjOR61A",
  authDomain: "ai-fitness-planner-4e4ab.firebaseapp.com",
  projectId: "ai-fitness-planner-4e4ab",
  storageBucket: "ai-fitness-planner-4e4ab.firebasestorage.app",
  messagingSenderId: "535529102133",
  appId: "1:535529102133:web:71e5bf2c443aa77a864a7c",
  measurementId: "G-V5CKY2EHBL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);