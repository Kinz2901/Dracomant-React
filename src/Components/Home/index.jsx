import styles from './index.module.css'
import Template from "./Templates"

export default function Home() {
    return (
        <>
            <main className={`${styles.blocos} ${styles.main}`}>
                <div className={styles.fundoImg}>
                    <div className={styles.divAtendimento}>
                        <h3>Dracomant Desenvolvimento<br/>de Sites Web e Mobile</h3>
                        <h4>Dracomant é uma empresa de profissionais em desenvolvimento de sites!</h4>
                        <p>lo Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, cum molestias? Sit dolores reprehenderit dicta architecto qui expedita a molestias inventore dolorum, illo eos modi, tempora, dolore excepturi. Culpa, dolore.</p>
                        <button className={styles.  botaoAgendamento}><span>Começe o atendimento</span></button>
                    </div>
                </div>
                <h2>Dracomant's Templates</h2>
                <div className={styles.divTemplates}>
                    <Template/>
                </div>
            </main>
        </>
    )
}