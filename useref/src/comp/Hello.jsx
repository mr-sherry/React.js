import React from "react";

function Hello({ count, countRef, setCount }) {
  return (
    <>
      <p>Count: {count}</p>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <p>Incremented times: </p>
        <p ref={countRef}>0</p>
      </div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default Hello;
