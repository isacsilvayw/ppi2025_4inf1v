import styles from "./MyGrid.module.css";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";

export function MyGrid() {
  return (
    <div className={styles.container}>
      <Header />
      <aside className={styles.asideL}></aside>
      <Main />
      <aside className={styles.asideR}></aside>
      <Footer />
    </div>
  );
}