import React from "react";

function Table({ keys, values }) {
  return (
    <>
      <table style={{ margin: "50px" }}>
        <tbody>
          <tr>
            <th style={{ border: "2px solid white" }}>Keys</th>
            <th style={{ border: "2px solid white" }}>Value</th>
          </tr>
          {keys.map((key, index) => (
            <tr key={index}>
              <td style={{ border: "2px solid white" }}>{key}</td>
              <td style={{ border: "2px solid white", width: "500px" }}>
                {values[index]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
