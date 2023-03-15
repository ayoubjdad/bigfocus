import React from "react";
import styles from "./Slider.module.scss";
import Carousel from "react-material-ui-carousel";

const items = [
  {
    image:
      "https://api.creditas.io/creditas-site/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fn3x4bsh5l2so%2F2SaqaMjGnVSBdH6f9nED3A%2F544e1b70ce34760cd14cfca843b1dcba%2Fimg_2x.png&w=1920&q=75",
    name: "Compre, venda e financie seu carro com confiança",
    smallDescription: "CREDITAS AUTO",
    description:
      "Uma maneira inovadora para comprar, vender, trocar ou financiar seu carro com segurança, praticidade e agilidade. 100% online ou em uma das nossas lojas.",
  },
  {
    image:
      "https://api.creditas.io/creditas-site/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fn3x4bsh5l2so%2F5ABGEJMZyY20kcvcB8xnCc%2F7e2e3bdf275f46e9889ff3afeb9462ee%2Fimg-app-desktop.png&w=1200&q=75",
    name: "Sua próxima conquista tem sua digital",
    smallDescription: "APP CREDITAS",
    description:
      "Simule um empréstimo, financie um veículo ou reforme seu imóvel: tudo isso e muito mais você encontra no novo App da Creditas.",
  },
];

export default function Slider() {
  return (
    <div className={styles.mainCarousel}>
      <Carousel
        indicators={false}
        navButtonsAlwaysVisible
        NextIcon={<i className="fi fi-rr-arrow-right"></i>}
        PrevIcon={<i className="fi fi-rr-arrow-left"></i>}
      >
        {items.map((item, i) => (
          <div className={styles.singleCarousel} key={i}>
            <div className={styles.imageContainer}>
              <img src={item.image} />
            </div>
            <div className={styles.contentContainer}>
              <p>{item.smallDescription}</p>
              <div className={styles.contentTitle}>{item.name}</div>
              <p className={styles.contentDescription}>{item.description}</p>
              <button className={styles.buttonHeader}>
                Download
                <span>
                  <i className="fi fi-rr-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
