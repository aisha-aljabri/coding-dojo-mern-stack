import React, { useState } from 'react';
import './css/form.css'


const UserForm = props => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPas, setconfirmPas] = useState("");
    

    const createUser = e => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmPas};
        props.setUser(newUser);
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setconfirmPas("");
        };
    
    return(
        <div>

        
        <form onSubmit={ createUser }>
            <div>
                <label>firstname: </label> 
                <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
                
            </div>
            <div>
                <label>lastname: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>confirm password: </label>
                <input type="text" onChange={ (e) => setconfirmPas(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
        
        </div>
        
    )

        
    }

    export default UserForm;
