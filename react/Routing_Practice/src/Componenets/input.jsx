import React, {useState} from 'react'


const Input = props => {
    return(
        <div>
        {
            isNaN(props.input) ?
            <p>The word is: {props.input} </p>:
            <p>The number is: {props.input} </p>
        
        }
        </div>

    )
}

export default Input;