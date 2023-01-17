import React from 'react'
import "./Orangehover.css"
const Orangehover = (props) => {
  return (
    <>
      <p className="orangeHover">{props.children}{props.name}</p>
    </>
  )
}

export default Orangehover
