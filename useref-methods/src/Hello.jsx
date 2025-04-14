import React, { useEffect, useRef, useState } from "react";

export default function Hello() {
  const boxRef = useRef(null);
  const [rect, setRect] = useState({ top: 0, left: 0 ,width:0,height:0});

  useEffect(() => {
    const updateRect = () => {
      if (boxRef.current) {
        const r = boxRef.current.getBoundingClientRect();
        setRect({ top: Math.floor(r.top), left: Math.floor(r.left) , width: Math.floor(r.width), height: Math.floor(r.height)});

        
      }
    };
    window.addEventListener("scroll", updateRect);
    window.addEventListener("resize", updateRect);

    return ;
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>getBoundingClientRect</h2>

      <div style={{ height: "500px" }} />

      <div
        ref={boxRef}
        style={{
          height: "100px",
          width: "200px",
          backgroundColor: "black",
              margin: "0 auto",
          textAlign: "center",
          lineHeight: "100px",
          fontWeight: "bold",
        }}
      >
        Ahmed
      </div>

      <p style={{ textAlign: "center", marginTop: "20px" }}>
        Top: {rect.top}px | Left: {rect.left}px | width: {rect.width} | height: {rect.height}
      </p>

      <div style={{ height: "800px" }} />
    </div>
  );
}
