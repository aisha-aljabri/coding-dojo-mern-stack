import React from 'react'
import { Link } from '@reach/router';
import axios from 'axios';

export default props => {

    const { removeFromDom } = props;
    const deleteproduct = (productId) => {
        
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }

    return (
        <div>
            {props.products.map((product, id)=>{
                return(
                <p>
                    <Link key={id} to = {`/api/products/${product._id}`}>{product.title}</Link>
                    <button onClick={(e)=>{deleteproduct(product._id)}}> Delete </button>
                </p>)
                
            })}
        </div>
    )
}