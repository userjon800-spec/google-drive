// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "drive-7d405.firebaseapp.com",
  projectId: "drive-7d405",
  storageBucket: "drive-7d405.firebasestorage.app",
  messagingSenderId: "831430469300",
  appId: "1:831430469300:web:841de30aa21beaf5c0d9e1",
};

// Initialize Firebase
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
!getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
export { db };
