import React, { useEffect, useState } from 'react'
import axios from 'axios';

const People = props => {
    const [result, setResult] = useState({})
    const [isErr, setisErr] = useState(false)

    useEffect(() => {
        setisErr(false)
        axios.get(`https://swapi.dev/api/people/${props.id}`)
        .then(res => {
            console.log(res);
            setResult(res.data);
        }).catch(err => {
            if(err.response && err.response.status === 404) {
                setisErr(true);
            }})
    }, [props]);

    return(
        
        <div>
            {
                !isErr?
                <>
                <h1>{result.name}</h1>
                <p>{result.height}</p>
                <p>{result.mass}</p>
                <p>{result.hair_color}</p>
                <p>{result.skin_color}</p>
                </>:
                <p>These are not the droids you're looking for!</p>
            }
            
        </div>
    )}

export default People;