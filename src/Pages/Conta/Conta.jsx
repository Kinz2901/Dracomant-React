import React from "react";
import styles from "./index.module.css";
import { FaUserCircle } from "react-icons/fa";
import { FaCircleUser, FaRegCircleUser } from "react-icons/fa6";

const Conta = () => {
  return (
    <main className={styles.main}>
      <div className={styles.bloco}>
        <p className={styles.minhaConta}>Minha Conta</p>
        <div className={styles.components}>
          <div className={styles.fotoPerfil}>
            <FaCircleUser className={styles.iconUser} />
          </div>
          <div className={styles.escritas}>
            <p>Nome</p>
            <input type="text" />
            <p>E-mail</p>
            <p></p>
          </div>
        </div>
        <div>
          <button>s</button>
        </div>
      </div>
    </main>
  );
};

export default Conta;
