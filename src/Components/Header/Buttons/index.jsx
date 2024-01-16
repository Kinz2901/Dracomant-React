import { Link } from "react-router-dom";
import styles from "./index.module.css";
import { useState } from "react";
import { IoPersonCircleOutline, IoPersonCircleSharp } from "react-icons/io5";

export default function Buttons() {
  const [login, useLogin] = useState(true);

  return (
    <>
      {login ? (
        <Link to='minhaconta' className={styles.logado}>
          <p>Kinz</p> <IoPersonCircleSharp className={styles.userIcon} />
        </Link>
      ) : (
        <div className={styles.divButtons}>
          <Link className={`${styles.login} ${styles.button}`} to="login">
            Login
          </Link>
          <Link
            className={`${styles.criarLogin} ${styles.button}`}
            to="criarlogin"
          >
            Criar Login
          </Link>
        </div>
      )}
    </>
  );
}
