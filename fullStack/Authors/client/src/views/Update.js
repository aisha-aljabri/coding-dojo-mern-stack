import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

export default (props) => {
  const { id } = props;
  const [name, setName] = useState("")

  useEffect(() => {
    axios
      .get("http://localhost:8000/authors/" + id)
      .then((res) => {
        setName(res.data.name);
      });
  }, []);

  const updateAuthor = e => {
    e.preventDefault();
    axios.put("http://localhost:8000/authors/" + id, {
        name
      })
      .then((res) => console.log(res));
      navigate("/")
  };
  const cancel = e =>{
    navigate("/")
}
  return (
    <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateAuthor}>
                <p>
                    <label>Name </label><br />
                    <input type="text" name="Name" value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
                </p>
                <input type="submit" value="submit"/>
                <button onClick={cancel}>Cancel</button>
        
            </form>
        </div>
  );
};