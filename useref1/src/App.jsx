import { useState, useEffect, useRef } from "react";

function Input() {
  const [items, setItems] = useState("");
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    let storedValue = localStorage.getItem("inputValue");

    if (storedValue) {
      setItems(storedValue);
      setInputValue(storedValue);
    }
    console.log(storedValue);
  }, []);

  useEffect(() => {
    localStorage.setItem("inputValue", items);
  }, [items]);

  let handleClick = () => {
    setItems(inputValue);
    inputRef.current.focus();
  };
  let handleChange = () => {
    setInputValue(inputRef.current.value);
  };

  return (
    <div style={{ padding: "20px", fontSize: "18px" }}>
      <h2>Input</h2>
      <input
        ref={inputRef}
        value={inputValue}
        autoFocus={true}
        onChange={handleChange}
        type="text"
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "300px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          outline: "none",
        }}
      />

      <button onClick={handleClick}>save</button>
      <p>Current Value: {items}</p>
    </div>
  );
}
export default Input;
