import React from "react";
import { Link } from "react-router-dom";
import styles from "./Register.module.css"; // Import the CSS Module

function Register() {
  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerForm}>
        <h2 style={{ marginBottom: "20px", color: "#f0f0f0" }}>Register</h2>
        <form>
          <input
            type="text"
            placeholder="Username"
            className={styles.registerInput}
          />
          <input
            type="email"
            placeholder="Email"
            className={styles.registerInput}
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.registerInput}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className={styles.registerInput}
          />
          <button type="submit" className={styles.registerButton}>
            SIGN UP
          </button>
        </form>
        <div className={styles.registerFooter}>
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
