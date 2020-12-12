import React, { useState } from 'react';
import './css/form.css'


const UserForm = props => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPas, setconfirmPas] = useState("");
    const [errors, setErrors] = useState({}); 
    

    const createUser = e => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmPas};
        props.setUser(newUser);
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setconfirmPas("");
        }
    
    const firstnameErrors = e => {
        let value = e.target.value;
        let message = "";
        if(!value) {
            message = "First Name is required!"
        } else if(value.length < 3) {
            message = "First Name must be 3 characters or longer!"
        }
        setErrors({...errors, firstname: message});
    }

    const lastnameErrors = e => {
        let value = e.target.value;
        let message = "";
        if(!value) {
            message = "Last Name is required!"
        } else if(value.length < 3) {
            message = "Last Name must be 3 characters or longer!"
        }
        setErrors({...errors, lastname: message});
    }


    const emailErrors = e => {
        let value = e.target.value;
        let message = "";
        if(!value) {
            message = "Email is required!"
        } else if(value.length < 5) {
            message = "Email must be 5 characters or longer!"
        }
        setErrors({...errors, email: message});
    }

    const passwordErrors = e => {
        let value = e.target.value;
        let message = "";
        if(!value) {
            message = "password is required!"
        } else if(value.length < 8) {
            message = "Password must be 8 characters or longer!"
        }
        setErrors({...errors, password: message});
    }
    
    const confirmPasErrors = e => {
        let value = e.target.value;
        let message = "";
        if(value != password) {
            message = "confirm Password must mach password!"
        }
        setErrors({...errors, confirmPas: message});
    }

    
    return(
        <div>

        
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstname(e.target.value) } onBlur={firstnameErrors} value={firstname} />
                <p className="text-danger">{errors.firstname}</p>
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } onBlur={lastnameErrors} value={lastname}/>
                <p className="text-danger">{errors.lastname}</p>
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } onBlur={emailErrors} value={email}/>
                <p className="text-danger">{errors.email}</p>
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } onBlur={passwordErrors} value={password}/>
                <p className="text-danger">{errors.password}</p>
            </div>
            <div>
                <label>confirm password: </label>
                <input type="text" onChange={ (e) => setconfirmPas(e.target.value) } onBlur={confirmPasErrors} value={confirmPas}/>
                <p className="text-danger">{errors.confirmPas}</p>
            </div>
            <input type="submit" value="Create User" />
        </form>
        
        </div>
        
    )

        
    }

    export default UserForm;
