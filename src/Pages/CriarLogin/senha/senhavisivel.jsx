import { BsEyeSlash, BsEye } from "react-icons/bs";   
import styles from './index.module.css';

export default function VisualizarSenha() {
    
    const handleClick = () => {
        return (
            <BsEyeSlash/>
        )
    }

    return (
        <BsEyeSlash onClick={handleClick} className={styles.icons}/>
    )
}