import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyBBLa7d7kUvxfso8hFJxmzaWYtsehbinVI",
    authDomain: "ecommerce-65098.firebaseapp.com",
    projectId: "ecommerce-65098",
    storageBucket: "ecommerce-65098.appspot.com",
    messagingSenderId: "199859026170",
    appId: "1:199859026170:web:b45318c9b020abfbdbf143"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
export default auth;
