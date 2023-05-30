import React from 'react'
import styles from "./Menu.module.css"
import MenuLink from '../MenuLink';
import MenuSocialMedia from 'componentes/SocialMedia';

export default function Menu() {
  return (
    <header className={styles.navegacaoHeader}>
        <MenuSocialMedia />
        <nav className={styles.navegacao}>
            <MenuLink  to="/" className={styles.navegacao}>
                Inicio
            </MenuLink>
            <MenuLink to="/sobremim">
              SobreMim 
            </MenuLink>
        </nav>
    </header>
  )
}
