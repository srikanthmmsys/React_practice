import React from 'react'
import { useNavigate } from 'react-router-dom';

const Componenta = () => {
  const Navigate=useNavigate();
  return (
    <div>
      <h1>componenta</h1>
      <p>this is  componenta</p>
      <button onClick={()=>
     Navigate("/", {replace:true}) }>back to home</button>
    
    </div>
  )
}

export default Componenta
