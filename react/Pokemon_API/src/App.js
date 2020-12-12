import React, { useState } from 'react';
import './App.css';


function App() {
  const [Pokemon, setPokemon] = useState([])

  const handlefetch = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
          .then(response => {
            return response.json();
        }).then(response => {
            console.log(response);
            setPokemon(response.results)
        }).catch(err=>{
            console.log(err);
        });
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
