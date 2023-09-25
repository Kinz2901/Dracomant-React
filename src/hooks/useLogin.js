import { useState } from 'react' 

export default function useLogin() {
    const [visiblePass, setVisiblePass] = useState(false);

    const [ name, setName ] = useState()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ picture, setPicture ] = useState()
    const [ logger, setLogger ] = useState(false)

    const passwordValidationLogin = (ev) => {
        setPassword(ev)

    }

    const emailValidationLogin = (ev) => {
        setEmail(ev)
    }
 
    return { visiblePass, setVisiblePass, name, setName, email, setEmail, emailValidationLogin, password, passwordValidationLogin, picture, setPicture , logger, setLogger }
}