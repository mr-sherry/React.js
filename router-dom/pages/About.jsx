import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";

function About() {
  const baseColor = "#1e1e1e";
  const shadowDark = "#141414";
  const shadowLight = "#2e2e2e";
  const textColor = "#f0f0f0";

  const containerStyle = {
    backgroundColor: "white",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
    fontFamily: "sans-serif",
  };

  const accordionStyle = {
    width: "900px",
    borderRadius: "10px",
    backgroundColor: baseColor,
    boxShadow: `8px 8px 15px ${shadowDark}, -8px -8px 15px ${shadowLight}`,
    color: textColor,
  };

  const headerStyle = {
    backgroundColor: baseColor,
    color: textColor,
    fontWeight: "bold",
    border: "none",
    boxShadow: `inset 2px 2px 5px ${shadowDark}, inset -2px -2px 5px ${shadowLight}`,
    borderRadius: "12px",
    marginBottom: "8px",
  };

  const bodyStyle = {
    backgroundColor: baseColor,
    color: textColor,
    borderRadius: "0px",
    padding: "20px",
    boxShadow: `inset 4px 4px 8px ${shadowDark}, inset -4px -4px 8px ${shadowLight}`,
  };

  return (
    <div style={containerStyle}>
      <Accordion defaultActiveKey="0" style={accordionStyle}>
        {[...Array(5)].map((_, i) => (
          <Accordion.Item
            eventKey={i.toString()}
            key={i}
            style={{ marginBottom: "10px", border: "none" }}
          >
            <Accordion.Header style={headerStyle}>
              Accordion Item #{i + 1}
            </Accordion.Header>
            <Accordion.Body style={bodyStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default About;
