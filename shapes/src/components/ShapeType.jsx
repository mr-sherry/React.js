import React from "react";

function ShapeType({ shapeClick, type }) {
  return (
    <>
      <button onClick={() => shapeClick(type)}> {type}</button>
    </>
  );
}

export default ShapeType;
