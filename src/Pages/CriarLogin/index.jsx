import styles from "./index.module.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsPerson, BsEyeSlash, BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function CriarLogin() {
  const [visiblePass, setVisiblePass] = useState(false);
  const [visiblePassConfirm, setVisiblePassConfirm] = useState(false);

  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ passwordConfirm, setPasswordConfirm ] = useState("")

  const [ errEmail,  setErrEmail ] = useState("")
  const [ errPassword,  setErrSenha ] = useState(false)
  const [ errPasswordConfirm,  setErrSenhaConfirm ] = useState(false)


  
  const validate = (ev) => {
    ev.preventDefault()
      setErrEmail("")
      setErrSenha("")
      setErrSenhaConfirm("")

        if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
          setErrEmail("E-mail inválido.")
        } 
        if (password.length < 8 ) {
          setErrSenha("O tamanho da sua senha deve ser de no minimo 8 digitos.")
        }
        if (!password.match(/[a-z]/)) {
          setErrSenha("Sua senha deve conter letras minúsculas.")
        }
        if (!password.match(/[A-Z]/)) {
          setErrSenha("Sua senha deve conter letras maiúsculas.")
        }
        if (!password.match(/[0-9]/)) {
          setErrSenha("Sua senha deve conter números.")
        }
        if (!password.match(/^\S+$/)) {
          setErrSenha("Sua senha não deve conter espaços vazios.")
        }
        if (passwordConfirm !== password) {
          setErrSenhaConfirm("As senhas não se coincidem.")
        }

  }   

  return (
    <>
      <div className={styles.main}>
        <div className={styles.bloco}>
          <h2 className={styles.titulo}>DRACOMANT</h2>
          <p className={styles.criarConta}>CRIE UMA CONTA</p>
          <form onSubmit={validate} className={styles.form}>
            <div className={`${styles.blocos_input}`} id="bloco-nome">
              <input
                onChange={(ev) => setName(ev.target.value)}
                className={styles.nome}
                id="name"
                type="text"
                placeholder="Nome do usuário"
                required
              />
              <BsPerson className={styles.icons} />
            </div>
            <span className={styles.err}></span>
            <div className={`${styles.blocos_input} ${errEmail === "" ? null : styles.errInput}`}  >
              <input
                onChange={(ev) => setEmail(ev.target.value)}
                className={styles.email}
                id="email"
                type="email"
                placeholder="Endereço de e-mail"
                required
              />
              <AiOutlineMail className={styles.icons} />
            </div>
            <span className={styles.err}>{errEmail}</span> 
            <div className={`${styles.blocos_input} ${errPassword === "" ? null : styles.errInput}`} id="bloco-password">
              <input
                onChange={(ev) => setPassword(ev.target.value)}
                className={styles.password}
                id="password"
                type={visiblePass ? "text" : "password"}
                placeholder="Senha:"
                required
              />
              {visiblePass ? (
                <BsEye
                  onClick={() => setVisiblePass(!visiblePass)}
                  className={styles.icons}
                />
              ) : (
                <BsEyeSlash
                  onClick={() => setVisiblePass(!visiblePass)}
                  className={styles.icons}
                />
              )}
            </div>
            <span className={styles.err}>{errPassword}</span>
            <div className={`${styles.blocos_input} ${errPasswordConfirm === "" ? null : styles.errInput}`}>
              <input
                onChange={(ev) => setPasswordConfirm(ev.target.value)}
                className={styles.passwordConfirm}
                id="passwordConfirm"
                type={visiblePassConfirm ? "text" : "password"}
                placeholder="Confirmar Senha:"
                required
              />
              {visiblePassConfirm ? (
                <BsEye
                  onClick={() => setVisiblePassConfirm(!visiblePassConfirm)}
                  className={styles.icons}
                />
              ) : (
                <BsEyeSlash
                  onClick={() => setVisiblePassConfirm(!visiblePassConfirm)}
                  className={styles.icons}
                />
              )}
            </div>
            <span className={styles.err}>{errPasswordConfirm}</span>
            <button className={styles.botao}>
              CRIAR CONTA
            </button>
            <p className={styles.possuiConta}>
              Já possui uma conta?
              <Link to="/login" className={styles.cliqueAqui}>
                Clique aqui
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
