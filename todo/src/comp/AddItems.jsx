import React from "react";

function AddItems({ itemEdit, itemRemover, items }) {
  return (
    <>
      {items.map((item) => (
        <p key={item.id}>
          {item.value}
          <button onClick={() => itemRemover(item.id)}>Remove</button>
          <button onClick={() => itemEdit(item.id, item.value)}>Edit</button>
        </p>
      ))}
    </>
  );
}

export default AddItems;
