import styles from './index.module.css'
import { AiOutlineMail } from "react-icons/ai";
import { BsPerson, BsEyeSlash, BsEye} from "react-icons/bs";      
import { Link } from 'react-router-dom';


export default function CriarLogin() {
    return (
        <>
        <div className={styles.main}>
            <div className={styles.bloco}>
                <h2 className={styles.titulo}>DRACOMANT</h2>
                <p className={styles.criarConta}>CRIE UMA CONTA</p>
                <form className={styles.form}>
                    <div className={styles.blocos_input} id="bloco-nome">
                        <input className={styles.nome} id="name" type="text" placeholder="Nome do usuário" required  autocomplete="name"/>
                        <BsPerson className={styles.icons}/>
                    </div>
                    <span className={styles.err} id="name-error"></span>
                    <div className={styles.blocos_input} id="bloco-email">
                        <input className={styles.email} id="email" type="email" placeholder="Endereço de e-mail" required maxlength="30" autocomplete="email"/>
                        <AiOutlineMail className={styles.icons}/>
                    </div>
                    <span className={styles.err}  id="email-error"></span>
                    <div className={styles.blocos_input}id="bloco-password">
                        <input className={styles.password} id="password" type="password" placeholder="Senha:" required minlength="8" />
                        <BsEyeSlash className={styles.icons}/>
                        <BsEye className={styles.icons}/>
                    </div>
                    <span className={styles.err} id="password-error"></span>
                    <div className={styles.blocos_input} id="bloco-passwordConfirm">
                        <input className={styles.passwordConfirm} id="passwordConfirm" type="password" placeholder="Confirmar Senha:" required minlength="8" autocomplete="current-password"/>
                        <BsEyeSlash className={styles.icons}/>
                        <BsEye className={styles.icons}/>
                    </div>
                    <span className={styles.err} id="passwordConfirm-error"></span>
                    <button type="submit" className={styles.botao}>CRIAR CONTA</button>
                    <p>Já possui uma conta? <a className={styles.cliqueAqui} href="login.html"><Link to="/login" className={styles.cliqueAqui}>Clique aqui</Link></a></p>
                </form>
            </div>
        </div>
        </>
    )
}