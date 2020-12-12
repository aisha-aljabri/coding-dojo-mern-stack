import React, { useState } from 'react';
import './App.css';
import FormToAdd from './components/form.jsx'
import DisplayBoxes from './components/displayboxes'
function App() {

  const [boxes, setBox] = useState([]);

  const createbox = newbox =>{
    setBox( [...boxes, newbox])
  }
  return (
    <div className="App">

      <FormToAdd createbox={createbox} />
      <DisplayBoxes boxes={boxes} />

    </div>
  );
}

export default App;
