import React from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css"; // Import the CSS Module

function Login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginForm}>
        <h2 style={{ marginBottom: "10px", color: "#f0f0f0" }}>Login</h2>
        <form>
          <input
            type="text"
            placeholder="Username"
            className={styles.loginInput}
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.loginInput}
          />
          <button type="submit" className={styles.loginButton}>
            SIGN IN
          </button>
        </form>
        <div className={styles.loginFooter}>
          Forgot password? or <Link to="/register">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
