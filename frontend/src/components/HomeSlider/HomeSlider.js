import React from "react";
import styles from "./HomeSlider.module.scss";

const sliders = [
  {
    id: 1,
    title: "Découvrez",
    description:
      "Réservez une démo avec l’un de nos co-créateurs pour découvrir toutes nos fonctionnalités inédites.",
    link: "",
  },
  {
    id: 2,
    title: "Explorez",
    description:
      "L’équipe de Print.com vous accompagne dans le choix des meilleures solutions.",
    link: "",
  },
  {
    id: 3,
    title: "Accédez",
    description: "Parcourez le catalogue le plus innovant du web-to-print.",
    link: "",
  },
];

export default function HomeSlider() {
  return (
    <section className={styles.homeSliderContainer}>
      <div className={styles.mainGrid}>
        <div className={styles.mainTitle}>
          <h1>
            La plateforme où <b>créativité </b>et<b> impression</b> ne font
            qu’un
          </h1>
          <p>
            <b>Bigfocus.ma</b> est la plateforme d’impression en ligne tant
            attendue des Professionnels des Arts Graphiques.
          </p>
          <div className={styles.insideTitle}>
            <img src="https://api.creditas.io/creditas-site/_next/image?url=https%3A%2F%2Fapi.creditas.io%2Fcreditas-site%2Fimages%2Freclame-aqui.png&w=1920&q=75" />
            <p>
              Nous avons remporté le prix Reclame Aqui : Meilleure société de
              print en ligne.
            </p>
          </div>
          <section className={styles.sliderSection}>
            {sliders.map((slider) => (
              <div className={styles.sliderContainer}>
                <div className={styles.slider}>
                  <div className={styles.sliderInside}>
                    <div className={styles.sliderId}>{slider.id}</div>
                    <div className={styles.sliderTitle}>{slider.title}</div>
                    <p>{slider.description}</p>
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
