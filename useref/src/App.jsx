import { useState, useEffect, useRef } from "react";
import Hello from "./comp/Hello";

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
      <Hello count={count} countRef={countRef} setCount={setCount} />
    </div>
  );
}
export default App;
