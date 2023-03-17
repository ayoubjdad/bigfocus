import React from "react";
import styles from "./Pourquoi.module.scss";

const personalizedServicesList = [
  {
    image:
      "https://api.creditas.io/creditas-site/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fn3x4bsh5l2so%2F7mSdNO0SZucwd3QIEK2caQ%2Fad0afd6b3222a07581ed7d71888d4965%2FMobile_-Devices_-Vibration-verde.png&w=1920&q=75",
    title: "Gagnez le temps",
    descrption:
      "Découvrez une nouvelle façon de créer vos impressions avec nos fonctionnalités inédites. Collaborez avec vos équipes et clients.",
  },
  {
    image:
      "https://api.creditas.io/creditas-site/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fn3x4bsh5l2so%2F12mWgOM4BJ4VjZob7h1Kpr%2F5de4cdbda6102e05a82a2f97ce175598%2Fate_-24h.png&w=1920&q=75",
    title: "Optimisez votre production",
    descrption:
      "En quelques clics, créez vos impressions, comparez les prix, commandez et expédiez des milliers de produits imprimés dans le monde entier.",
  },
  {
    image:
      "https://api.creditas.io/creditas-site/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fn3x4bsh5l2so%2Fmn646cESaW5sUtgffwCq0%2F0777414fa5d747eb461b2debc83175e0%2Fmenores-taxas.png&w=1920&q=75",
    title: "Restez au contrôle",
    descrption:
      "Bénéficiez d’un accompagnement dédié, de délais de livraison garantie et d’une vérification manuelle des fichiers par nos experts.",
  },
  {
    image:
      "https://api.creditas.io/creditas-site/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fn3x4bsh5l2so%2F2hqJWQXWLoUGjNM7g5Esj9%2Fdbafc46d12cf0f786163e8b610d42aba%2Fate_-35-anos.png&w=1920&q=75",
    title: "É em até 35 anos",
    descrption:
      "Esse é o prazo que você tem pra quitar o financiamento imobiliário.",
  },
];

export default function Pourquoi() {
  return (
    <section className={styles.pourquoiSection}>
      <div className={styles.pourquoiContainer}>
        <div className={styles.pourquoi}>
          <div className={styles.leftSide}>
            <h2 className={styles.title}>
              <b>Pourquoi Bigfocus ?</b>
            </h2>
            <p className={styles.description}>
              Bigfocus est une plateforme d’impression exclusive, conçue par et
              pour les <b>professionnels des arts graphiques</b> munis de
              fichiers prêts à être imprimer. Laissez-vous inspirer par le plus
              large et le plus innovant catalogue du Web ! Gérez vos projets
              d’impression grâce à notre interface révolutionnaire : comparez
              les prix sur un seul écran, collaborez avec vos collègues et
              clients, commandez en un clin d’œil… et bien plus !.
            </p>
          </div>
          <div className={styles.rightSide}>
            {personalizedServicesList.map((item) => (
              <li className={styles.item}>
                <div className={styles.personalizedServiceCard}>
                  <div className={styles.serviceImage}>
                    <span>
                      <img src={item.image} />
                    </span>
                  </div>
                  <div className={styles.service}>
                    <p className={styles.serviceTitle}>{item.title}</p>
                    <p className={styles.serviceDescription}>
                      {item.descrption}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
