import React from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import styles from "./HomeProducts.module.scss";

const products = [
  {
    title: "Indique a sua empresa",
    description:
      "Preencha o formulário clicando no botão Indicar minha empresa.",
    image: "Image",
  },
  {
    title: "Indique a sua empresa",
    description:
      "Preencha o formulário clicando no botão Indicar minha empresa.",
    image: "Image",
  },
  {
    title: "Indique a sua empresa",
    description:
      "Preencha o formulário clicando no botão Indicar minha empresa.",
    image: "Image",
  },
  {
    title: "Indique a sua empresa",
    description:
      "Preencha o formulário clicando no botão Indicar minha empresa.",
    image: "Image",
  },
];

export default function HomeProducts() {
  return (
    <section className={styles.containerSection}>
      <div className={styles.containerHomeProducts}>
        <h2 className={styles.titleHomeProducts}>
          <b>Gostou, mas não tem o Consignado Creditas na sua empresa?</b>&nbsp;
          Confira o passo a passo:
        </h2>
        <ul className={styles.prodcutsContainer}>
          {products.map((product) => (
            <SingleProduct
              title={product.title}
              description={product.description}
              image={product.image}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
