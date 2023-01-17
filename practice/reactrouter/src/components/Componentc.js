import React from 'react'
import { useNavigate } from 'react-router-dom'

const Componentc = () => {
const Navigate=useNavigate();

  return (
    <div>
      <h1>this is component c</h1>
      <button onClick={()=>
     Navigate("/", {replace:true}) }>back to home</button>
    </div>
  )
}

export default Componentc
