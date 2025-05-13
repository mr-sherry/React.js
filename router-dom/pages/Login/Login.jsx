import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import stylesDark from "./LoginDark.module.css";
import stylesLight from "./Login.module.css";
import UserContext from "../../src/Context/UserContext";

function Login() {
  const [loginInfo, setLoginInfo] = useState({})
  const { user, setUserBool, setLoggedUser, themeBool } = useContext(UserContext)
  console.log(user);
  const styles = themeBool ? stylesDark : stylesLight;


  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();

    // user.map((u) => {
    //   if (u.username === loginInfo.username) {
    //     setLoggedUser({ username: u.username, password: u.password, gender: u.gender, email: u.email, about: u.about, discription: u.discription, fName: u.fName })
    //     setUserBool(true)
    //     setLoginInfo({})
    //     alert("Login Succesfull")
    //     navigate("/profile")
    //   } else {
    //     alert("user Not Found")
    //   }
    // })




    const matchedUser = user.find((u) => u.username === loginInfo.username);

    if (matchedUser) {
      setLoggedUser({
        username: matchedUser.username,
        password: matchedUser.password,
        gender: matchedUser.gender,
        email: matchedUser.email,
        about: matchedUser.about,
        discription: matchedUser.discription,
        fName: matchedUser.fName,
      });
      setUserBool(true);
      setLoginInfo({});
      alert("Login Successful");
      navigate("/profile");
    } else {
      alert("User Not Found");
    }


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
