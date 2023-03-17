import React from "react";
import styles from "./ContactForm.module.scss";

const personalizedServicesList = [
  {
    icon: "https://api.creditas.io/creditas-site/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fn3x4bsh5l2so%2F7mSdNO0SZucwd3QIEK2caQ%2Fad0afd6b3222a07581ed7d71888d4965%2FMobile_-Devices_-Vibration-verde.png&w=1920&q=75",
    title: "Adresse",
    descrption: "Rue de L’Agau 34970 Lattes (Montpellier) France.",
  },
  {
    icon: "https://api.creditas.io/creditas-site/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fn3x4bsh5l2so%2F7mSdNO0SZucwd3QIEK2caQ%2Fad0afd6b3222a07581ed7d71888d4965%2FMobile_-Devices_-Vibration-verde.png&w=1920&q=75",
    title: "E-mail",
    descrption: "contact@bigfocus.ma",
  },
  {
    icon: "https://api.creditas.io/creditas-site/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fn3x4bsh5l2so%2F7mSdNO0SZucwd3QIEK2caQ%2Fad0afd6b3222a07581ed7d71888d4965%2FMobile_-Devices_-Vibration-verde.png&w=1920&q=75",
    title: "Téléphone",
    descrption: "+212 (6) 60 23 03 55",
  },
  {
    icon: "https://api.creditas.io/creditas-site/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fn3x4bsh5l2so%2F7mSdNO0SZucwd3QIEK2caQ%2Fad0afd6b3222a07581ed7d71888d4965%2FMobile_-Devices_-Vibration-verde.png&w=1920&q=75",
    title: "Directeur général",
    descrption: "Marco Aarnink",
  },
];

export default function Pourquoi() {
  return (
    <section className={styles.pourquoiSection}>
      <div className={styles.pourquoiContainer}>
        <div className={styles.pourquoi}>
          <div className={styles.leftSide}>
            <h2 className={styles.title}>
              <b>Bigfocus</b>
            </h2>
            <p className={styles.description}>
              Bigfocus est une plateforme d’impression exclusive, conçue par et
              pour les <b>professionnels des arts graphiques</b> munis de
              fichiers prêts à être imprimer.
            </p>
          </div>
          <div className={styles.rightSide}>
            {personalizedServicesList.map((item) => (
              <li className={styles.item}>
                <div className={styles.personalizedServiceCard}>
                  <div className={styles.serviceImage}>
                    <span>
                      <img src={item.icon} />
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
