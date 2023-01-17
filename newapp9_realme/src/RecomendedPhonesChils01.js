import React from 'react'

const RecomendedPhonesChils01 = (props) => {
  return (
    <div className='text-center card1 ml-2 card effect'>
      <img className='recomendedimg' src={`${props.url}`} alt='noimg'/>
      <h5 className='text-black'>Realme {props.name}</h5>
      <h6 className='text-danger'>{props.price}</h6>
    </div>
  )
}

export default RecomendedPhonesChils01
