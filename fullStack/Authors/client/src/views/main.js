import React, {useState, useEffect} from 'react'
import { Link } from '@reach/router';
import axios from 'axios';
import { navigate } from "@reach/router";
import './main.css'

export default props => {
    const [authors, setAuthor] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/authors")
        .then(res => {
            setAuthor(res.data)
        });
    }, [])

    const deleteauthor = authorId => {
        axios.delete('http://localhost:8000/authors/' + authorId)
        .then(setAuthor(authors.filter(author => author._id != authorId)))
        
    }
    
    const updateauthor = (authorId) => {
        navigate("/authors/"+authorId+"/edit")
    }
    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to="/new">Add an author</Link>
            <h4>we have quotes by:</h4>
            <table>
                <tr>
                    <th>Author</th>
                    <th>Action available </th>
                </tr>
                {authors.map((author, id)=>{
                return(
                <tr>
                    <td>{author.name}</td>
                    <td>
                        {/* <Link key={id} to = {`/api/products/${author._id}`}>{product.title}</Link> */}
                        <button onClick={(e)=>{updateauthor(author._id)}}> Edit </button>
                        <button onClick={(e)=>{deleteauthor(author._id)}}> Delete </button>
                    </td>
                    
                    
                </tr>)
                
            })}
            </table>
            
        </div>
    )
}