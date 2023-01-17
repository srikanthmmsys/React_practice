import React,{useContext} from 'react'
import { store } from './App'
const Child2 = () => {
    const [data,setData]=useContext(store)
  return (
    <div>
      <h1>Child2:{data}</h1>
      <button onClick={()=>{setData(data+1)}}>child2 click</button>

    </div>
  )
}

export default Child2
 