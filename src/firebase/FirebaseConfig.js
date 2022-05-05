// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCPj1bpbk6QVuPNO-KX4eJQ0_LsXNEsl6g",
  authDomain: "blog-779eb.firebaseapp.com",
  projectId: "blog-779eb",
  storageBucket: "blog-779eb.appspot.com",
  messagingSenderId: "406845416153",
  appId: "1:406845416153:web:268a09f2b7836c654554c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()