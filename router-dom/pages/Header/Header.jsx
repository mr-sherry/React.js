// import React from "react";
// import { Link } from "react-router";

// const Header = () => {
//   return (
//     <div>
//       <Link to={"/"}> Home</Link>
//       <Link to={"/about"}> About</Link>
//     </div>
//   );
// };

// export default Header;

import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import UserContext from "../../src/Context/UserContext";

export default function Header() {
  const { userBool, setUserBool } = useContext(UserContext);
  console.log(userBool);

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <NavLink to="/">
          <div className={styles.logo}>
            <span className={styles.logoPrimary}>Defy</span>{" "}
            <span className={styles.logoSecondary}>MOBILE</span>
          </div>
        </NavLink>
      </div>

      <nav className={styles.nav}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? styles.activeNav : styles.inactiveNav
          }
        >
          HOME
        </NavLink>

        <NavLink
          to="/buyesim"
          className={({ isActive }) =>
            isActive ? styles.activeNav : styles.inactiveNav
          }
        >
          BUY ESIM
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? styles.activeNav : styles.inactiveNav
          }
        >
          ABOUT US
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? styles.activeNav : styles.inactiveNav
          }
        >
          Profile
        </NavLink>
      </nav>

      <div className={styles.authButtons} >
        <NavLink to="/register" className={`${styles.authButton} ${userBool ? styles.hidden : ""}`}>
          Register
        </NavLink>
        <NavLink to="/login" className={`${styles.authButton} ${userBool ? styles.hidden : ""}`}>
          Login
        </NavLink>
        <NavLink to="/profile" className={`${!userBool ? styles.hidden : ""}`}>
          <img className={styles.profileimg} src="src/assets/user.png" alt="" />
        </NavLink>
        <button className={`${styles.authButton} ${!userBool ? styles.hidden : ""}`} onClick={() => setUserBool(false)}>
          Logout
        </button>
      </div>
    </header>
  );
}
