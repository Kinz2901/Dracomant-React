
import { initializeApp } from "firebase/app";
const apiKey = import.meta.env.VITE_API_KEY; // Para Vite
const authDomain = import.meta.env.VITE_AUTH_DOMAIN;
const projectId = import.meta.env.VITE_PROJECT_ID;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: "dracomant-abdd6.firebasestorage.app",
  messagingSenderId: "897453808489",
  appId: "1:897453808489:web:4e15c04a5d8be1ef387bf8",
};

const app = initializeApp(firebaseConfig);

export default app;