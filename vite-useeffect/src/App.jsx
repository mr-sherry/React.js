import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("api Fetched");

    return async function hello() {
      let data = await fetch("https://api.github.com/users/mr-sherry");

      let data1 = await data.json();
      setData(data1.name);
      console.log(data1.login);
    };
  }, [count]);

  // async function hello() {
  //   let data = await fetch("https://api.github.com/users/mr-sherry");

  //   let data1 = await data.json();
  //   console.log(data1);
  // }

  return (
    <>
      <h1>
        {count},{data}
      </h1>
      <button onClick={() => setCount(count + 1)}>hello</button>
    </>
  );
}

export default App;
