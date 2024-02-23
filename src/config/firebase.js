// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAexUyIanqYvy_Mf3c2F_fpD38etgDAJ3Q",
  authDomain: "sellingstore-2d2cc.firebaseapp.com",
  projectId: "sellingstore-2d2cc",
  storageBucket: "sellingstore-2d2cc.appspot.com",
  messagingSenderId: "161707875265",
  appId: "1:161707875265:web:471fc39a57aac4dcf1ed40"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const fDB=getFirestore(app);
export const auth=getAuth();
