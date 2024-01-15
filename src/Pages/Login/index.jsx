import { BsEyeSlash, BsEye } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import styles from "../CriarLogin/index.module.css";
import styles2 from "./index.module.css";
import { Link, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import useLogin from "../../hooks/useLogin";

export default function Login() {
  const navigate = useNavigate();

  const {
    visiblePass,
    setVisiblePass,
    name,
    setName,
    email,
    setEmail,
    emailValidationLogin,
    password,
    passwordValidationLogin,
    picture,
    setPicture,
    logger,
    setLogger,
  } = useLogin();

  function handleClick() {
    // VERIFIÇÃO NO BANCO DE DADOS
    navigate("/");
  }

  return (
    <>
      <div className={styles.main}>
        <form className={styles.form}>
          <h2 className={styles.titulo}>DRACOMANT</h2>
          <p className={styles.criarConta}>LOGIN</p>
          <div className={styles.blocos_input} id="bloco-nome">
            <input
              onChange={(ev) => emailValidationLogin(ev.target.value)}
              className={styles.nome}
              id="name"
              type="text"
              placeholder="E-mail do usuário"
              required
              autocomplete="name"
            />
            <AiOutlineMail className={styles.icons} />
          </div>
          <span className={styles.err} id="name-error"></span>
          <div className={styles.blocos_input} id="bloco-password">
            <input
              onChange={(ev) => passwordValidationLogin(ev.target.value)}
              className={styles.password}
              id="password"
              type={visiblePass ? "text" : "password"}
              placeholder="Senha"
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
            <GoogleOAuthProvider clientId="261842505322-v7a5fkv11k9bhmr1k1erst3rvfssia52.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  var decoded = jwt_decode(credentialResponse.credential);
                  console.log(decoded);
                  setName(decoded.name);
                  setEmail(decoded.email);
                  setPicture(decoded.picture);
                  setLogger(true);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </GoogleOAuthProvider>
          </div>
          <button onClick={handleClick} className={styles.botao}>FAZER LOGIN</button>
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
    </>
  );
}
