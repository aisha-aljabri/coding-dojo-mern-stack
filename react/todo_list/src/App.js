import React, { useState } from 'react';
import './App.css';
import Input from './components/input.jsx'
import Displaytasks from './components/displaytasks.jsx'

function App() {
  const [todoList, settodo] = useState([]);

  const addtodo = newtask => {
    settodo([...todoList, newtask])
  }
  return (
    <div className="App">
      <Input addtodo={addtodo} />
      {
        todoList.map( (task, i) => 
        <Displaytasks task={task} index={i} todoList={todoList} settodo={settodo}/>
        ) 
      }
      
    </div>
  );
}

export default App;
