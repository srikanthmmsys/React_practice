import React,{useContext} from 'react'
import { store } from './App'

const Child2 = () => {

  const [data,setData]=useContext(store);
  
  return (
    <div>
      <h1>Child2:{data.name}</h1>
  
        
    </div>
  )
}

export default Child2
