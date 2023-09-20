import styles from './index.module.css';
import products from "../../../database.json"

export default function Template() {
    return (
        <>
            {products.map((product) => (
                <div className={styles.template} key={product.id}>
                    <img className={styles.img} src={product.img} alt=""/>
                    <h2 className={styles.title}>{product.title}</h2>
                    <p className={styles.description}>{product.description}</p>
                </div>
            ))}
        </>
    )
}