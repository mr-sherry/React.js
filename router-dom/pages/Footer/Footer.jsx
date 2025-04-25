import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <a href="#" className={styles.icon}>
          <img src="src/assets/comment.png" alt="Facebook" />
        </a>
        <a href="#" className={styles.icon}>
          <img src="src/assets/envelope.png" alt="Instagram" />
        </a>
        <a href="#" className={styles.icon}>
          <img src="src/assets/paper-plane.png" alt="Twitter" />
        </a>
        <a href="#" className={styles.icon}>
          <img src="src/assets/phone-call.png" alt="Camera" />
        </a>
        <a href="#" className={styles.icon}>
          <img src="src/assets/marker.png" alt="YouTube" />
        </a>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Link to="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/buyesim" className={styles.link}>
              Buy E-Sim
            </Link>
          </li>
          <li>
            <Link to="/about" className={styles.link}>
              About Us
            </Link>
          </li>
        </ul>
      </nav>

      <div className={styles.copyright}>
        Copyright ©2025; Designed by{" "}
        <span className={styles.uppercase}>Ahmed</span>
      </div>
    </footer>
  );
};

export default Footer;
