import { Link } from "react-router-dom";
import styles from "./index.module.css";

export default function Buttons() {
  return (
    <>
      <div className={styles.divButtons}>
        <Link className={`${styles.login} ${styles.button}`} to="login">Login</Link>
        <Link className={`${styles.criarLogin} ${styles.button}`} to="criarlogin">Criar Login</Link>
      </div>
    </>
  );
}
