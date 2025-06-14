import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerText}>
        <h1>IFRN - Campus Macau</h1>
        <h1>Curso Técnico em Informática</h1>
        <h1>Programação para Internet 2025</h1>
      </div>
      <div className={styles.containerCourse}>
        <h1>Isac Luiz</h1>
      </div>
      <div className={styles.iconsCard}>
        <div className={styles.iconsCardBg}>
          <div className={styles.containerIcons}>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} color="#000" />
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} color="#000" />
            </a>
            <a href="https://wa.me/5599999999999" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={24} color="#000" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}