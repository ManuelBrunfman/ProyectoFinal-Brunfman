

// src/firebase/firebaseConfig.js


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBH69rvO5fr1VjAvFujaVAxH6Rmir-NbRM",
    authDomain: "mi-tienda-virtual-f8e56.firebaseapp.com",
    projectId: "mi-tienda-virtual-f8e56",
    storageBucket: "mi-tienda-virtual-f8e56.firebasestorage.app",
    messagingSenderId: "695508362263",
    appId: "1:695508362263:web:d7b9c277c5dcb848f9e852",
    measurementId: "G-FZT3KH1M7Y"
  };
  

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);