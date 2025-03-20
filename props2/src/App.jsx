// import React from "react";
// import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// function Btn(props) {
//   let body = document.querySelector("body");
//   let rootDiv = document.getElementById("root");
//   rootDiv.style.display = "flex";
//   rootDiv.style.justifyContent = "center";
//   rootDiv.style.alignItems = "center";
//   rootDiv.style.width = "100%";
//   rootDiv.style.flexWrap = "wrap";

//   let [color, setColor] = useState("black");

//   body.style.backgroundColor = color;

//   return (
//     <>
//       <div
//         id="container"
//         style={{ display: "flex", flexDirection: "row", margin: "40px" }}
//       >
//         <button
//           style={{
//             backgroundColor: colors,
//             border: "1px solid black",
//             borderRadius: "10px",
//           }}
//           onClick={() => setColor(colors)}
//         >
//           {colors}
//         </button>
//       </div>
//     </>
//   );
// }

// export default Btn;

import React, { useState } from "react";
import Btn from "./Btn";

const App = () => {
  const [pColor, setPColor] = useState("");

  const handleChange = (color) => {
    setPColor(color);
    console.log("clicked from handleChange", color);
  };
  return (
    <>
      <div
        className="w-100"
        style={{ backgroundColor: pColor, height: "100vh" }}
      >
        <Btn color="red" onClick={handleChange} />
        <Btn color="blue" onClick={handleChange} />
      </div>
    </>
  );
};

export default App;
