// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBLa7d7kUvxfso8hFJxmzaWYtsehbinVI",
  authDomain: "ecommerce-65098.firebaseapp.com",
  projectId: "ecommerce-65098",
  storageBucket: "ecommerce-65098.appspot.com",
  messagingSenderId: "199859026170",
  appId: "1:199859026170:web:feb3ca70970e8801dbf143"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;