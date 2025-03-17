import { useState } from 'react';
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);
  let courseName = "React";
  let addbtn=document.getElementById("addbtn")
  let rmbtn=document.getElementById("rmbtn")
  // let counter = 15;

  const addValue = () => {
    if (counter>18) {
      addbtn.setAttribute('disabled','');
    }
    else if (counter==0) {
      rmbtn.removeAttribute('disabled');
    }
    counter = counter + 1;
    setCounter(counter);

  }
  const removeValue = () => {
    if (counter<2) {
      rmbtn.setAttribute('disabled','');
    }
    else if (counter==20) {
      addbtn.removeAttribute('disabled');
    }
    
      
      counter = counter - 1;
      setCounter(counter);
    
      // rmbtn.removeAttribute('disabled');
    
  }

  return (
    <>
      <h1>{courseName}</h1>
      <h1>Counter: {counter}</h1>
      <button id='addbtn' onClick={addValue}>Add Value {counter}</button><br />
      <button id='rmbtn' onClick={removeValue}>Remove Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App;