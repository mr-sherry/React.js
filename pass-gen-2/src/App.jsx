import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

function App() {
  const [rangeInput, setRangeInput] = useState(8);
  const [randomPass, setRandomPass] = useState("hello");
  const [numBol, setNumBol] = useState(false);
  const [specialBol, setSpecialBol] = useState(false);
  const [indexGen, setIndexGen] = useState(51);
  const passwordRef = useRef(null);

  const genPass = () => {
    let allCaracters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numBol) {
      allCaracters += "0123456789";
      setIndexGen(61);
    } else if (specialBol) {
      allCaracters += "!@#$%^&*()_+-=[]{}|;:,.<>?/~`\\";
      setIndexGen(92);
    } else {
      setIndexGen(51);
    }

    let password = "";
    for (let index = 0; index < rangeInput; index++) {
      const random = Math.floor(Math.random() * indexGen) + 1;
      password = password + allCaracters.charAt(random);
    }

    setRandomPass(password);
  };

  useEffect(() => {
    genPass();
  }, [rangeInput, numBol, specialBol, indexGen]);

  let copyToClipboard = () => {
    window.Clipboard.select();
  };
  return (
    <>
      <h1>Password Generator</h1>
      <input type="text" value={randomPass} ref={passwordRef} />
      {/* <button onClick={copyToClipboard}>Copy</button> */}
      <br />
      <input
        type="range"
        min="6"
        max="30"
        value={rangeInput}
        onChange={(e) => setRangeInput(e.target.value)}
      />
      <p>Pass Lenght: {rangeInput}</p>
      {/* <input type="checkbox" onClick={(e) => setNumBol(e.target.value)} />
  Numbers <br /> */}
      <input type="checkbox" onChange={() => setNumBol((prev) => !prev)} />
      Numbers <br />
      <input type="checkbox" onChange={() => setSpecialBol((prev) => !prev)} />
      Chars <br />
    </>
  );
}

export default App;
