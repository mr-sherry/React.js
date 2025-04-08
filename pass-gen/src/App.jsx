import React, { useEffect, useState } from "react";

function App() {
  const [rangeInput, setRangeInput] = useState(8);
  const [randomPass, setRandomPass] = useState("hello");

  useEffect(() => {
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialCharacters = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`"\\';
    console.log(lowercaseLetters.charAt(6));

    let password = "";
    for (let index = 0; index < rangeInput; index++) {
      const random = Math.floor(Math.random() * 4) + 1;
      console.log(random);
      switch (true) {
        case random === 1:
          const randomAlpha = Math.floor(Math.random() * 26) + 1;
          console.log("randomAlpha", randomAlpha);
          password = password + uppercaseLetters.charAt(randomAlpha);

          break;
        case random === 2:
          const randomAlphas = Math.floor(Math.random() * 26) + 1;
          console.log("randomAlphas", randomAlphas);
          password = password + lowercaseLetters.charAt(randomAlphas);

          break;
        case random === 3:
          const randomNumber = Math.floor(Math.random() * 10) + 1;
          console.log("randomNumber", randomNumber);
          password = password + numbers.charAt(randomNumber);

          break;
        case random === 4:
          const randomChars = Math.floor(Math.random() * 32) + 1;
          console.log("randomChars", randomChars);
          password = password + specialCharacters.charAt(randomChars);

          break;
      }
    }
    console.log(password);
    setRandomPass(password);
  }, [rangeInput]);

  return (
    <>
      <h1>Password Generator</h1>
      <input type="text" value={randomPass} />
      <br />
      <input
        type="range"
        min="6"
        max="30"
        value={rangeInput}
        onChange={(e) => setRangeInput(e.target.value)}
      />
      <p>Pass Lenght: {rangeInput}</p>
      <input type="checkbox" />
      Numbers <br />
      <input type="checkbox" />
      Chars <br />
    </>
  );
}

export default App;
