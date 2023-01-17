import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const Componentb = () => {
  const Navigate=useNavigate();
   const {name}= useParams()
  return (
    <div>
      <h1>this is component b</h1>
      <h1>{name}</h1>
      <button onClick={()=>
     Navigate("/", {replace:true}) }>back to home</button>
    
    </div>
  )
}

export default Componentb
