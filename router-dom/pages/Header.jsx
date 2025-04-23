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
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [activeNav, setActiveNav] = useState("home");

  const activeNavStyle = {
    padding: "8px 16px",
    textDecoration: "none",
    color: "#1e5bc6",
    fontWeight: 500,
    backgroundColor: "#e6f0ff",
    borderRadius: 20,
  };

  const inactiveNavStyle = {
    padding: "8px 16px",
    textDecoration: "none",
    color: "#333",
    fontWeight: 500,
  };

  const authButtonStyle = {
    display: "flex",
    alignItems: "center",
    padding: "8px 24px",
    backgroundColor: "#1e2a4a",
    color: "white",
    textDecoration: "none",
    borderRadius: 20,
    fontWeight: 500,
  };

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
  };

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 24px",
        backgroundColor: "white",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
        marginBottom: "30px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to="/" onClick={() => handleNavClick("home")}>
          <div style={{ fontSize: 24, fontWeight: "bold", color: "#333" }}>
            <span style={{ color: "#1e2a4a" }}>Defy</span>{" "}
            <span style={{ fontSize: 18, fontWeight: "normal", color: "#666" }}>
              MOBILE
            </span>
          </div>
        </Link>
      </div>

      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: 24,
        }}
      >
        <Link
          to="/"
          style={activeNav === "home" ? activeNavStyle : inactiveNavStyle}
          onClick={() => handleNavClick("home")}
        >
          HOME
        </Link>

        <Link
          to="/buy-esim"
          style={activeNav === "esim" ? activeNavStyle : inactiveNavStyle}
          onClick={() => handleNavClick("esim")}
        >
          BUY ESIM
        </Link>

        <Link
          to="/about"
          style={activeNav === "about" ? activeNavStyle : inactiveNavStyle}
          onClick={() => handleNavClick("about")}
        >
          ABOUT US
        </Link>
      </nav>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <Link to="/register" style={authButtonStyle}>
          Register
        </Link>
        <Link to="/login" style={authButtonStyle}>
          Login
        </Link>
      </div>
    </header>
  );
}
