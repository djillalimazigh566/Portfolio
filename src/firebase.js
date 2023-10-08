import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDBe_bRt_q-NHEpbfTVTWUkLmFeTW-kYRw",
    authDomain: "personal-portfolio-1c757.firebaseapp.com",
    projectId: "personal-portfolio-1c757",
    storageBucket: "personal-portfolio-1c757.appspot.com",
    messagingSenderId: "426503854716",
    appId: "1:426503854716:web:5506f5dca0df271137c7f9",
    measurementId: "G-55XVTGM5VX"
  };


  const app = initializeApp(firebaseConfig);
  export const auth = getAuth();
  export default getFirestore(app);