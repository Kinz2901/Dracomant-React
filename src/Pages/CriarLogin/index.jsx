import styles from "./index.module.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsPerson, BsEyeSlash, BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function CriarLogin() {
  const [visiblePass, setVisiblePass] = useState(false);
  const [visiblePassConfirm, setVisiblePassConfirm] = useState(false);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.bloco}>
          <h2 className={styles.titulo}>DRACOMANT</h2>
          <p className={styles.criarConta}>CRIE UMA CONTA</p>
          <form className={styles.form}>
            <div className={styles.blocos_input} id="bloco-nome">
              <input
                className={styles.nome}
                id="name"
                type="text"
                placeholder="Nome do usuário"
                required
              />
              <BsPerson className={styles.icons} />
            </div>
            <span className={styles.err} id="name-error"></span>
            <div className={styles.blocos_input} id="bloco-email">
              <input
                className={styles.email}
                id="email"
                type="email"
                placeholder="Endereço de e-mail"
                required
              />
              <AiOutlineMail className={styles.icons} />
            </div>
            <span className={styles.err} id="email-error"></span>
            <div className={styles.blocos_input} id="bloco-password">
              <input
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
            <span className={styles.err} id="password-error"></span>
            <div className={styles.blocos_input} id="bloco-passwordConfirm">
              <input
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
            <span className={styles.err} id="passwordConfirm-error"></span>
            <button type="submit" className={styles.botao}>
              CRIAR CONTA
            </button>
            <p>
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
