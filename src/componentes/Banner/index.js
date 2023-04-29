import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png"
import minhaFoto from "assets/perfil.jpeg"

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h2>
                    sejam bem vindos ao meu blog
                </h2>
                <p className={styles.paragrafo}>
                    Este sera o meu blog, meu projeto pessoal feito em parceria com alura atraves dos cursos!!
                </p>
            </div>
            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    alt="imagem de perfil do Michael"
                    aria-hidden={true}
                />
                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="foto do michael"
                />
            </div>
        </div>
    )
}