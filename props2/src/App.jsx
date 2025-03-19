import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Btn(props) {
  let body = document.querySelector("body");
  let rootDiv = document.getElementById("root");
  rootDiv.style.display = "flex";
  rootDiv.style.justifyContent = "center";
  rootDiv.style.alignItems = "center";
  rootDiv.style.width = "100%";
  rootDiv.style.flexWrap = "wrap";

  let [color, setColor] = useState("black");

  body.style.backgroundColor = color;

  return (
    <>
      <div
        id="container"
        style={{ display: "flex", flexDirection: "row", margin: "40px" }}
      >
        <button
          style={{
            backgroundColor: props.color,
            border: "1px solid black",
            borderRadius: "10px",
          }}
          onClick={() => setColor(props.color)}
        >
          {props.color}
        </button>
      </div>
    </>
  );
}

export default Btn;
