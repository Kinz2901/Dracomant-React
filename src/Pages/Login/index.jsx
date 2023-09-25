import { BsPerson, BsEyeSlash, BsEye } from "react-icons/bs";
import styles from "../CriarLogin/index.module.css";
import styles2 from "./index.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

export default function Login() {
  const [visiblePass, setVisiblePass] = useState(false);

  const [ name, setName ] = useState()
  const [ email, setEmail ] = useState()
  const [ picture, setPicture ] = useState()
  const [ logger, setLogger ] = useState(false)

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
            <div className={styles2.googleAut}>
              <GoogleOAuthProvider 
                    clientId="261842505322-v7a5fkv11k9bhmr1k1erst3rvfssia52.apps.googleusercontent.com">
                      <GoogleLogin
                      onSuccess={credentialResponse => {
                        var decoded = jwt_decode(credentialResponse.credential);
                        console.log(decoded);
              setName(decoded.name)
              setEmail(decoded.email)
              setPicture(decoded.picture)
              setLogger(true)
                      }}
                      onError={() => {
              console.log('Login Failed');
                      }}
                      />
                    </GoogleOAuthProvider>
            </div>
      {
        picture ? 
        <div>
          <h2>Bem vindo {name}</h2>
          <p>{email}</p>
            <img src={picture} alt="" />
        </div> :
        null
      }
            <Link to={logger ? "/" : "/login"} className={`${styles.botao} ${styles2.botao}`}>
              Fazer Login
            </Link>
            <p className={styles.possuiConta}>
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
