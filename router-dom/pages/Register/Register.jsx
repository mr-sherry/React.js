import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import UserContext from "../../src/Context/UserContext";

function Register() {
  const [userData, setUserData] = useState({})
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.password !== userData.confirmPass) {
      alert("Password Not Matched")
    } else {

      setUser((prev) => ([...prev, userData]));
      setUserData({})
      alert("Now Login")
      navigate("/login")
    }
  }

  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerForm}>
        <h2 style={{ marginBottom: "20px", color: "#f0f0f0" }}>Register</h2>
        <form>
          <input
            type="text"
            placeholder="Username"
            className={styles.registerInput}
            value={userData.username || ""}
            onChange={(e) => setUserData((prev) => ({ ...prev, username: e.target.value }))}
          />

          <input
            type="password"
            placeholder="Password"
            className={styles.registerInput}
            value={userData.password || ""}
            onChange={(e) => setUserData((prev) => ({ ...prev, password: e.target.value }))}

          />
          <input
            type="password"
            placeholder="Confirm Password"
            className={styles.registerInput}
            value={userData.confirmPass || ""}
            onChange={(e) => setUserData((prev) => ({ ...prev, confirmPass: e.target.value }))}

          />
          <button type="submit" className={styles.registerButton} onClick={handleSubmit}>
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
