import React from 'react'

const RecomendedPhonesChils0 = (props) => {
  return (
    <div className='text-center card1 ml-2 card effect'>
      <img className='recomendedimg' src={`${props.url}`} alt='noimg'/>
      <h3 className='text-black'>{props.name}</h3>
      <h6 className='text-danger'><span className='text-secondary'>from</span>{props.price}</h6>
    </div>
  )
}

export default RecomendedPhonesChils0
