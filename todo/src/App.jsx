import { useState } from "react";
import "./App.css";
import AddItems from "./comp/AddItems";

function App() {
  let [items, setItems] = useState([]);
  let [inputValue, setInputValue] = useState("");

  let addItem = () => {
    setItems((prevItem) => [
      ...prevItem,
      { id: prevItem.length + 1, value: inputValue },
    ]);
    setInputValue("");
  };

  let removeItem = (id) => {
    console.log(id);

    setItems((prevItem) => prevItem.filter((item) => item.id !== id));
  };
  let editItem = () => {};
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
      <AddItems itemEdit={editItem} itemRemover={removeItem} items={items} />
    </>
  );
}

export default App;
