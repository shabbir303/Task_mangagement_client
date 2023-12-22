// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbsIAAgLwIaluc4H-657uANk2aWElU82E",
  authDomain: "task-management-215fa.firebaseapp.com",
  projectId: "task-management-215fa",
  storageBucket: "task-management-215fa.appspot.com",
  messagingSenderId: "766932138005",
  appId: "1:766932138005:web:47d20ad2f44ebe5a25761c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;