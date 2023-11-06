import { Link } from "react-router-dom";
import styles from "./index.module.css";
import Template from "./Templates";

export default function Home() {
  const scrollSuave = (ev) => {
    ev.preventDefault();
    const href = ev.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
      <main className={`${styles.blocos} ${styles.main}`}>
        <div className={styles.fundoImg}>
          <div className={styles.divAtendimento}>
            <h3>
              Dracomant Desenvolvimento
              <br />
              de Sites Web e Mobile
            </h3>
            <h4>
              Dracomant é uma empresa de profissionais em desenvolvimento de
              sites!
            </h4>
            <p className={styles.comentario}> 
              Aqui entregamos seus sites com a melhor qualidade e menor tempo de
              entrega.
            </p>
            <div className={styles.botoes}>
              <Link to={"/atendimento"} className={styles.botaoAgendamento}>
                <span>Começe o atendimento</span>
              </Link>
              <a onClick={scrollSuave} href="#templates" className={styles.botaoAgendamento}>
                <span>
                  Ver Templates
                </span>
              </a>
            </div>
          </div>
        </div>
        <h2 className={styles.dracTem} id="templates">
          Dracomant's Templates
        </h2>
        <div className={styles.divTemplates}>
          <Template />
        </div>
      </main>
    </>
  );
}
