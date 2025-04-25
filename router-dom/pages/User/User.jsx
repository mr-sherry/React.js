import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./User.module.css";

const User = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.imgWrapper}>
          <img
            src="src/assets/female.jpg"
            alt="Amna Shahid"
            className={styles.img}
          />
        </div>
        <h2 className={styles.name}>Amna Shahid</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          maiores labore molestiae, neque voluptas dolor consectetur.
        </p>
        <button
          onClick={() => navigate("/user/amnashahid7")}
          className={styles.button}
        >
          Github Details
        </button>
      </div>

      <div className={styles.card}>
        <div className={styles.imgWrapper}>
          <img
            src="src/assets/male.jpg"
            alt="Ahmed Raza"
            className={styles.img}
          />
        </div>
        <h2 className={styles.name}>Ahmed Raza</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          maiores labore molestiae, neque voluptas dolor consectetur.
        </p>
        <button
          onClick={() => navigate("/user/mr-sherry")}
          className={styles.button}
        >
          Github Details
        </button>
      </div>

      <div className={styles.card}>
        <div className={styles.imgWrapper}>
          <img
            src="src/assets/male.jpg"
            alt="Shafqat Raza"
            className={styles.img}
          />
        </div>
        <h2 className={styles.name}>Shafqat Raza</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          maiores labore molestiae, neque voluptas dolor consectetur.
        </p>
        <button
          onClick={() => navigate("/user/shafqatraza494")}
          className={styles.button}
        >
          Github Details
        </button>
      </div>
    </div>
  );
};

export default User;
