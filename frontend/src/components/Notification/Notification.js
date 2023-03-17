import React from "react";
import styles from "./Notification.module.scss";

export default function header() {
  return (
    <section className={styles.notificationContainer}>
      <div className={styles.notification}>
        <div className={styles.notificationText}>
          Empréstimo com a menor taxa do mercado
        </div>
        <div className={styles.closeButton}>
          <i class="fi fi-br-cross"></i>
        </div>
      </div>
    </section>
  );
}
