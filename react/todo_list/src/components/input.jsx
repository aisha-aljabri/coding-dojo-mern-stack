import React, {useState} from 'react'
import './input.css'

const Input = props => {
    const [title, settitle] = useState("")
    const [completed, setcompleted] = useState(false)

    const handleSubmit = e =>{
        e.preventDefault()
        const newtask = {title, completed}
        props.addtodo(newtask)
        settitle("")
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <input onChange={e=>{settitle(e.target.value)}} />
            <input type="submit" value="Add" />
        </form>
    )
        }

export default Input;