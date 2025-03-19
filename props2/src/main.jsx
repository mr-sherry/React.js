import { createRoot } from "react-dom/client";
import "./index.css";
import Btn from "./App";
import ColorPic from "./comp/ColorPic";

createRoot(document.getElementById("root")).render(
  <>
    <Btn color="yellow" />
    <Btn color="gray" />
    <Btn color="red" />
    <ColorPic />
  </>
);
