import React from "react";
import styles from "./Header.module.scss";

const menuElements = [
  { alias: "Simule seu crédito", active: "" },
  { alias: "Soluções", active: "" },
  { alias: "Benefícios corporativos", active: "" },
  { alias: "Ajuda", active: "" },
];

export default function header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logo}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Logo-Creditas.png" />
      </div>
      <ul className={styles.menuContainer}>
        {menuElements.map((element) => (
          <li className={styles.menuElement}>{element.alias}</li>
        ))}
      </ul>
      <button className={styles.buttonHeader}>Entrar</button>
    </div>
  );
}
