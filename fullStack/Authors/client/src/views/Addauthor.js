import React, { useState } from 'react';
import axios from 'axios'
import { Link } from '@reach/router';
import { navigate } from "@reach/router";
import './Addauthor.css'


const Addauthor = () => {
    const [name, setName] = useState("")
    
    const handleform = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/authors/new', {
            name
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
        navigate("/")
}
    const cancel = e =>{
        navigate("/")
    }
    return (
        <>
        <h1>Favorite authors</h1>
        <Link to="/">Home</Link>
        <h4>Add new author</h4>
        <form onSubmit={handleform}>
        <p>
            <label>Name </label><br/>
            <input type="text" onChange={(e) => setName(e.target.value)} />
        </p>
        <input type="submit" value="Create"/>
        <button onClick={cancel}>Cancel</button>
        
        </form>
        </>
        
    
    )
}

export default Addauthor;