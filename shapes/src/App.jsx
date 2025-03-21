import { useState } from "react";
import "./App.css";
import Shape from "./components/Shape";
import ShapeColor from "./components/ShapeColor";
import ShapeType from "./components/ShapeType";

function App() {
  const [scolor, setScolor] = useState("orange");
  const [stype, setStype] = useState("oval");

  let colorUpdate = (color) => {
    setScolor(color);
  };
  let typeUpdate = (type) => {
    setStype(type);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Shape type={stype} color={scolor} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "40px",
            gap: "20px",
          }}
        >
          <ShapeColor colorClick={colorUpdate} color="black" />
          <ShapeColor colorClick={colorUpdate} color="blue" />
          <ShapeColor colorClick={colorUpdate} color="red" />
          <ShapeColor colorClick={colorUpdate} color="green" />
          <ShapeColor colorClick={colorUpdate} color="olive" />
          <ShapeColor colorClick={colorUpdate} color="grey" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "40px",
            gap: "20px",
          }}
        >
          <ShapeType shapeClick={typeUpdate} type="circle" />
          <ShapeType shapeClick={typeUpdate} type="square" />
          <ShapeType shapeClick={typeUpdate} type="triangle" />
          <ShapeType shapeClick={typeUpdate} type="oval" />
          <ShapeType shapeClick={typeUpdate} type="rectangle" />
          <ShapeType shapeClick={typeUpdate} type="hexagon" />
          <ShapeType shapeClick={typeUpdate} type="star" />
        </div>
      </div>
      <Shape />
    </>
  );
}

export default App;
