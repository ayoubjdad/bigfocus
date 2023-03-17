import React from "react";
import styles from "./PageTitle.module.scss";

export default function PageTitle({ title, backgoundColor, titleColor }) {
  return (
    <section
      style={{ backgroundColor: backgoundColor }}
      className={styles.containerSection}
    >
      <div className={styles.containerPageTitle}>
        <h2 style={{ color: titleColor }} className={styles.titlePageTitle}>
          <b>{title}</b>
        </h2>
      </div>
    </section>
  );
}
