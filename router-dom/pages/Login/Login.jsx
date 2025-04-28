import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import UserContext from "../../src/Context/UserContext";

function Login() {
  const [loginInfo, setLoginInfo] = useState({})
  const { user, setUserBool, setLoggedUser } = useContext(UserContext)
  console.log(user);
  
  

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();

    user.map((u) => {
      
      if (u.username !== loginInfo.username) {
        alert("user Not Found")
      } else {
        setLoggedUser({ username: u.username, password: u.password })
        setUserBool(true)
        setLoginInfo({})
        alert("Login Succesfull")
        navigate("/profile")
      }
    })


  }
  console.log(user);


  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginForm}>
        <h2 style={{ marginBottom: "10px", color: "#f0f0f0" }}>Login</h2>
        <form>
          <input
            type="text"
            placeholder="Username"
            className={styles.loginInput}
            value={loginInfo.username || ""}
            onChange={(e) => setLoginInfo((prev) => ({ ...prev, username: e.target.value }))}
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.loginInput}
            value={loginInfo.password || ""}
            onChange={(e) => setLoginInfo((prev) => ({ ...prev, password: e.target.value }))}
          />
          <button type="submit" className={styles.loginButton} onClick={handleSubmit}>
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
