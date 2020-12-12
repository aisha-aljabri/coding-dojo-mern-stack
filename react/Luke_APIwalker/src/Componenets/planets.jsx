import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Planets = props => {
    const [result, setResult] = useState({})
    const [isErr, setisErr] = useState(false)

    useEffect(() => {
        setisErr(false)
        axios.get(`https://swapi.dev/api/planets/${props.id}`)
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
                <p>{result.climate}</p>
                <p>{result.terrain}</p>
                <p>{result.surface_water}</p>
                <p>{result.population}</p>
                </>:
                <p>These are not the droids you're looking for!</p>
            }
            
            </div>
    )}

export default Planets;