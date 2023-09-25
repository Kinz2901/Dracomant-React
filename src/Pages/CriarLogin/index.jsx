import styles from "./index.module.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsPerson, BsEyeSlash, BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import useValidate from '../../hooks/useValidate'

export default function CriarLogin() {

  const { visiblePass, setVisiblePass,
        visiblePassConfirm, setVisiblePassConfirm,
        name, setName, email, password,
        passwordConfirm, validEmail,
        validPassword, validPasswordConfirm,
        emailValidation ,passwordValidation,
        validatePasswordConfirm ,validate } = useValidate()

  return (
    <>
      <div className={styles.main}>
        <div className={styles.bloco}>
          <h2 className={styles.titulo}>DRACOMANT</h2>
          <p className={styles.criarConta}>CRIE UMA CONTA</p>
          <form onSubmit={validate} className={styles.form}>
            <div className={`${styles.blocos_input}`}>
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
            <div
              className={`${styles.blocos_input} ${
                email.length == 0
                  ? null
                  : validEmail
                  ? styles.sucessInput
                  : styles.errInput
              }`}
            >
              <input
                onChange={(ev) => emailValidation(ev.target.value)}
                value={email}
                className={styles.email}
                id="email"
                type="email"
                placeholder="Endereço de e-mail"
                required
              />
              <AiOutlineMail className={styles.icons} />
            </div>
            <span
              className={`${styles.span} ${
                email.length == 0
                  ? null
                  : validEmail
                  ? styles.sucess
                  : styles.err
              }`}
            >
              {email.length == 0
                ? null
                : validEmail
                ? "E-mail válido"
                : "E-mail inválido"}
            </span>
            <div
              className={`${styles.blocos_input} ${
                password.length == 0
                  ? null
                  : validPassword
                  ? styles.sucessInput
                  : styles.errInput
              }`}
            >
              <input
                onChange={(ev) => passwordValidation(ev.target.value)}
                value={password}
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
            <span
              className={`${styles.span} ${
                password.length == 0
                  ? null
                  : validPassword
                  ? styles.sucess
                  : styles.err
              }`}
            >
              {password.length == 0
                ? null
                : validPassword
                ? "Senhas válida"
                : "Senha inválida"}
            </span>
            <div
              className={`${styles.blocos_input} ${
                passwordConfirm.length == 0
                  ? null
                  : validPasswordConfirm
                  ? styles.sucessInput
                  : styles.errInput
              }`}
            >
              <input
                onChange={(ev) => validatePasswordConfirm(ev.target.value)}
                value={passwordConfirm}
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
            <span
              className={`${styles.span} ${
                passwordConfirm.length == 0
                  ? null
                  : validPasswordConfirm
                  ? styles.sucess
                  : styles.err
              }`}
            >
              {passwordConfirm.length == 0
                ? null
                : validPasswordConfirm
                ? "Senhas compatíveis"
                : "As senhas não se coinsidem"}
            </span>
            <button className={styles.botao}>CRIAR CONTA</button>
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
