// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtucMxktrLXI3p-_swds1-wvr_HCg4AWg",
  authDomain: "dbcart-2623e.firebaseapp.com",
  databaseURL: "https://dbcart-2623e-default-rtdb.firebaseio.com",
  projectId: "dbcart-2623e",
  storageBucket: "dbcart-2623e.appspot.com",
  messagingSenderId: "377296600262",
  appId: "1:377296600262:web:ea5ce617d2ca346df1ebc7",
  measurementId: "G-Y9XZYZ1XJP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
