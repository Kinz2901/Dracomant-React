import { useState } from 'react' 

export default function useLogin() {
    const [visiblePass, setVisiblePass] = useState(false);

    const [ name, setName ] = useState()
    const [ email, setEmail ] = useState()
    const [ picture, setPicture ] = useState()
    const [ logger, setLogger ] = useState(false)

    return { visiblePass, setVisiblePass, name, setName, email, setEmail, picture, setPicture , logger, setLogger }
}