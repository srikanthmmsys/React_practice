import React,{useContext} from 'react'
import {store} from './App'
const Child1 = () => {
const [data,setData]=useContext(store)

  return (
    <div>
      <h1>Child1:{data}</h1>
      <button onClick={()=>{setData(data+1)}}>child1 click</button>

    </div>
  )
}

export default Child1
