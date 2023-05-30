import { Link } from "react-router-dom";
import styles from "./SocialMedia.module.css"
import { IoLogoGithub } from "react-icons/io5"
import { IoLogoInstagram } from "react-icons/io5"
import { IoLogoLinkedin } from "react-icons/io5"

function MenuSocialMedia() {
  return (
    <nav>
      <ul className={styles.mediaContainer}>
        <li>
          <Link to="https://github.com/michaelmoranis">
            <IoLogoGithub className={styles.Link} />
          </Link>
        </li>
        <li>
          <Link to="https://instagram.com/michaelmoranis">
            <IoLogoInstagram className={styles.Link} />
          </Link>
        </li>
        <li>
          <Link to="https://linkedin.com/michaelmoranis">
            <IoLogoLinkedin className={styles.Link} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MenuSocialMedia;
