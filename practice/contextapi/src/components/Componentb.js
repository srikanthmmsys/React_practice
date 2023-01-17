import React, { useContext } from 'react'
import {context} from '../App'
const Componentb = () => {
let [data,setData]=useContext(context)
const onchangehandeller=(e)=>{
    setData(e.target.value)
}
  return (
    <div>
        <h1>componentb</h1>
      <input type="text" onChange={onchangehandeller}/>
      <div>{data}</div>
    </div>
  )
}

export default Componentb