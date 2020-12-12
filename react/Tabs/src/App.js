import React, { useState } from 'react';
import './App.css';
import Tabs from './components/tabs.jsx'

function App() {

  const labels = ['Tap 1 content is showing here', 'Tap 2 content is showing here', 'Tap 3 content is showing here', 'Tap 4 content is showing here']
  const [content, setContent] = useState("");

  return (
    <div className="App">
      {
        labels.map( (label, i ) => 
            <Tabs index={i+1} label={label} setContent={setContent}/>)
      }
      <p>{content}</p>
      
    </div>
  );
}

export default App;
