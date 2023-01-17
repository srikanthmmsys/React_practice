import React  from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
    <Link to='/' >ComponentA</Link>
      <Link to="/comp1" >ComponentB</Link>
      <Link to='comp2' >ComponentsC</Link>
    </div>
  )
}

export default Navbar
