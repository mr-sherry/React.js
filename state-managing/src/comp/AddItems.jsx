import React from "react";

function AddItems({ itemRemover, items }) {
  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.value}
            <button onClick={() => itemRemover(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default AddItems;
