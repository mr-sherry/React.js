import { useEffect, useState } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import useLocalStorage from "./Hooks/useLocalStorage";

function App() {
  const [vale, setVale] = useState("");
  const [name, setName] = useLocalStorage("name", "guest");

  useEffect(() => {
    setVale(name);
  }, []);

  return (
    <>
      <InputBox value={vale} setName={setName} setVale={setVale} />
    </>
  );
}

export default App;
