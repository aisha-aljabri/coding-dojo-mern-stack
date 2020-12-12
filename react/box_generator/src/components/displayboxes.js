import React, {useState} from 'react'
import './displayboxes.css'

const DisplayBoxes = props => {
    
    return(
        <div>{
            props.boxes.map((item, i) =>
            <img
            style={{
                backgroundColor: item.color,
                width:Number(item.width),
                height:Number(item.width)
            }}
            />
            )
            }
        </div>
    )
}

export default DisplayBoxes;