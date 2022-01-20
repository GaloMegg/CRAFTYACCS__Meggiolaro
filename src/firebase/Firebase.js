import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDYGE1JlffLqNQWiHB_yk60gZOroU1L7Q4",
    authDomain: "crafty-accesorios.firebaseapp.com",
    projectId: "crafty-accesorios",
    storageBucket: "crafty-accesorios.appspot.com",
    messagingSenderId: "662755013196",
    appId: "1:662755013196:web:c22b2b46ebe6c29d7e7ae9",
    measurementId: "G-W5YLC9RBPQ"
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)