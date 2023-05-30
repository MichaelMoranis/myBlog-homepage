import styles from "./Banner.module.css";
import minhaFoto from "assets/perfil.jpeg"

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Desenvolvedor FrontEnd
                </h1>
                <p className={styles.paragrafo}>
                Gosto de criar produtos de FrontEnd sólidos e escaláveis com ótimas experiências de usuário.
                </p>
            </div>
            <div className={styles.imagens}>
                {/* <img 
                    className={styles.circuloColorido}
                    // src={circuloColorido}
                    alt="imagem de perfil do Michael"
                    aria-hidden={true}
                /> */}
                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="foto do michael"
                />
            </div>
        </div>
    )
}