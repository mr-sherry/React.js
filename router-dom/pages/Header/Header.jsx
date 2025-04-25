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

import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
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
          to="/user"
          className={({ isActive }) =>
            isActive ? styles.activeNav : styles.inactiveNav
          }
        >
          USER
        </NavLink>
      </nav>

      <div className={styles.authButtons}>
        <NavLink to="/register" className={styles.authButton}>
          Register
        </NavLink>
        <NavLink to="/login" className={styles.authButton}>
          Login
        </NavLink>
      </div>
    </header>
  );
}
