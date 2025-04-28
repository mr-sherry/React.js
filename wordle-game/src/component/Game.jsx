import React, { useEffect, useState } from "react";
import useApiFetch from "../Hooks/useApiFetch";
import styles from "./Game.module.css";

function Game() {
  const randomWord = useApiFetch();
  const [word, setWord] = useState("")
  const [letters, setLetters] = useState([[], [], [], [], [], []]);
  const [rowNum, setRowNum] = useState(0)

  useEffect(() => {
    setWord(randomWord)
    const eventManage = (e) => {
      const key = e.key.toLowerCase();

      if (/^[a-z]$/.test(key)) {
        if (letters[rowNum].length < 5) {
          const newLetters = [...letters];
          newLetters[rowNum] = [...newLetters[rowNum], key];
          setLetters(newLetters);
        }
      }
      else if (key === 'enter') {
        if (letters[rowNum].length === 5) {
          setRowNum(rowNum + 1);
        }
        else if (key === 'backspace') {

        }
      }
    }

    window.addEventListener('keydown', eventManage)
    return () => {
      window.removeEventListener('keydown', eventManage)
    }
  }, [letters, rowNum, randomWord])


  const divLetters = (i, j) => {
    return letters[i][j] ? letters[i][j].toUpperCase() : '';
  };

  const divClass = (i, j) => {
    const currentLetter = letters[i][j];
    if (!currentLetter) return 'white';
    console.log(randomWord);
    console.log(currentLetter);


    if (currentLetter === randomWord[j]) {
      return 'green';
    } else if (randomWord.includes(currentLetter)) {
      return 'yellow';
    }
  };

  const rows = [];

  for (let i = 0; i < 6; i++) {
    const innerRows = [];

    for (let j = 0; j < 5; j++) {
      innerRows.push(
        <div key={j} className={`${styles.wordleRow} ${styles[divClass(i, j)]}`}>
          {divLetters(i, j)}
        </div>
      );
    }

    rows.push(
      <div key={i} className={styles.wordleColumn}>
        {innerRows}
      </div>
    );
  }

  return (
    <>
      <div className={styles.mainDiv}>
        <h1>Wordle Game By Ahmed</h1>
        <h1>Random Word:{word}</h1>
        <div>

          {rows}
        </div>
      </div>
    </>
  );
}

export default Game;
