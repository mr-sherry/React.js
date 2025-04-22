import React from "react";
import { useRef } from "react";

function InputBox({ value, setName, setVale }) {
  let refe = useRef();

  return (
    <div>
      <input type="text" ref={refe} />
      <button
        onClick={() => {
          let input = refe.current.value;
          setVale(input);
          setName(input);
          refe.current.value = "";
        }}
      >
        save
      </button>

      <h1>Assalam-o-Alaikum {value}</h1>
    </div>
  );
}

export default InputBox;
