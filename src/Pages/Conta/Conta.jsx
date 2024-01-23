import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import { FaCircleUser } from "react-icons/fa6";
import { IoExitOutline } from "react-icons/io5";
import { MdModeEditOutline } from "react-icons/md";
import UserContext from "../../UserContext";

const Conta = () => {
  const { nome, setNome, setLogin } = useContext(UserContext);
  const [tempName, setTempName] = useState("");
  const inputName = useRef();

  useEffect(() => {
    setTempName(nome);
  }, [nome]);

  function AlterarNome() {
    inputName.current.removeAttribute("disabled");
    inputName.current.focus();
  }

  function logout() {
    setLogin(false);
  }

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
              <div className={styles.blocoInput}>
                <input
                  type="text"
                  value={tempName}
                  onChange={({ target }) => setTempName(target.value)}
                  disabled
                  ref={inputName}
                />{" "}
                <MdModeEditOutline
                  onClick={AlterarNome}
                  className={styles.btnEdit}
                />
              </div>
              {tempName !== nome && (
                <div className={styles.btnsName}>
                  <button className={`${styles.button}`}>
                    Cancelar
                  </button>
                  <button className={`${styles.button} ${styles.mudarNameBtn}`}>
                    Alterar nome
                  </button>
                </div>
              )}
              <label>E-mail</label>
              <p>Kinzlindo123456@gmail.com</p>
            </div>
            <div className={styles.buttons}>
              <button className={`${styles.button}`}>Alterar Senha</button>
              <button className={`${styles.button} ${styles.btnSalvar}`}>
                Salvar
              </button>
            </div>
          </div>
        </div>
        <div className={styles.sair}>
          <button
            onClick={logout}
            className={`${styles.button} ${styles.btnSair}`}
          >
            <IoExitOutline /> Sair
          </button>
        </div>
      </div>
    </main>
  );
};

export default Conta;
