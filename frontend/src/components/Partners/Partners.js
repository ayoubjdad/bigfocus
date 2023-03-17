import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import styles from "./Partners.module.scss";

const partnersList = [
  {
    logo: "https://logos-marques.com/wp-content/uploads/2021/07/Home-Credit-logo.png",
    link: "",
  },
  {
    logo: "https://logos-marques.com/wp-content/uploads/2021/07/Home-Credit-logo.png",
    link: "",
  },
  {
    logo: "https://logos-marques.com/wp-content/uploads/2021/07/Home-Credit-logo.png",
    link: "",
  },
  {
    logo: "https://logos-marques.com/wp-content/uploads/2021/07/Home-Credit-logo.png",
    link: "",
  },
  {
    logo: "https://logos-marques.com/wp-content/uploads/2021/07/Home-Credit-logo.png",
    link: "",
  },
  {
    logo: "https://logos-marques.com/wp-content/uploads/2021/07/Home-Credit-logo.png",
    link: "",
  },
];

export default function Partners() {
  return (
    <section className={styles.partnersContainer}>
      <Grid container spacing={2} className={styles.gridContainer}>
        {partnersList.map((partner) => (
          <Grid xs={2}>
            <a href={partner.link}>
              <img src={partner.logo} className={styles.logo} />
            </a>
          </Grid>
        ))}
      </Grid>
    </section>
  );
}
