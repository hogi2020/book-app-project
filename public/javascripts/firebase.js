// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbMGJSMgx0ZEfDwY8BEpOosHa-XMM70tI",
    authDomain: "slalom2024-1ae65.firebaseapp.com",
    databaseURL: "https://slalom2024-1ae65-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "slalom2024-1ae65",
    storageBucket: "slalom2024-1ae65.firebasestorage.app",
    messagingSenderId: "1083571910029",
    appId: "1:1083571910029:web:d2ad017e204ae9c58cf9c4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);