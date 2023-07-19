import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfHfcpetTnO72PKlZSYOuKvYezAjK7K5s",
  authDomain: "react-chat-945f0.firebaseapp.com",
  projectId: "react-chat-945f0",
  storageBucket: "react-chat-945f0.appspot.com",
  messagingSenderId: "365189893630",
  appId: "1:365189893630:web:ee7732c0f0253951ec04af",
  measurementId: "G-KJWSL0PWTB"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
