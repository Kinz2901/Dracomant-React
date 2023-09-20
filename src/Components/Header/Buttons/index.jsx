import { Link } from 'react-router-dom'
import styles from './index.module.css'

export default function Buttons() {
    return (
        <>
            <div className={styles.divButtons}>
                <Link to='login'>Login</Link>
                <Link to='criarlogin'>Criar Login</Link>
            </div>
        </>
    )
}