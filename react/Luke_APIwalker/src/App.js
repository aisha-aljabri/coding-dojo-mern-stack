import React, { useState } from 'react';
import './App.css';
import { Router } from '@reach/router';

// my components
import Search from './Componenets/search'
import People from './Componenets/people'
import Planets from './Componenets/planets'

function App() {
  



  return (
  <div className="App">

    <Search />

    <Router>
      <People path="/people/:id" />
      <Planets path="/planets/:id" />
    </Router>

</div>
  );
}

export default App;
