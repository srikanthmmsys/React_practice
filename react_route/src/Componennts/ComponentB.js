import React from 'react'
import { Route,Routes,Link } from 'react-router-dom'
import Nested from './Nested';
const ComponentB = () => {
  return (
    <div>
        <Link to='nested'>nested</Link>
      <h1>ComponentB</h1>
      
      <Routes>
      <Route path='nested' element={<Nested/>}/>
      </Routes>
    </div>
  )
}

export default ComponentB;
