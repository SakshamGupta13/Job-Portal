import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkHR--KJJ5oPWbSFwREhlcFLVlNJ3qHSs",
  authDomain: "job-portal-c241b.firebaseapp.com",
  projectId: "job-portal-c241b",
  storageBucket: "job-portal-c241b.firebasestorage.app",
  messagingSenderId: "268650485149",
  appId: "1:268650485149:web:8ca4afe9ba531ef2b60b74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}