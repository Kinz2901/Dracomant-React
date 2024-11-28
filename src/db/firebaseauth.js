import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import {
  getFirestore,
  setDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDQT8Hr60h8uVWFEYkwG5-Rucrnq_iSKOg",
  authDomain: "dracomant-abdd6.firebaseapp.com",
  projectId: "dracomant-abdd6",
  storageBucket: "dracomant-abdd6.firebasestorage.app",
  messagingSenderId: "897453808489",
  appId: "1:897453808489:web:4e15c04a5d8be1ef387bf8",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

