import React from 'react'
import './Orangehover.css'
const QuickaccessChild = (props) => {
  return (
    <><div className='text-center'>
      <img className='quick quicker' src={`${props.url}`} alt="icon"/>
      <p className='quickfont'>{props.name}</p>
      </div>
    </>
  )
}

export default QuickaccessChild
