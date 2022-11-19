// Import the functions you need from the SDKs you need
import app from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT5AchBIafuY3QlXVFsYCLqzGQdrhYqBc",
  authDomain: "chatapp-75592.firebaseapp.com",
  databaseURL:
    "https://chatapp-75592-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chatapp-75592",
  storageBucket: "chatapp-75592.appspot.com",
  messagingSenderId: "355904284551",
  appId: "1:355904284551:web:ee653e303e9089d6ff5522",
};

// Initialize Firebase
const initFireBase = app.initializeApp(firebaseConfig);
export default initFireBase;
