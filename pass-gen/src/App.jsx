import React, { useEffect, useId, useRef, useState } from "react";

function App() {
  const [rangeInput, setRangeInput] = useState(8);
  const [randomPass, setRandomPass] = useState("hello");
  const [numBol, setNumBol] = useState(false);
  const [specialBol, setSpecialBol] = useState(false);
  const id = useId();
  const passwordRef = useRef(null);

  useEffect(() => {
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialCharacters = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`"\\';
    // console.log(lowercaseLetters.charAt(6));

    let password = "";
    if (numBol === false && specialBol === false) {
      console.log("first");

      for (let index = 1; index <= rangeInput; index++) {
        const random = Math.floor(Math.random() * 2) + 1;
        // console.log(random);
        switch (true) {
          case random === 1:
            const randomAlpha = Math.floor(Math.random() * 25);
            console.log("randomAlpha", randomAlpha);
            password = password + uppercaseLetters.charAt(randomAlpha);
            break;
          case random === 2:
            const randomAlphas = Math.floor(Math.random() * 25);
            console.log("randomAlphas", randomAlphas);
            password = password + lowercaseLetters.charAt(randomAlphas);

            break;
        }
      }
    } else if (numBol === true && specialBol === false) {
      console.log("second");

      for (let index = 0; index < rangeInput; index++) {
        const random = Math.floor(Math.random() * 3) + 1;

        switch (true) {
          case random === 1:
            const randomAlpha = Math.floor(Math.random() * 25);
            console.log("randomAlpha", randomAlpha);
            password = password + uppercaseLetters.charAt(randomAlpha);
            break;
          case random === 2:
            const randomAlphas = Math.floor(Math.random() * 25);
            console.log("randomAlphas", randomAlphas);
            password = password + lowercaseLetters.charAt(randomAlphas);

            break;
          case random === 3:
            const randomNum = Math.floor(Math.random() * 9);
            console.log("randomNum", randomNum);
            password = password + numbers.charAt(randomNum);

            break;
        }
      }
    } else if (numBol === false && specialBol === true) {
      console.log("second");

      for (let index = 0; index < rangeInput; index++) {
        const random = Math.floor(Math.random() * 3) + 1;

        switch (true) {
          case random === 1:
            const randomAlpha = Math.floor(Math.random() * 25);
            console.log("randomAlpha", randomAlpha);
            password = password + uppercaseLetters.charAt(randomAlpha);
            break;
          case random === 2:
            const randomAlphas = Math.floor(Math.random() * 25);
            console.log("randomAlphas", randomAlphas);
            password = password + lowercaseLetters.charAt(randomAlphas);

            break;
          case random === 3:
            const randomSpecial = Math.floor(Math.random() * 31);
            console.log("randomSpecial", randomSpecial);
            password = password + specialCharacters.charAt(randomSpecial);

            break;
        }
      }
    } else if (numBol === true && specialBol === true) {
      console.log("third");

      for (let index = 0; index < rangeInput; index++) {
        const random = Math.floor(Math.random() * 4) + 1;

        switch (true) {
          case random === 1:
            const randomAlpha = Math.floor(Math.random() * 25);
            console.log("randomAlpha", randomAlpha);
            password = password + uppercaseLetters.charAt(randomAlpha);
            break;
          case random === 2:
            const randomAlphas = Math.floor(Math.random() * 25);
            console.log("randomAlphas", randomAlphas);
            password = password + lowercaseLetters.charAt(randomAlphas);

            break;
          case random === 3:
            const randomNum = Math.floor(Math.random() * 9);
            console.log("randomNum", randomNum);
            password = password + numbers.charAt(randomNum);

            break;
          case random === 4:
            const randomSpecial = Math.floor(Math.random() * 31);
            console.log("randomSpecial", randomSpecial);
            password = password + specialCharacters.charAt(randomSpecial);

            break;
        }
      }
    }
    console.log(id);

    console.log(numBol);
    console.log(specialBol);
    setRandomPass(password);
  }, [rangeInput, numBol, specialBol]);
  const copyToClipboard = () => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 10);
    window.navigator.clipboard.writeText(randomPass);

    // const input = passwordRef.current;
    // if (input) {
    //   input.select();
    //   input.setSelectionRange(0, 20); // Select first 10 characters

    //   const selectedText = input.value.substring(
    //     input.selectionStart,
    //     input.selectionEnd
    //   );
    //   navigator.clipboard.writeText(selectedText);
    // }
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
      {/* <input type="checkbox" onClick={(e) => setNumBol(e.target.value)} />
      Numbers <br /> */}
      <input type="checkbox" onChange={() => setNumBol((prev) => !prev)} />
      Numbers <br />
      <input type="checkbox" onChange={() => setSpecialBol(!specialBol)} />
      Chars <br />
    </>
  );
}

export default App;
