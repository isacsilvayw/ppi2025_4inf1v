import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerText}>
        <h1>IFRN - Campus Macau</h1>
        <h1>Curso Técnico em Informática</h1>
        <h1>Programação para Internet 2025</h1>
      </div>
    </footer>
  );
}