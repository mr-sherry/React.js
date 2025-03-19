import React, { useState } from "react";

function ColorPic() {
  let [color, setColor] = useState("black");

  let body = document.querySelector("body");
  body.style.backgroundColor = color;

  function colorChange(e) {
    setColor(e.target.value);
  }

  return (
    <div>
      <input type="color" onChange={colorChange} />
    </div>
  );
}

export default ColorPic;
