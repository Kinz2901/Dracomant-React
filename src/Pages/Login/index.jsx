import { BsEyeSlash, BsEye } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import styles from "../CriarLogin/index.module.css";
import { Link, useNavigate } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import { useState, useContext } from "react";
import useVisiblePass from "../../hooks/useVisiblePass";
import UserContext from "../../UserContext";

const Login = () => {
  const { setUsername, setLogin, setUserEmail } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error } = useLogin();

  const navigate = useNavigate();

  const {
    visiblePass,
    setVisiblePass,
  } = useVisiblePass();

  const logar = async () => {
    try {
      const user = await login(email, password);

      // Pega o nome e e-mail do usuário logado
      const userName = user.displayName;  // Pega o nome do usuário
      const userEmail = user.email;       // Pega o e-mail do usuário

      // Armazena o nome e e-mail no contexto
      setUsername(userName);
      setUserEmail(userEmail);

      console.log("Usuário logado:", user);
      alert("Login realizado com sucesso!");
      if (!loading) {
        setLogin(true);
        navigate("/");
      }
    } catch (err) {
      console.error("Erro ao logar:", err.message);
      alert(err.message);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.bloco}>
        <form onSubmit={(ev) => ev.preventDefault()} className={styles.form}>
          <h2 className={styles.titulo}>DRACOMANT</h2>
          <p className={styles.criarConta}>Login</p>
          <div
            className={styles.blocos_input}
          >
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <AiOutlineMail className={styles.icons} />
          </div>
          <span className={styles.err}></span>
          <div
            className={styles.blocos_input}
          >
            <input
              type={visiblePass ? "text" : "password"}
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          <span className={styles.err}></span>
          <button onClick={logar} disabled={loading} className={styles.botao}>
            {loading ? "Entrando..." : "Entrar"}
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <p className={styles.possuiConta}>
            Não possui uma conta?
            <Link to="/criarLogin" className={styles.cliqueAqui}>
              Clique aqui
            </Link>
          </p>
        </form>
        <div className={styles.img}>
          <h1 className={styles.coment}>
            Amplie seu negócio de forma rapida e tecnológica
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
