import { useState } from "react";
import "./App.css";
import AddItems from "./comp/AddItems";

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    setItems((prevItems) => [
      ...prevItems,
      { id: prevItems.length + 1, value: inputValue },
    ]);
  };

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  return (
    <>
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={addItem}>Add Item</button>
      <AddItems itemRemover={removeItem} items={items} />
    </>
  );
}

export default App;
