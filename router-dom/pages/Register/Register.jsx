import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import stylesDark from "./RegisterDark.module.css";
import stylesLight from "./Register.module.css";
import UserContext from "../../src/Context/UserContext";

function Register() {
  const [userData, setUserData] = useState({})
  console.log(userData)
  const { user, setUser, themeBool } = useContext(UserContext);
  console.log(user);
  const styles = themeBool ? stylesDark : stylesLight;


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
        <form >
          <div className={styles.formmain}>
            <div className={styles.formSection}>
              <input
                type="text"
                placeholder="Full Name"
                className={styles.registerInput}
                value={userData.fName || ""}
                onChange={(e) => setUserData((prev) => ({ ...prev, fName: e.target.value }))}
              />
              <input
                type="text"
                placeholder="Username"
                className={styles.registerInput}
                value={userData.username || ""}
                onChange={(e) => setUserData((prev) => ({ ...prev, username: e.target.value }))}
              />
              <input
                type="email"
                placeholder="Email"
                className={styles.registerInput}
                value={userData.email || ""}
                onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value }))}
              />
              <input
                type="text"
                placeholder="About"
                className={styles.registerInput}
                value={userData.about || ""}
                onChange={(e) => setUserData((prev) => ({ ...prev, about: e.target.value }))}
              />
              <label className={styles.lables} htmlFor="gender">Gender</label>
              <input
                type="radio"
                id="male"
                name="gender"

                value="Male"
                checked={userData.gender === "Male"}
                onChange={(e) => setUserData((prev) => ({ ...prev, gender: e.target.value }))}
              />
              <label className={styles.lables} htmlFor="">Male</label>
              <input
                type="radio"
                id="female"
                name="gender"

                value="Female"
                checked={userData.gender === "Female"}
                onChange={(e) => setUserData((prev) => ({ ...prev, gender: e.target.value }))}
              />
              <label className={styles.lables} htmlFor="">Female</label>

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
            </div>
            {/*/////////////////////////// Social Media ///////////////////////////////*/}

            <div className={styles.formSection}>
              <input
                type="text"
                placeholder="Twitter"
                className={styles.registerInput}
                value={userData.twitter || ""}
                onChange={(e) => setUserData((prev) => ({ ...prev, twitter: e.target.value }))}
              />
              <input
                type="text"
                placeholder="Facebook"
                className={styles.registerInput}
                value={userData.facebook || ""}
                onChange={(e) => setUserData((prev) => ({ ...prev, facebook: e.target.value }))}
              />
              <input
                type="text"
                placeholder="Instagram"
                className={styles.registerInput}
                value={userData.instagram || ""}
                onChange={(e) => setUserData((prev) => ({ ...prev, instagram: e.target.value }))}
              />

              <textarea
                placeholder="Discription"
                className={styles.registerInput}
                rows="8"
                value={userData.discription || ""}
                onChange={(e) => setUserData((prev) => ({ ...prev, discription: e.target.value }))}
              />

            </div>
          </div>
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
