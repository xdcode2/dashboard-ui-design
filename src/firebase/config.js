// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKXf5pWjSNSOhKMV-VKnAfJ3Y0ryABYGs",
  authDomain: "web-app-pos-1deda.firebaseapp.com",
  projectId: "web-app-pos-1deda",
  storageBucket: "web-app-pos-1deda.firebasestorage.app",
  messagingSenderId: "523650679641",
  appId: "1:523650679641:web:b23035a2756b4737e68248"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
