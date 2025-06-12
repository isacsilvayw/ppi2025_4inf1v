import styles from "./MyGrid.module.css";
import { useEffect, useState } from "react";

function useBreakpoints() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isLt1200: width < 1200,
    isLt768: width < 768,
  };
}

export function MyGrid() {
  const { isLt1200, isLt768 } = useBreakpoints();

  return (
    <div className={styles.container}>
      {!isLt768 && (
        <header className={styles.headerRow}>
          <span className={styles.header1}>Header 1</span>
          <span className={styles.header2}>Header 2</span>
        </header>
      )}
      {!isLt768 && <aside className={styles.aside1}>Aside Esquerdo</aside>}
      {!isLt1200 && !isLt768 && <aside className={styles.aside2}>Aside Direito</aside>}
      <main className={styles.main}>
        <div className={styles.grid}>
          {[1, 2, 3, 4, 5].map((n) => (
            <div className={styles.card} key={n}>
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>Card {n}</h2>
                <p className={styles.cardDesc}>Descrição do card {n}.</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      {!isLt768 && <footer className={styles.footer1}>Footer 1</footer>}
      {!isLt768 && <footer className={styles.footer2}>Footer 2</footer>}
    </div>
  );
}
