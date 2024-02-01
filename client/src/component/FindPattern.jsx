import axios from 'axios';
import React, { useState } from 'react'

function FindPattern() {
    const [number,setNumber]=useState(0);
    const [pattern,setPattern]=useState('')
    async function handleFind(ev){
        ev.preventDefault();
       try{
        const {data}=await axios.post('http://localhost:3000/pattern/find',{number});
       setPattern(data.ptrn)
       }catch(err){
        alert('no pattern found')
       }
    }
  return (
    <div>
        <h1>find pattern</h1>
      <form onSubmit={handleFind}>
        <input type='number' value={number} onChange={(ev)=>{setNumber(ev.target.value)}} />
        <button type='submit'>Submit</button>
      </form>
      <h1 className='patternHeader'>pattern: <br />{pattern}</h1>
    </div>
  )
}

export default FindPattern