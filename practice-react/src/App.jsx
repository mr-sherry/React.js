import { useState } from "react";
import "./App.css";
import MyCheckbox from "./practice/MyCheckbox";
import Input from "./practice/Input";
import Form from "./practice/Form";
import Prac from "./practice/new";
import Boolean from "./practice/New1";
import TextChange from "./practice/Textarea";
import StateM from "./practice/StateM";

function App() {
  let experiment = "StateM";

  let components = {
    MyCheckbox,
    Input,
    Form,
    Prac,
    Boolean,
    TextChange,
    StateM,
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
