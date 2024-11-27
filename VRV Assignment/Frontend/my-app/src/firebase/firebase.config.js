// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN02_Qa2lr3pG9jye0SibKqK3K2yJtOfU",
  authDomain: "dates-ladoo.firebaseapp.com",
  projectId: "dates-ladoo",
  storageBucket: "dates-ladoo.firebasestorage.app",
  messagingSenderId: "316737842838",
  appId: "1:316737842838:web:4b0aaf30758f6293715cb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and enable offline persistence
const db = getFirestore(app);

// Enable offline persistence
enableIndexedDbPersistence(db)
  .catch((err) => {
    if (err.code === "failed-precondition") {
      console.log("Persistence failed: multiple tabs open");
    } else if (err.code === "unimplemented") {
      console.log("Persistence is not available on this platform.");
    }
  });

export { db }; // Export Firestore for use in your app
export default app;
