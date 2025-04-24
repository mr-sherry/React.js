import React from "react";
import { Link } from "react-router-dom";

function Register() {
  const baseColor = "#1e1e1e";
  const shadowDark = "#141414";
  const shadowLight = "#2e2e2e";
  const textColor = "#f0f0f0";

  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    fontFamily: "sans-serif",
    marginTop: "50px",
  };

  const formStyle = {
    width: "300px",
    padding: "40px",
    borderRadius: "20px",
    backgroundColor: baseColor,
    boxShadow: `8px 8px 15px ${shadowDark}, -8px -8px 15px ${shadowLight}`,
    textAlign: "center",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "12px",
    border: "none",
    outline: "none",
    backgroundColor: baseColor,
    boxShadow: `inset 4px 4px 6px ${shadowDark}, inset -4px -4px 6px ${shadowLight}`,
    fontSize: "14px",
    color: textColor,
  };

  const buttonStyle = {
    ...inputStyle,
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: `4px 4px 10px ${shadowDark}, -4px -4px 10px ${shadowLight}`,
  };

  const footerStyle = {
    fontSize: "12px",
    marginTop: "15px",
    color: "#aaa",
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h2 style={{ marginBottom: "20px", color: textColor }}>Register</h2>
        <form>
          <input type="text" placeholder="username" style={inputStyle} />
          <input type="email" placeholder="email" style={inputStyle} />
          <input type="password" placeholder="password" style={inputStyle} />
          <input
            type="password"
            placeholder="confirm password"
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>
            SIGN UP
          </button>
        </form>
        <div style={footerStyle}>
          Already have an account?{" "}
          <Link
            to={"/login"}
            style={{ textDecoration: "underline", cursor: "pointer" }}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
