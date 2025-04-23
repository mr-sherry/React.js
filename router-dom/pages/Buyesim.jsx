import React from "react";

function Buyesim() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    padding: "40px 20px",
    backgroundColor: "white",
    fontFamily: "Arial, sans-serif",
  };

  const cardStyle = {
    width: "320px",
    border: "1px solid #333",
    borderRadius: "5px",
    padding: "30px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#e2e1ea",
    textAlign: "center",
  };

  const iconStyle = {
    width: "60px",
    height: "60px",
    marginBottom: "15px",
  };

  const headingStyle = {
    fontWeight: "bold",
    fontSize: "24px",
    marginBottom: "15px",
    textTransform: "uppercase",
    fontFamily: "Arial, sans-serif",
  };

  const textStyle = {
    color: "#333",
    fontSize: "16px",
    lineHeight: "1.5",
    marginBottom: "20px",
    padding: "0 15px",
  };

  const buttonStyle = {
    backgroundColor: "#000",
    color: "#fff",
    padding: "12px 20px",
    borderRadius: "50px",
    border: "none",
    cursor: "pointer",
    width: "200px",
    fontWeight: "bold",
    fontSize: "14px",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <img src="src\assets\facebook.png" alt="Facebook" style={iconStyle} />
        <h2 style={headingStyle}>Facebook</h2>
        <p style={textStyle}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <button style={buttonStyle}>READ MORE</button>
      </div>

      <div style={cardStyle}>
        <img src="src\assets\instagram.png" alt="Instagram" style={iconStyle} />
        <h2 style={headingStyle}>Instagram</h2>
        <p style={textStyle}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <button style={buttonStyle}>READ MORE</button>
      </div>

      <div style={cardStyle}>
        <img src="src\assets\youtube.png" alt="YouTube" style={iconStyle} />
        <h2 style={headingStyle}>YouTube</h2>
        <p style={textStyle}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <button style={buttonStyle}>READ MORE</button>
      </div>
    </div>
  );
}

export default Buyesim;
