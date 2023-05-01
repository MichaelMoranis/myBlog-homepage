import React from "react";
import styles from "./SobreMim.module.css"
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/perfil.jpeg"

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
      <h3 className={styles.subtitulo}>
          Ola eu sou o Michael !!
      </h3>
      <img 
        src={fotoSobreMim}
        alt="foto michael"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum, velit eget bibendum euismod, sapien elit viverra dolor, nec fringilla augue sapien at lorem. Proin in justo felis. Aliquam sed ipsum eget est semper scelerisque. Aenean porta neque in orci eleifend, at hendrerit nisl lobortis. Sed quis tortor lorem. Duis bibendum odio vel mauris facilisis mollis. Maecenas vel magna non purus convallis suscipit. Donec commodo elit id nibh vehicula, vel ultrices nunc feugiat. Aliquam viverra odio non ipsum lacinia, sit amet scelerisque odio commodo. Sed nec est ac tellus laoreet mollis. Sed tristique libero auctor, tincidunt ipsum vel, tempus purus. Vivamus hendrerit, massa a elementum hendrerit, orci velit fringilla dolor, vel commodo dolor purus et velit. Vivamus blandit eget felis vel aliquet. Sed lacinia eget augue id tristique.
      </p>
      <p className={styles.paragrafo}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum, velit eget bibendum euismod, sapien elit viverra dolor, nec fringilla augue sapien at lorem. Proin in justo felis. Aliquam sed ipsum eget est semper scelerisque. Aenean porta neque in orci eleifend, at hendrerit nisl lobortis. Sed quis tortor lorem. Duis bibendum odio vel mauris facilisis mollis. Maecenas vel magna non purus convallis suscipit. Donec commodo elit id nibh vehicula, vel ultrices nunc feugiat. Aliquam viverra odio non ipsum lacinia, sit amet scelerisque odio commodo. Sed nec est ac tellus laoreet mollis. Sed tristique libero auctor, tincidunt ipsum vel, tempus purus. Vivamus hendrerit, massa a elementum hendrerit, orci velit fringilla dolor, vel commodo dolor purus et velit. Vivamus blandit eget felis vel aliquet. Sed lacinia eget augue id tristique.
      </p>
      <p className={styles.paragrafo}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum, velit eget bibendum euismod, sapien elit viverra dolor, nec fringilla augue sapien at lorem. Proin in justo felis. Aliquam sed ipsum eget est semper scelerisque. Aenean porta neque in orci eleifend, at hendrerit nisl lobortis. Sed quis tortor lorem. Duis bibendum odio vel mauris facilisis mollis. Maecenas vel magna non purus convallis suscipit. Donec commodo elit id nibh vehicula, vel ultrices nunc feugiat. Aliquam viverra odio non ipsum lacinia, sit amet scelerisque odio commodo. Sed nec est ac tellus laoreet mollis. Sed tristique libero auctor, tincidunt ipsum vel, tempus purus. Vivamus hendrerit, massa a elementum hendrerit, orci velit fringilla dolor, vel commodo dolor purus et velit. Vivamus blandit eget felis vel aliquet. Sed lacinia eget augue id tristique.
      </p>
    </PostModelo>
  )
};
