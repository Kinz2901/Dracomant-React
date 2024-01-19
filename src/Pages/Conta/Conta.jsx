import React from "react";
import styles from "./index.module.css";
import { FaCircleUser } from "react-icons/fa6";
import { IoExitOutline } from "react-icons/io5";
import { MdModeEditOutline } from "react-icons/md";

const Conta = () => {
  return (
    <main className={styles.main}>
      <div className={styles.bloco}>
        <p className={styles.minhaConta}>Minha Conta</p>
        <div className={styles.components}>
          <div className={styles.fotoEBtn}>
            <div className={styles.fotoPerfil}>
              <FaCircleUser className={styles.iconUser} />
            </div>
            <button className={`${styles.button} ${styles.btnFoto}`}>
              Alterar Foto
            </button>
          </div>
          <div className={styles.blocoDois}>
            <div className={styles.escritas}>
              <label>Nome</label>
              <div><input type="text" /> <MdModeEditOutline/></div>
              <label>E-mail</label>
              <p>Kinzlindo123456@gmail.com</p>
            </div>
            <div className={styles.buttons}>
              <button className={`${styles.button} ${styles.btnFoto}`}>
                Alterar Senha
              </button>
              <button className={`${styles.button} ${styles.btnSalvar}`}>
                Alterar Foto
              </button>
            </div>
          </div>
        </div>
        <button className={`${styles.button} ${styles.btnSair}`}>
          <IoExitOutline /> Sair
        </button>
      </div>
    </main>
  );
};

export default Conta;
