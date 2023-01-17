import React from 'react'
import './Orangehover.css'
const RecomendedPhonesChild = (props) => {
  return (
    <div className='text-center effect card ml-2 pt-2'>
      <div className='pl-3'>
      <p className='bg-danger discount2'>{props.discount} prepaid off+Bank offer</p>
      </div>
      <img  src={`${props.url}`}  alt='noimg'/>
      <h3 className='text-black'>{props.name}</h3>
      <h6 className='text-danger'><span className='text-secondary'>from</span>{props.price}</h6>
    </div>
  )
}

export default RecomendedPhonesChild
