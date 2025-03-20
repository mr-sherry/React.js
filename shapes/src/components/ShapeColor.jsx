import React from "react";

function ShapeColor({ colorClick, color }) {
  return (
    <>
      <button onClick={() => colorClick(color)}>{color}</button>
    </>
  );
}

export default ShapeColor;
