import React from "react";
import PageTitle from "../components/PageTitle/PageTitle";
import SingleProduct from "../components/SingleProduct/SingleProduct";

const categories = [{ title: "CARTE DE VISITE", image: "" }];

const products = [
  {
    title: "ÉTIQUETTES / AUTOCOLLANTS",
    description:
      "Donnez vie à vos produits avec nos Etiquettes, Scotch imprimé, etc ...",
    category: "",
    image: "",
  },
  {
    title: "ÉTIQUETTES / AUTOCOLLANTS",
    description:
      "Donnez vie à vos produits avec nos Etiquettes, Scotch imprimé, etc ...",
    category: "",
    image: "",
  },
  {
    title: "ÉTIQUETTES / AUTOCOLLANTS",
    description:
      "Donnez vie à vos produits avec nos Etiquettes, Scotch imprimé, etc ...",
    category: "",
    image: "",
  },
  {
    title: "ÉTIQUETTES / AUTOCOLLANTS",
    description:
      "Donnez vie à vos produits avec nos Etiquettes, Scotch imprimé, etc ...",
    category: "",
    image: "",
  },
  {
    title: "ÉTIQUETTES / AUTOCOLLANTS",
    description:
      "Donnez vie à vos produits avec nos Etiquettes, Scotch imprimé, etc ...",
    category: "",
    image: "",
  },
  {
    title: "ÉTIQUETTES / AUTOCOLLANTS",
    description:
      "Donnez vie à vos produits avec nos Etiquettes, Scotch imprimé, etc ...",
    category: "",
    image: "",
  },
  {
    title: "ÉTIQUETTES / AUTOCOLLANTS",
    description:
      "Donnez vie à vos produits avec nos Etiquettes, Scotch imprimé, etc ...",
    category: "",
    image: "",
  },
  {
    title: "ÉTIQUETTES / AUTOCOLLANTS",
    description:
      "Donnez vie à vos produits avec nos Etiquettes, Scotch imprimé, etc ...",
    category: "",
    image: "",
  },
  {
    title: "ÉTIQUETTES / AUTOCOLLANTS",
    description:
      "Donnez vie à vos produits avec nos Etiquettes, Scotch imprimé, etc ...",
    category: "",
    image: "",
  },
  {
    title: "ÉTIQUETTES / AUTOCOLLANTS",
    description:
      "Donnez vie à vos produits avec nos Etiquettes, Scotch imprimé, etc ...",
    category: "",
    image: "",
  },
  {
    title: "ÉTIQUETTES / AUTOCOLLANTS",
    description:
      "Donnez vie à vos produits avec nos Etiquettes, Scotch imprimé, etc ...",
    category: "",
    image: "",
  },
  {
    title: "ÉTIQUETTES / AUTOCOLLANTS",
    description:
      "Donnez vie à vos produits avec nos Etiquettes, Scotch imprimé, etc ...",
    category: "",
    image: "",
  },
  {
    title: "ÉTIQUETTES / AUTOCOLLANTS",
    description:
      "Donnez vie à vos produits avec nos Etiquettes, Scotch imprimé, etc ...",
    category: "",
    image: "",
  },
  {
    title: "ÉTIQUETTES / AUTOCOLLANTS",
    description:
      "Donnez vie à vos produits avec nos Etiquettes, Scotch imprimé, etc ...",
    category: "",
    image: "",
  },
];

export default function Catalogue() {
  return (
    <div>
      <PageTitle
        title="Page title, mas não tem o Consignado Creditas na sua empresa?
          &nbsp; Confira o passo a passo:"
        // backgoundColor="gray"
        titleColor="#1f2d27"
      />
      <ul
      //  className={styles.prodcutsContainer}
      >
        {products.map((product) => (
          <SingleProduct
            title={product.title}
            description={product.description}
            image={product.image}
          />
        ))}
      </ul>
    </div>
  );
}
