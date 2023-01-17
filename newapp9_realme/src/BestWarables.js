import React from 'react'
import RecomendedPhonesChils01 from './RecomendedPhonesChils01'
const BestWarables = () => {
  return (
    <div>
       <div className='d-flex flex-row flex-warp'>
    <img className='rimg1 effect ml-5 mb-2' src='https://res.cloudinary.com/dx0fji5gh/image/upload/v1661774238/realme/bw1_gbd9kh.webp' alt='noimg'/>
    <RecomendedPhonesChils01  url="https://res.cloudinary.com/dx0fji5gh/image/upload/v1661774238/realme/bw2_wzzkv6.webp"  name= 'Tech Life Watch..' price='₹2,099'/>
    <RecomendedPhonesChils01 url="https://res.cloudinary.com/dx0fji5gh/image/upload/v1661774238/realme/bw3_qengyu.webp"  name="Watch 2"  price="₹2,999"/>
    <RecomendedPhonesChils01 url="https://res.cloudinary.com/dx0fji5gh/image/upload/v1661774238/realme/bw4_lj7i16.webp"  name="Watch 2 Pro"  price="₹4,499"/>
</div>
    </div>
  )
}

export default BestWarables
