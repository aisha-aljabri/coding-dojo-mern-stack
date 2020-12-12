import React, { useState } from 'react';
import './App.css';
import { Router } from '@reach/router';
import Home from './Componenets/home'
import Input from './Componenets/input'
import HellowithColor from './Componenets/HellowithColor'


function App() {
  return (
  <div className="App">
  <Router>
      <Home path="/home" />
      <Input path="/:input" />
      <HellowithColor path="/:word/:color/:back" />
  </Router>
</div>
  );
}

export default App;
