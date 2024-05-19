import React from "react";
import { FaInstagram, FaFacebook, FaGoogle, FaTwitter, FaLinkedin } from "react-icons/fa6";
import styles from '../styles/footer.module.css'
const Footer = () => {
  return (
    <div className={styles.container_footer}>
      <div className={styles.container_social_media}>
        <span className={styles.line_media}></span>
          <a href=""><FaInstagram/></a>
          <a href=""><FaFacebook/></a>
          <a href=""><FaGoogle/></a>
          <a href=""><FaTwitter/></a>
          <span className={styles.line_media}></span>
      </div>
      <div className={styles.container_navs_footer}>
        <a href="">Inicio</a>
        <a href="">Blog</a>
        <a href="">Nosotros</a>
        <a href="">Contacto</a>

      </div>
      <div className={styles.copyright_container}>
        <p>Copyright © - Pagina creada por <span>Agustin Sosa</span></p>
        <div className={styles.container_copyright_media}>
            <a href=""><FaLinkedin/></a>

        </div>
      </div>
    </div>
  )
};

export default Footer;
