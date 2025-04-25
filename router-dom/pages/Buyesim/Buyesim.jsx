import React from "react";
import styles from "./Buyesim.module.css";

function Buyesim() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img
          src="src/assets/facebook.png"
          alt="Facebook"
          className={styles.icon}
        />
        <h2 className={styles.heading}>Facebook</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <button className={styles.button}>READ MORE</button>
      </div>

      <div className={styles.card}>
        <img
          src="src/assets/instagram.png"
          alt="Instagram"
          className={styles.icon}
        />
        <h2 className={styles.heading}>Instagram</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <button className={styles.button}>READ MORE</button>
      </div>

      <div className={styles.card}>
        <img
          src="src/assets/youtube.png"
          alt="YouTube"
          className={styles.icon}
        />
        <h2 className={styles.heading}>YouTube</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <button className={styles.button}>READ MORE</button>
      </div>
    </div>
  );
}

export default Buyesim;
