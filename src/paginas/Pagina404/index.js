import styles from "./Pagina404.module.css";
import erro404 from "assets/erro_404.png";

export default function Pagina404() {
  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}></span>
        <h1 className={styles.titulo}>Ops pagina nao encontrada!!!</h1>
        <p className={styles.paragrafo}>
          Tem certeza que era isso que voce estava procurando?
        </p>
        <p className={styles.paragrafo}>
          Aguarde uns instantes e recarregue a pagina, ou volte para a pagina
          inicial
        </p>
        <div className={styles.botaoContainer}>
          <button>voltar</button>
        </div>
        <img
          className={styles.imagemCachorro}
          src={erro404}
          alt="cachorro sinalizando pagina errada vestido como humano"
        />
      </div>
      <div className={styles.espacoEmBranco}>

      </div>
    </>
  );
}
