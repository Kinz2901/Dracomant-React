
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "dracomant-abdd6.firebaseapp.com",
  projectId: "dracomant-abdd6",
  storageBucket: "dracomant-abdd6.firebasestorage.app",
  messagingSenderId: "897453808489",
  appId: "1:897453808489:web:4e15c04a5d8be1ef387bf8",
};

const app = initializeApp(firebaseConfig);

export default app;