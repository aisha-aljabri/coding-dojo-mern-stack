import React, {useState} from 'react'
import './displaytasks.css'


const Displaytasks = props => {
    const {task, index, todoList, settodo} = props;

    const onchange = () => {
        todoList[index].completed = !todoList[index].completed;
        settodo([...todoList])
    }
    const onClick = () => {
        settodo(()=> {
            return todoList.filter(task => todoList.indexOf(task) !== index)
        })
    }
    return(
    <div>
        <p style={task.completed? {textDecoration: 'line-through'} :{}} >{task.title}</p>
        <input type="checkbox" checked={task.completed} onChange={onchange} />
        <button onClick={onClick}>Delete</button>
    </div>
    
    )
}

export default Displaytasks;