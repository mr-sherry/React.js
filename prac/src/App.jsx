import React, { useEffect } from "react";

const App = () => {
  const handleResize = () => {
    console.log("Window resized to", window.innerWidth, window.innerHeight);
  };

  return (
    <>
      <div style={{ margin: "300px" }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos sunt
        ullam eos mollitia sed quam deserunt laudantium debitis quas voluptatem.
        Doloremque veritatis voluptas, adipisci praesentium vel ut dignissimos
        earum cum.
      </div>
      <div style={{ margin: "300px" }}>
        <button onClick={() => (window.location.href = "https://google.com")}>
          Redirect
        </button>
        <button onClick={() => alert(window.location.href)}>Current URL</button>
        <button
          onClick={() =>
            alert(`Viewport: ${window.innerWidth} x ${window.innerHeight}`)
          }
        >
          Viewport Size
        </button>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Scroll to Top
        </button>
        <button onClick={() => window.alert("Hello from Ahmed!")}>Alert</button>
        <button
          onClick={() => alert(window.confirm("Are you sure?") ? "Yes" : "No")}
        >
          Confirm
        </button>
        <button
          onClick={() =>
            alert("You said: " + window.prompt("What's your name?"))
          }
        >
          Prompt
        </button>
        <button onClick={() => window.open("https://google.com", "_blank")}>
          Open New Tab
        </button>
        <button onClick={() => setTimeout(() => alert("Delayed 1s!"), 1000)}>
          Set Timeout
        </button>
        <button
          onClick={() => setInterval(() => console.log("Repeating..."), 2000)}
        >
          Set Interval
        </button>
        <button
          onClick={() =>
            window.localStorage.setItem("num", Math.random() * 100)
          }
        >
          Save to LocalStorage
        </button>
        <button
          onClick={() =>
            alert("Random Num: " + window.localStorage.getItem("num"))
          }
        >
          Read from LocalStorage
        </button>
        <button onClick={() => window.addEventListener("resize", handleResize)}>
          Add Resize Listener
        </button>
        <button
          onClick={() => window.removeEventListener("resize", handleResize)}
        >
          Remove Resize Listener
        </button>
        <button onClick={() => window.print()}>Print Page</button>
      </div>
    </>
  );
};

export default App;
