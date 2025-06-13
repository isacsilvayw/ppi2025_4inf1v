import styles from "./Main.module.css";

export function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <div className={styles.card}>
          <img src="https://picsum.photos/310?oceaan" alt="Mar" />
          <h2>Mar</h2>
          <p>Grande massa de água salgada.</p>
        </div>
        <div className={styles.card}>
          <img src="https://picsum.photos/310?beeaech" alt="Oceano" />
          <h2>Oceano</h2>
          <p>Maior extensão de água da Terra..</p>
        </div>
        <div className={styles.card}>
          <img src="https://picsum.photos/310?islsagnd" alt="Ilha" />
          <h2>Ilha</h2>
          <p>Terra cercada por água.</p>
        </div>
        <div className={styles.card}>
          <img src="https://picsum.photos/310?beDgcsh" alt="Praia" />
          <h2>Praia</h2>
          <p>Faixa de areia à beira do mar.</p>
        </div>
        <div className={styles.card}>
          <img src="https://picsum.photos/310?fsSsyudf" alt="Fundo do Mar" />
          <h2>Fundo do Mar</h2>
          <p>Parte mais profunda do oceano.</p>
        </div>
        <div className={styles.card}>
          <img src="https://picsum.photos/310?sesFdfa" alt="Coral" />
          <h2>Coral</h2>
          <p>Estruturas formadas por corais marinhos.</p>
        </div>
      </div>
    </main>
  );
}