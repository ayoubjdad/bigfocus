import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import styles from "./Login.module.scss";

export default function Login() {
  return (
    <section className={styles.loginSection}>
      <div className={styles.loginContainer}>
        <h1>Hi, Welcome back</h1>
      </div>
      <div className={styles.loginFormSide}>
        <div className={styles.loginForm}>
          <div className={styles.loginHeader}>
            <h1>Sign to Bigfocus</h1>
            <p>New user? Create an account</p>
          </div>
          <LoginForm />
        </div>
      </div>
    </section>
  );
}
