// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARq496efe1kNLnks-o-OulEIjklrPh7Dw",
  authDomain: "kudemy-fc542.firebaseapp.com",
  projectId: "kudemy-fc542",
  storageBucket: "kudemy-fc542.appspot.com",
  messagingSenderId: "937307407013",
  appId: "1:937307407013:web:e9b0aedfa2940c82c9434c",
  measurementId: "G-LZ0BH3KN6V"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app,auth};