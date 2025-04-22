import React, { useRef } from "react";
import { useUnitConverter } from "../Hooks/useUnitConverter";

function App() {
  const { value, setValue, fromUnit, setFromUnit, toUnit, setToUnit, result } =
    useUnitConverter();

  let inputRef = useRef();

  const units = ["meter", "kilometer", "foot", "inch"];

  return (
    <div>
      <h2>Unit Converter</h2>

      <div>
        <label>Value: </label>
        <input type="number" ref={inputRef} placeholder="Enter......." />
      </div>
      <button onClick={() => setValue(inputRef.current.value)}>Convert</button>
      <div>
        <p>From: </p>
        <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
          {units.map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>

      <div>
        <p>To: </p>
        <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
          {units.map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>

      <div>Result: {`${result} ${toUnit}`}</div>
    </div>
  );
}

export default App;
