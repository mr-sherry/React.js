import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px 16px",
    marginTop: "30px",
    backgroundColor: "black",
    color: "white",
  };

  const socialIconsContainerStyle = {
    display: "flex",
    gap: "16px",
    marginBottom: "16px",
  };

  const iconStyle = {
    backgroundColor: "white",
    borderRadius: "50%",
    padding: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "36px",
    height: "36px",
  };

  const iconImageStyle = {
    width: "20px",
    height: "20px",
  };

  const navStyle = {
    marginBottom: "24px",
  };

  const navListStyle = {
    display: "flex",
    gap: "24px",
    listStyle: "none",
    padding: 0,
    margin: 0,
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
  };

  const copyrightStyle = {
    fontSize: "14px",
    color: "#999",
  };

  return (
    <footer style={footerStyle}>
      <div style={socialIconsContainerStyle}>
        <a href="#" style={iconStyle}>
          <img
            src="src\assets\comment.png"
            alt="Facebook"
            style={iconImageStyle}
          />
        </a>
        <a href="#" style={iconStyle}>
          <img
            src="src\assets\envelope.png"
            alt="Instagram"
            style={iconImageStyle}
          />
        </a>
        <a href="#" style={iconStyle}>
          <img
            src="src\assets\paper-plane.png"
            alt="Twitter"
            style={iconImageStyle}
          />
        </a>
        <a href="#" style={iconStyle}>
          <img
            src="src\assets\phone-call.png"
            alt="Camera"
            style={iconImageStyle}
          />
        </a>
        <a href="#" style={iconStyle}>
          <img
            src="src\assets\marker.png"
            alt="YouTube"
            style={iconImageStyle}
          />
        </a>
      </div>

      <nav style={navStyle}>
        <ul style={navListStyle}>
          <li>
            <Link to={"/"} style={linkStyle}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/buy-esim"} style={linkStyle}>
              Buy E-Sim
            </Link>
          </li>
          <li>
            <Link to={"/about"} style={linkStyle}>
              About Us
            </Link>
          </li>
        </ul>
      </nav>

      <div style={copyrightStyle}>
        Copyright ©2025; Designed by{" "}
        <span style={{ textTransform: "uppercase" }}>Ahmed</span>
      </div>
    </footer>
  );
};

export default Footer;
