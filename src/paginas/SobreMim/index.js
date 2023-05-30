import React from "react";
import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/perfil.jpeg";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
      {/* <h3 className={styles.subtitulo}>Quem sou eu ?!</h3> */}
      <img
        src={fotoSobreMim}
        alt="foto michael"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Eu sou um desenvolvedor front-end que tem a tecnologia como seu estilo
        de vida. Desde cedo, fui interessado pelo mundo digital e pelas
        possibilidades que a tecnologia oferece. Sempre estive curioso para
        entender como as coisas funcionam nos bastidores, e o desenvolvimento
        web se tornou meu caminho natural.
      </p>
      <p className={styles.paragrafo}>
        Minha jornada como desenvolvedor front-end começou há alguns anos,
        quando mergulhei de cabeça no estudo de HTML, CSS e JavaScript. Através
        dessas linguagens, descobri a arte de criar interfaces interativas e
        agradáveis aos usuários. A cada linha de código, sinto uma mistura de
        criatividade e lógica se fundindo para dar vida a uma página da web.
      </p>
      <p className={styles.paragrafo}>
        Para mim, o desenvolvimento front-end não é apenas uma carreira, é um
        estilo de vida. Estou constantemente motivado a criar interfaces
        elegantes e funcionais que melhorem a vida das pessoas e tornem o mundo
        digital um lugar melhor.
      </p>
      <p className={styles.paragrafo}>
        Além do desenvolvimento front-end, também me interesso por UX/UI design,
        pois acredito que a experiência do usuário é essencial para o sucesso de
        um produto digital. Busco encontrar o equilíbrio perfeito entre a
        estética e a usabilidade em cada projeto em que trabalho.
      </p>
      <p className={styles.paragrafo}>
        Como um entusiasta da tecnologia, minha curiosidade não se limita apenas
        ao desenvolvimento front-end. Gosto de explorar novas tecnologias e
        tendências, como Progressive Web Apps (PWAs), React Native e outras
        abordagens que ampliam as possibilidades de criar experiências incríveis
        para os usuários.
      </p>
    </PostModelo>
  );
}
