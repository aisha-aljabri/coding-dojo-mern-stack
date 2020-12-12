import React, { useState } from 'react';
import './App.css';
import UserForm from './components/form'
import UserCard from './components/usercard'
function App() {
  const [newUser, setUser] = useState("");
  return (
    <div className="App">
      <UserForm setUser={setUser}/>
      <UserCard newUser={newUser}/>
    </div>
  );
}

export default App;
