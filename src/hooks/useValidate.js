import { useState } from 'react'

export default function useCounter() {
    const [visiblePass, setVisiblePass] = useState(false);
    const [visiblePassConfirm, setVisiblePassConfirm] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const [validEmail, setValidEmail] = useState(false);
    const [validPassword, setValidPassword] = useState(false);
    const [validPasswordConfirm, setValidPasswordConfirm] = useState(false);

    const emailValidation = (ev) => {
        setEmail(ev);
        if (ev.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
          setValidEmail(true);
        } else {
          setValidEmail(false);
        }
      };
    
      const passwordValidation = (ev) => {
        setPassword(ev);
        if (
          ev.length >= 8 &&
          ev.match(/[a-z]/) &&
          ev.match(/[A-Z]/) &&
          ev.match(/[0-9]/) &&
          !ev.match(/[^a-zA-Z0-9\s]/) &&
          ev.match(/^\S+$/)
        ) {
          setValidPassword(true);
        } else {
          setValidPassword(false);
        }
      };
    
      const validatePasswordConfirm = (ev) => {
        setPasswordConfirm(ev);
        if (ev == password) {
          setValidPasswordConfirm(true);
        } else {
          setValidPasswordConfirm(false);
        }
      };
    
      const validate = (ev) => {
        ev.preventDefault();
      };

      return { visiblePass, setVisiblePass,
        visiblePassConfirm, setVisiblePassConfirm,
        name, setName, email, password,
        passwordConfirm, validEmail,
        validPassword, validPasswordConfirm,
        emailValidation ,passwordValidation,
        validatePasswordConfirm ,validate}
}