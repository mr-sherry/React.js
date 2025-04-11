import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

function App() {
  const [rangeInput, setRangeInput] = useState(8);
  const [randomPass, setRandomPass] = useState("hello");
  const [numBol, setNumBol] = useState(false);
  const [specialBol, setSpecialBol] = useState(false);
  const passwordRef = useRef(null);

  const genPass = () => {
    let allCaracters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numBol) allCaracters += "0123456789";
    if (specialBol) allCaracters += "!@#$%^&*()_+-=[]{}|;:,.<>?/~`\\";

    let password = "";
    for (let index = 0; index < rangeInput; index++) {
      const random = Math.floor(Math.random() * allCaracters.length) + 1;
      password = password + allCaracters.charAt(random);
    }
    setRandomPass(password);
  };

  useEffect(() => {
    genPass();
  }, [rangeInput, numBol, specialBol]);

  let copyToClipboard = () => {
    let input = passwordRef.current;
    window.navigator.clipboard.writeText(input.value);
    input.select();
  };

  return (
    <>
      <h1>Password Generator</h1>
      <input type="text" value={randomPass} ref={passwordRef} />
      <button onClick={copyToClipboard}>Copy</button>
      <br />
      <input
        type="range"
        min="6"
        max="30"
        value={rangeInput}
        onChange={(e) => setRangeInput(e.target.value)}
      />
      <p>Pass Lenght: {rangeInput}</p>
      <input type="checkbox" onChange={() => setNumBol((prev) => !prev)} />
      Numbers <br />
      <input type="checkbox" onChange={() => setSpecialBol((prev) => !prev)} />
      Chars <br />
    </>
  );
}

export default App;
