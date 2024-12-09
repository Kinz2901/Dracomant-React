import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../db/firebaseConfig";

const useRegister = () => {
  const auth = getAuth(app);
  const [loading, setLoading] = useState(false);
  const [errorRegister, setErrorRegister] = useState(null);

  const register = async (email, password) => {
    setLoading(true);
    setErrorRegister(null);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setLoading(false);
      return user;
    } catch (err) {
      setLoading(false);
      setErrorRegister(err.message);
      throw err;
    }
  };

  return { register, loading, errorRegister };
};

export default useRegister;