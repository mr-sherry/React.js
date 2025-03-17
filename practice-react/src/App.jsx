import { useState } from 'react'
import './App.css'
import Prac1 from './practice/Prac1';
import Prac2 from './practice/Prac2';

function App() {
  const experiment = 'Prac2'; // Change this to 'Prac2' to switch

  const components = {
    Prac1,
    Prac2,
  };

  const SelectedExperiment = components[experiment] || (() => <div>No Experiment Selected</div>);

  return (
    <div>
      <h1>React Playground</h1>
      <SelectedExperiment />
    </div>
  );
}

export default App;
