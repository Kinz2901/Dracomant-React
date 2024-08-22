import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import { FaCircleUser } from "react-icons/fa6";
import { IoExitOutline } from "react-icons/io5";
import { MdModeEditOutline } from "react-icons/md";
import UserContext from "../../UserContext";
import { useNavigate } from "react-router-dom";

const Conta = () => {
  const { nome, setNome, setLogin, avatar, setAvatar } = useContext(UserContext);
  const [tempName, setTempName] = useState("");
  const inputName = useRef();
  const [tempImg, setTempImg] = useState(null);
  const [imagem, setImagem] = useState(null);
  const [teste, setTeste] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
    setTempName(nome);
  }, [nome]);

  function AlterarNome() {
    inputName.current.removeAttribute("disabled");
    inputName.current.focus();
  }

  function logout() {
    setLogin(false);
    navigate("/login");
  }

  function cancel() {
    setTempName(nome);
  }

  function salvar() {
    setNome(tempName);
    setAvatar(tempImg)
  }

  return (
    <main className={styles.main}>
      <div className={styles.bloco}>
        <p className={styles.minhaConta}>Minha Conta</p>
        <div className={styles.components}>
          <div className={styles.fotoEBtn}>
            <div className={styles.fotoPerfil}>
              {imagem? <img src={imagem} className={styles.iconUser} alt="imagem de perfil"/> :
              <FaCircleUser className={styles.iconUser} />}
            </div>
            <input
              type="file"
              accept="imagem/jpg, image/jpeg, image/png"
              
              onChange={({target: {files}}) => {
                files[0] && setTempImg(files[0].name)
                if(files) {
                  setImagem(URL.createObjectURL(files[0]))
                }
              }}
              className={`${styles.button} ${styles.btnFoto}`}
            ></input>
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
                {tempName !== nome && (
                  <button
                    onClick={cancel}
                    className={`${styles.button} ${styles.buttonIgn}`}
                  >
                    Ignorar mudanças
                  </button>
                )}
              </div>
              <label>E-mail</label>
              <p>Kinzlindo123456@gmail.com</p>
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
