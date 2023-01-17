import React, { useState } from 'react'
import Child from './Child'

const App = () => {
  const [value,setValue]=useState(0)
const receiveDataHandeller=(rvalue)=>{
  setValue(rvalue);
}


  return (
    <div>
      <h1>Parent</h1>
      {value}
      <hr/>
      <Child getData={receiveDataHandeller}/>
    </div>
  )
}

export default App
