import React from 'react'


const Hello = props => {
    return (
        <p
        style={{
            backgroundColor: props.back,
            color: props.color
        }}
        >The word is: {props.word}</p>
    )
}

export default Hello;