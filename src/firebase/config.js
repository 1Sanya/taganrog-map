// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCVl9VtDQWsZhN9--tB5bhKTz2zE7XtROQ",
  authDomain: "taganrog-map.firebaseapp.com",
  projectId: "taganrog-map",
  storageBucket: "taganrog-map.appspot.com",
  messagingSenderId: "85395453188",
  appId: "1:85395453188:web:0b7db9c3127488493b8c51",
};

// Инициализируем Firebase
const app = initializeApp(firebaseConfig);

// Получаем доступ к хранилищу Firebase
export const storage = getStorage(app);
