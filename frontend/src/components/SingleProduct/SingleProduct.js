import React from "react";
import styles from "./SingleProduct.module.scss";

export default function SingleProduct({ title, description, image }) {
  return (
    <li className={styles.singleProductContainer}>
      <div className={styles.singleProduct}>
        <div className={styles.image}>{image}</div>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </li>
  );
}
