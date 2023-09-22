import { BsPerson, BsEyeSlash, BsEye } from "react-icons/bs";
import styles from "../CriarLogin/index.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [visiblePass, setVisiblePass] = useState(false);

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
                type={visiblePass ? "text" : "password"}
                placeholder="Senha:"
                required
                minlength="8"
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
