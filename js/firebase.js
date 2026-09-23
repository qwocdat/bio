import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyAUuV5euNNLHE2Cf6tXzUHV-ChKwNF593Y",
    authDomain: "quocdat-396fe.firebaseapp.com",
    databaseURL: "https://quocdat-396fe-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "quocdat-396fe",
    storageBucket: "quocdat-396fe.firebasestorage.app",
    messagingSenderId: "685476439350",
    appId: "1:685476439350:web:949054ecba7f0a0c383f97"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);
