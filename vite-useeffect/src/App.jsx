import { useEffect, useState } from "react";
import "./App.css";
import Table from "./comp/Table";

function App() {
  const [keys, setKeys] = useState([]);
  const [values, setValues] = useState([]);

  useEffect(() => {
    console.log("api Fetched");
    async function hello() {
      let api = await fetch("https://api.github.com/users/mr-sherry");
      let fetchedData = await api.json();
      let allKeys = Object.keys(fetchedData);
      setKeys(allKeys);
      let allValues = Object.values(fetchedData);
      setValues(allValues);
    }
    hello();
  }, []);

  // console.log(Object.keys(data));

  return (
    <>
      <Table keys={keys} values={values} />
    </>
  );
}

export default App;
