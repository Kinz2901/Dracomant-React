import styles from "./index.module.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsPerson, BsEyeSlash, BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import useValidate from "../../hooks/useForm";
import useVisiblePass from "../../hooks/useVisiblePass";
import useForm from "../../hooks/useForm";

export default function CriarLogin() {
  const name = useForm();
  const email = useForm("email");
  const password = useForm("password");
  const passwordConfirm = useForm();

  const {
    visiblePass,
    setVisiblePass,
    visiblePassConfirm,
    setVisiblePassConfirm,
  } = useVisiblePass();

  console.log(name.value, email.value, password.value, passwordConfirm.value)

  let err = null
 
  if (password.value !== passwordConfirm.value) {
    err = 'As senhas não coincidem'
  }


  return (
    <>
      <div className={styles.main}>
        <form onSubmit={(ev) => ev.preventDefault()} className={styles.form}>
          <h2 className={styles.titulo}>DRACOMANT</h2>
          <p className={styles.criarConta}>CRIE UMA CONTA</p>
          <div className={`${styles.blocos_input} ${
              name.error && styles.errInput
            }`}>
            <input
              className={styles.nome}
              id="name"
              type="text"
              placeholder="Nome do usuário:"
              onChange={name.onChange}
              onBlur={name.onBlur}
              value={name.value}
            />
            <BsPerson className={styles.icons} />
          </div>
          <span className={styles.err}>
            {name.error && <p>{name.error}</p>}
          </span>
          <div
            className={`${styles.blocos_input} ${
              email.error && styles.errInput
            }`}
          >
            <input
              className={styles.email}
              id="email"
              type="text"
              placeholder="Endereço de e-mail:"
              onChange={email.onChange}
              onBlur={email.onBlur}
              value={email.value}
            />
            <AiOutlineMail className={styles.icons} />
          </div>
          <span className={styles.err}>
            {email.error && <p>{email.error}</p>}
          </span>
          <div className={`${styles.blocos_input} ${
              password.error && styles.errInput
            }`}>
            <input
              className={styles.password}
              id="password"
              type={visiblePass ? "text" : "password"}
              placeholder="Senha:"
              onChange={password.onChange}
              onBlur={password.onBlur}
              value={password.value}
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
          <span className={styles.err}>
            {password.error && <p>{password.error}</p>}
          </span>
          <div className={`${styles.blocos_input} ${
              passwordConfirm.error && styles.errInput
            }`}>
            <input
              className={styles.passwordConfirm}
              id="passwordConfirm"
              type={visiblePassConfirm ? "text" : "password"}
              placeholder="Confirmar Senha:"
              onChange={passwordConfirm.onChange}
              onBlur={passwordConfirm.onBlur}
              value={passwordConfirm.value}
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
          <span className={styles.err}>
            {passwordConfirm.error && <p>{passwordConfirm.error}
            </p>}
            {err}
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
    </>
  );
}
