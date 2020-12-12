import React, { useState } from 'react';
import './App.css';
import axios from 'axios';


function App() {
  const [Pokemon, setPokemon] = useState([])

  const handlefetch = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807').then(response=>{
      setPokemon(response.data.results)
})
  }
  return (
    <div className="App">
      <button type="button" onClick={handlefetch}>Fech Pokemon</button>
      {
        Pokemon.map((item) => <p>{item.name}</p>)
      }
    </div>
  );
}

export default App;
