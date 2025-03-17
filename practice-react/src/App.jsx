import { useState } from 'react'
import './App.css'
import MyCheckbox from './practice/MyCheckbox';
import Input from './practice/Input';
import Form from './practice/Form';

function App() {
  let experiment = 'Form'; 

  let components = {
    MyCheckbox,
    Input,
    Form,
  };

  let SelectedExperiment = components[experiment];

  return (
    <div>
      <h1>Practice React</h1>
      <SelectedExperiment />
    </div>
  );
}

export default App;
