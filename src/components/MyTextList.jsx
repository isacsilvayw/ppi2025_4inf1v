import styles from "./MyTextList.module.css";
import { MyText } from "./MyText";

export function MyTextList() {
  const texts = [
  {
    title: "Mar",
    text: "O mar é uma vasta extensão de água salgada que cobre grande parte da superfície da Terra, essencial para a vida e o clima do planeta.",
  },
  {
    title: "Oceano",
    text: "Os oceanos são gigantescos corpos de água salgada que conectam continentes e abrigam uma imensa diversidade de vida marinha.",
  },
  {
    title: "Ilha",
    text: "Uma ilha é uma porção de terra cercada por água por todos os lados, podendo abrigar ecossistemas únicos e isolados.",
  },
  {
    title: "Praia",
    text: "A praia é a interface entre o mar e a terra, conhecida por sua areia, beleza natural e importante valor turístico e ecológico.",
  },
  {
    title: "Fundo do mar",
    text: "O fundo do mar é um ambiente misterioso, pouco explorado, lar de criaturas fascinantes e formações geológicas impressionantes.",
  },
];

  return (
    <div>
      <h1 className={styles.title}>Meus textos</h1>
      <div className={styles.container}>
        {texts.map((text, index) => (
          <MyText key={index} title={`${index + 1}. ${text.title}`}>
            {text.text}
          </MyText>
        ))}
      </div>
    </div>
  );
}
