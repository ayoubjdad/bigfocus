import React from "react";
import styles from "./HomeSlider.module.scss";

const sliders = [
  {
    title: "Carro em garantia",
    description: "De R$ 5 mil a R$ 150 mil. Juros a partir de 1,49% ao mês.",
    link: "",
  },
  {
    title: "Imóvel em garantia",
    description:
      "De R$ 50 mil a R$ 3 milhões. Juros a partir de 0,99% ao mês + IPCA.",
    link: "",
  },
  {
    title: "Creditas Benefícios",
    description: "A primeira e única carteira de benefícios do RH.",
    link: "",
  },
];

export default function HomeSlider() {
  return (
    <section className={styles.homeSliderContainer}>
      <div className={styles.mainGrid}>
        <div className={styles.mainTitle}>
          <h1>
            Empréstimo com a <b>menor taxa</b> do mercado
          </h1>
          <p>
            Use seu apartamento, casa, carro ou salário como garantia e tenha
            até 240 meses para pagar.
          </p>
          <div className={styles.insideTitle}>
            <img src="https://api.creditas.io/creditas-site/_next/image?url=https%3A%2F%2Fapi.creditas.io%2Fcreditas-site%2Fimages%2Freclame-aqui.png&w=1920&q=75" />
            <p>
              Ganhamos o Prêmio Reclame Aqui 2020, 2021 e 2022: melhor empresa
              de empréstimo online.
            </p>
          </div>
          <section className={styles.sliderSection}>
            {sliders.map((slider) => (
              <div className={styles.sliderContainer}>
                <div className={styles.slider}>
                  <div className={styles.sliderInside}>
                    <div className={styles.sliderTitle}>{slider.title}</div>
                    <p>{slider.description}</p>
                    <button>Simule</button>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
        <div className={styles.mainImage}>
          <img src="https://api.creditas.io/creditas-site/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fn3x4bsh5l2so%2FPdOJHrtw8Yrqi7nMccLgC%2F3d8546f9466a58819a48ff55716e6937%2Fcreditas-aplicativo-home.jpg&amp;w=3840&amp;q=75" />
        </div>
      </div>
    </section>
  );
}
