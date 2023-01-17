import React from 'react'
import {Link } from 'react-router-dom'
import './App.css'
const Home = () => {
  return (
    <div>
        <center>
      <h1>home component</h1>
      </center>
      <div className='backgroundhome'>
       <Link to='/componenta'><p>compa</p></Link> 
       <Link to='/componentb'><p>compb</p></Link> 
       <Link to='/componentc'><p>compc</p></Link> 
      </div>
    </div>
  )
}

export default Home
