import React, { useEffect, useRef, useState } from 'react';
import styles from './CounerGme.module.css';

function CounterGame() {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState({ userA: false, userB: false });
  const [time, setTime] = useState(0);
  const [initialTime, setInitialTime] = useState(0);
  const [userScore, setUserScore] = useState({ userA: 0, userB: 0 });
  const [isPaused, setIsPaused] = useState(false);

  const intervalRef = useRef(null);
  const delayRef = useRef(null);
  const countRef = useRef(0);

  const handleStart = () => {
    setTimeout(() => {
      if (time >= 10 && !start.userA && !start.userB) {
        setInitialTime(time);
        setCount(0);
        countRef.current = 0;
        setStart({ userA: true, userB: false });
        setUserScore({ userA: 0, userB: 0 });
      }
    }, 1000);
  };

  useEffect(() => {
    clearInterval(intervalRef.current);
    clearTimeout(delayRef.current);

    if (start.userA && !start.userB && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            const userAScore = countRef.current;
            setUserScore((prev) => ({ ...prev, userA: userAScore }));
            countRef.current = 0;
            setCount(0);
            setIsPaused(true);
            delayRef.current = setTimeout(() => {
              setTime(initialTime);
              setStart({ userA: false, userB: true });
              setIsPaused(false);
            }, 5000);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    if (start.userB && !start.userA && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            const userBScore = countRef.current;

            setUserScore((prevScores) => {
              const finalScores = { ...prevScores, userB: userBScore };
              setTimeout(() => {
                if (finalScores.userA > finalScores.userB) {
                  alert(`Game Over! User A wins! (${finalScores.userA} vs ${finalScores.userB})`);
                } else if (finalScores.userB > finalScores.userA) {
                  alert(`Game Over! User B wins! (${finalScores.userA} vs ${finalScores.userB})`);
                } else {
                  alert(`Game Over! It's a tie at ${finalScores.userA} points each.`);
                }
                setUserScore({ userA: 0, userB: 0 })
              }, 1000);
              setInitialTime(0);

              return finalScores;
            });

            countRef.current = 0;
            setCount(0);
            setStart({ userA: false, userB: false });
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(delayRef.current);
    };
  }, [start.userA, start.userB]);

  const handleClick = () => {
    if ((start.userA || start.userB) && !isPaused) {
      setCount((prev) => {
        const newVal = prev + 1;
        countRef.current = newVal;
        return newVal;
      });
    }
  };

  return (
    <div className={styles.mainDiv}>
      <h1>Count: {count}</h1>
      <h1>User A Score: {userScore.userA}</h1>
      <h1>User B Score: {userScore.userB}</h1>
      <h1>Time: {time}</h1>

      <input
        type="number"
        value={initialTime || time}
        disabled={start.userA || start.userB || isPaused}
        onChange={(e) => {
          const val = Number(e.target.value);
          setTime(val);
          setInitialTime(val);
        }}
      />

      <button
        disabled={!(start.userA || start.userB) || isPaused}
        onClick={handleClick}
      >
        Count: {count}
      </button>

      <button
        disabled={start.userA || start.userB || isPaused}
        onClick={handleStart}
      >
        Start
      </button>

      <h2>
        Current Turn:{' '}
        {start.userA
          ? 'User A'
          : start.userB
            ? 'User B'
            : isPaused
              ? 'Waiting...'
              : 'None'}
      </h2>
    </div>
  );
}

export default CounterGame;
