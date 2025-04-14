import React, { useEffect, useRef, useState } from "react";

 function App() {
  const inputRef = useRef(null);
  const boxRef = useRef(null);
  const [style, setStyle] = useState({});


  const updateBoxStyle = () => {
    const element = boxRef.current;
    if (element) {
      if (element.classList.contains("box1")) {
        setStyle({
          width: 150,
          height: 80,
          backgroundColor: "blue",
          marginTop: 20,
        });
      } else if (element.classList.contains("box")) {
        setStyle({
          width: 700,
          height: 100,
          backgroundColor: "black",
          marginTop: 50,
        });
      }
    }
  };

  // 🔁 Run once on mount
  useEffect(() => {
    updateBoxStyle();
  }, []);


  const handleFocus = () => inputRef.current.focus();
  const handleBlur = () => inputRef.current.blur();
  const handleScrollIntoView = () => boxRef.current.scrollIntoView();
  const handleClick = () => alert("Button clicked using .click()");
  const handleBoundingRect = () => {
    const rect1 = boxRef.current.getBoundingClientRect();
    console.log(rect1.top, rect1.left, rect1.width, rect1.height);
    alert(`Top: ${rect1.top}, Left: ${rect1.left}`);
  };
  const handleSetAttribute = () => inputRef.current.setAttribute("placeholder", "Hello.........");
  const handleAddClass = () => {
    boxRef.current.classList.add("box1");
    boxRef.current.classList.remove("box");
    updateBoxStyle();
  };
  const handleRemoveClass = () => {
    boxRef.current.classList.add("box");
    boxRef.current.classList.remove("box1");
    updateBoxStyle();
    
  };
  const handleToggleClass = () => {
    boxRef.current.classList.toggle("box1");
    updateBoxStyle();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>useRef Current Methods</h2>

      <input ref={inputRef} placeholder="Type here..." style={{ marginBottom: "1rem" }} />
      <div>
        <button onClick={handleFocus}>Focus</button>
        <button onClick={handleBlur}>Blur</button>
        <button onClick={handleSetAttribute}>Set Attribute</button>
      </div>

      <br />

      <div>
        <button onClick={() => document.getElementById("clickBtn").click()}>Trigger .click()</button>
        <button id="clickBtn" onClick={handleClick} >Hidden Click Target</button>
      </div>

      <br />

      <div>
        <button onClick={handleScrollIntoView}>Scroll Into View</button>
        <button onClick={handleBoundingRect}>Get Bounding Rect</button>
        <button onClick={handleAddClass}>Add Class</button>
        <button onClick={handleRemoveClass}>Remove Class</button>
        <button onClick={handleToggleClass}>Toggle Class</button>
      </div>

      <div style={{ height: "100px" }} />
      <div
        ref={boxRef}
        className="box"
        style={style}
        // style={{ width: 200, height: 100, backgroundColor: "black", marginTop: 50 }}
      >
        Scroll target box
      </div>
    </div>
  );
}
export default App;