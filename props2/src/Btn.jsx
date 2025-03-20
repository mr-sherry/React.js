import React, { useState } from "react";

const Btn = ({ color, onClick }) => {
  return (
    <button
      style={{
        backgroundColor: color,
        border: "1px solid black",
        borderRadius: "10px",
      }}
      onClick={() => onClick(color)}
    >
      {color}
    </button>
  );
};

export default Btn;
