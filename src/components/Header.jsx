import { Fingerprint } from "lucide-react";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header1}>
      <div className={styles.headerTextLine}>
        <Fingerprint size={48} color="#e0e8f5" strokeWidth={2.5} />
        <h1>Foco, Força e Fé</h1>
      </div>
    </header>
  );
}