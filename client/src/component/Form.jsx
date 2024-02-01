import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Form() {
    const [limit,setLimit]=useState(0);
    async function handleSubmit(ev){
        ev.preventDefault();
        try{
          const response=await axios.post('http://localhost:3000/pattern/create',{limit});
          alert('data successfully saved')
           console.log(response);
           
        }catch(error){
          alert('data failed to save')
          console.error('error saving pattern:',error);
        }
             

    }
  return (
    <div>
        <h1>create pattern</h1>
      <form onSubmit={handleSubmit}>
        <input type='number' value={limit} onChange={(ev)=>setLimit(ev.target.value)} />
        {console.log(limit)}
        <button type='submit'>Submit</button>
      </form>
      <Link to={'/pattern/find'}>find pattern</Link>
    </div>
  )
}

export default Form