import React, {useState} from 'react'
import { navigate } from '@reach/router'

const Search = () =>{

    const [category, setCategory] = useState("people")
    const [id, setId] = useState(1)

    const handlesearch = (e) => {
        e.preventDefault()
        navigate(`/${category}/${id}`)
        
    }

    return(

        <form onSubmit={e => handlesearch(e)}>
        <label>Search For: </label>
        <select name="swapi" id="swapi" onChange={(e) => setCategory(e.target.value)}>
            <option value="people">People</option>
            <option value="planets">Planets</option>
        </select>
        <input type="number" onChange={(e) => setId(e.target.value)} />
        <button type="submit">Search</button>
        </form>

    )
}

export default Search;