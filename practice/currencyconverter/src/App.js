import React from 'react'
import './App.css'
const App = () => {
  
  return (
    <div className='background'>
      <div className='leftbackground'>
        <center>
      <select name='india'>
        <option value="india">INDIA</option>
        <option value="us">US</option>
        <input type="number" />
      </select>
      </center>
      </div>
      <div  className='rightbackground'>
        <center>
      <select name='us'>
        <option value="us">US</option>
        <option value="india">INDIA</option>
        <input type="number" />
      </select>
      </center>
      </div>
    </div>
  )
}

export default App
