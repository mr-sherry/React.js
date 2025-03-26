import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef();

  useEffect(() => {
    let para = countRef.current;
    console.log(para);
    para.innerText = Number(para.innerText) + 1;
  }, [count]);

  return (
    <div style={{ padding: "20px", fontSize: "18px" }}>
      <p>Count: {count}</p>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <p>Incremented times: </p>
        <p ref={countRef}>0</p>
      </div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default App;
