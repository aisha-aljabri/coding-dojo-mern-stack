import React, {useState} from 'react'
import './tabs.css'

const Tabs = props => {
    
    return(
        <button  onClick={() => props.setContent(props.label) }>
            Tap {props.index}
        </button>
    )
        }

export default Tabs;