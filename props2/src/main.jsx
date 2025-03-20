import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <>
    {/* <div
      style={{ width: "100%", height: "100vh", backgroundColor: color }}
      className="d-flex justify-content-center align-items-center"
    >
      <Btn color="yellow" />
      <Btn color="gray" />
      <Btn color="red" />
      <Btn color="blue" />
      <Btn color="yEllow1" />

      <ColorPic />
    </div> */}

    <App />
  </>
);
