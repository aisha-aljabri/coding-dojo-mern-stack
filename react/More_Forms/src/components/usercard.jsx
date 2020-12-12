import React, { useState } from 'react';
import './css/form.css'


const UserCard = props => {
    return(
        <div className="usercard">
            <p>First Name: {props.newUser.firstname}</p>
            <p>Last Name: {props.newUser.lastname}</p>
            <p>email: {props.newUser.email}</p>
            <p>Password: {props.newUser.password}</p>
            <p>confirm Password: {props.newUser.confirmPas}</p>
        </div>
        
    )
    }
    export default UserCard;
