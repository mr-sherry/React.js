import { useState } from "react";
import "./App.css";
import AddItems from "./comp/AddItems";

function App() {
  let [items, setItems] = useState([]);
  let [inputValue, setInputValue] = useState("");
  let [replaceBtn, setReplaceBtn] = useState(false);
  let [editId, setEditId] = useState(0);

  let addItem = () => {
    console.log(inputValue);
    if (inputValue === "") {
      alert("Please Enter Value");
    } else {
      setItems((prevItem) => [
        ...prevItem,
        { id: prevItem.length + 1, value: inputValue },
      ]);
      setInputValue("");
    }
  };

  let removeItem = (id) => {
    setItems((prevItem) => prevItem.filter((item) => item.id !== id));
  };

  let editItem = (id, oldValue) => {
    setEditId(id);
    setReplaceBtn(true);
    setInputValue(oldValue);
    let editP = document.getElementById("input");
    editP.focus();
  };

  let saveItem = () => {
    if (inputValue === "") {
      alert("Please Enter Value");
    } else {
      setItems((allItems) =>
        allItems.map((item) =>
          item.id === editId ? { id: editId, value: inputValue } : item
        )
      );
      setReplaceBtn(false);
      setInputValue("");
    }
  };

  return (
    <>
      <input
        id="input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {replaceBtn ? (
        <button onClick={saveItem}>Save</button>
      ) : (
        <button onClick={addItem}>Add Item</button>
      )}

      <AddItems itemEdit={editItem} itemRemover={removeItem} items={items} />
    </>
  );
}

export default App;
