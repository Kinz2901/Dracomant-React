import { BsPerson, BsEyeSlash, BsEye } from "react-icons/bs";
import styles from "../CriarLogin/index.module.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.bloco}>
          <h2 className={styles.titulo}>DRACOMANT</h2>
          <p className={styles.criarConta}>LOGIN</p>
          <form className={styles.form}>
            <div className={styles.blocos_input} id="bloco-nome">
              <input
                className={styles.nome}
                id="name"
                type="text"
                placeholder="Nome ou e-mail do usuário"
                required
                autocomplete="name"
              />
              <BsPerson className={styles.icons} />
            </div>
            <span className={styles.err} id="name-error"></span>
            <div className={styles.blocos_input} id="bloco-password">
              <input
                className={styles.password}
                id="password"
                type="password"
                placeholder="Senha:"
                required
                minlength="8"
              />
              <BsEyeSlash className={styles.icons} />
              <BsEye className={styles.icons} />
            </div>
            <span className={styles.err} id="password-error"></span>
            <button type="submit" className={styles.botao}>
              CRIAR CONTA
            </button>
            <p>
              Não possui uma conta?{" "}
              <Link
                to="/criarlogin"
                className={styles.cliqueAqui}
                href="login.html"
              >
                Clique aqui
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
