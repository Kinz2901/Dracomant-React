import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import { FaCircleUser } from "react-icons/fa6";
import { IoExitOutline } from "react-icons/io5";
import { MdModeEditOutline } from "react-icons/md";
import UserContext from "../../UserContext";
import { useNavigate } from "react-router-dom";

const Conta = () => {
  const { username, setUsername, userEmail, avatar, setAvatar, clear} =
    useContext(UserContext);
  const [tempName, setTempName] = useState("");
  const inputName = useRef();
  const [avatarName, setAvatarName] = useState(null);
  const [avatarTemp, setAvatarTemp] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setTempName(username);
    setAvatarTemp(avatar)
  }, [username]);

  function AlterarNome() {
    inputName.current.removeAttribute("disabled");
    inputName.current.focus();
  }

  function logout() {
    clear()
    navigate("/login");
  }

  function cancel() {
    setTempName(username);
  }

  function salvar() {
    setUsername(tempName);
    setAvatar(avatarTemp);
  }

  return (
    <main className={styles.main}>
      <div className={styles.bloco}>
        <p className={styles.minhaConta}>Minha Conta</p>
        <div className={styles.components}>
          <div className={styles.fotoEBtn}>
            <div className={styles.fotoPerfil}>
              {avatarTemp ? (
                <img
                  src={avatarTemp}
                  className={styles.iconUser}
                  alt={avatarName}
                />
              ) : (
                <FaCircleUser className={styles.iconUser} />
              )}
            </div>
            <label htmlFor='selecao-arquivo' className={`${styles.button} ${styles.btnFoto}`}>
              {avatarTemp? <p>Alterar avatar</p> : <p>Adicionar avatar</p>}
            </label>
            <input
              type="file"
              id = "selecao-arquivo"
              hidden
              accept="imagem/jpg, image/jpeg, image/png"
              onChange={({ target: { files } }) => {
                files[0] && setAvatarName(files[0].name);
                if (files) {
                  setAvatarTemp(URL.createObjectURL(files[0]));
                }
              }}
              className={styles.inputImg}
            />
          </div>
          <div className={styles.blocoDois}>
            <div className={styles.escritas}>
              <label>Nome</label>
              <div className={styles.ignorDiv}>
                <div className={styles.blocoInput}>
                  <input
                    type="text"
                    value={tempName}
                    onChange={({ target }) => setTempName(target.value)}
                    disabled
                    ref={inputName}
                  />
                  <MdModeEditOutline
                    onClick={AlterarNome}
                    className={styles.btnEdit}
                  />
                </div>
                {tempName !== username && (
                  <button
                    onClick={cancel}
                    className={`${styles.button} ${styles.buttonIgn}`}
                  >
                    Ignorar mudanças
                  </button>
                )}
              </div>
              <label>E-mail</label>
              <p>{userEmail}</p>
            </div>
            <div className={styles.buttons}>
              <button className={`${styles.button}`}>Alterar Senha</button>
              <button
                onClick={salvar}
                className={`${styles.button} ${styles.btnSalvar}`}
              >
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
