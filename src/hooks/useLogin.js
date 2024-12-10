import { useState } from 'react' 
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../db/firebaseConfig";

export default function useLogin() {
    const auth = getAuth(app);
    const [loading, setLoading] = useState(false);
    const [errorLogin, setErrorLogin] = useState(null);
  
    const login = async (email, password) => {
      setLoading(true);
      setErrorLogin(null);
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        setLoading(false);
        return userCredential.user;
      } catch (err) {
        setLoading(false);
        setErrorLogin(err.message);
        throw err;
      }
    };
 
    return { login, loading, errorLogin}
}