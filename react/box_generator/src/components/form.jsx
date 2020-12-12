import React, {useState} from 'react'

const FormToAdd = props => {
    const [color, setColor] = useState("");
    const [width, setWidth] = useState("");

    const handlesubmit = e => {
        e.preventDefault();
        const newbox = {color, width}
        props.createbox(newbox)
        setColor("");
        e.target.value="";
    }

    return(
        <form onSubmit={ handlesubmit }>
            <label>Color </label>
            <input  type="text" onChange={ (e) => setColor(e.target.value) }  />
            <input value="" type="text" onChange={ (e) => setWidth(e.target.value) } />
            <input type="submit" value="Add" />
        </form>
    )
}

export default FormToAdd;