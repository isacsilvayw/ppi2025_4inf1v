import styles from "./MyGrid.module.css";

export function MyGrid() {
  return (
    <div className={styles.container}>
      <header className={styles.header1}>
        <h1>Meu texto no header</h1>
      </header>
      <aside className={styles.aside} />
      <div className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <img src="https://picsum.photos/310?oceaan"></img>
            <h2>Mar</h2> 
            <p>Grande massa de água salgada.</p>
          </div>
          <div className={styles.card}>
            <img src="https://picsum.photos/310?beeaech"></img>
            <h2>Oceano</h2> 
            <p>Maior extensão de água da Terra..</p>
          </div>
          <div className={styles.card}>
            <img src="https://picsum.photos/310?islsagnd"></img>
            <h2>Ilha</h2> 
            <p>Terra cercada por água.</p>
          </div>
          <div className={styles.card}>
            <img src="https://picsum.photos/310?beDgcsh"></img>
            <h2>Praia</h2>
            <p>Faixa de areia à beira do mar.</p>
          </div>
          <div className={styles.card}>
            <img src="https://picsum.photos/310?fsSsyudf"></img>
            <h2>Fundo do Mar</h2> 
            <p>Parte mais profunda do oceano.</p>
          </div>
          <div className={styles.card}>
            <img src="https://picsum.photos/310?sesFdfa"></img>
            <h2>Coral</h2> 
            <p>Estruturas formadas por corais marinhos.</p>
            </div>
        </div>
      </div>
      <footer className={styles.footer} />
    </div>
  );
}
