import React from 'react'
// import RecomendedPhonesChild from './RecomendedPhonesChild'
import RecomendedPhonesChils01 from './RecomendedPhonesChils01'
const Hottest = () => {
  return (
    <>
    <div className='d-flex flex-row flex-warp'>
    <img className='rimg1 effect ml-4 mb-2' src='https://res.cloudinary.com/dx0fji5gh/image/upload/v1661771786/realme/ha1_rt6mg3.webp' alt='noimg'/>
    <RecomendedPhonesChils01  url="https://res.cloudinary.com/dx0fji5gh/image/upload/v1661771786/realme/ha2_ccsyvj.webp"  name= 'Buds Wireless 2' price='₹2,299'/>
    <RecomendedPhonesChils01 url="https://res.cloudinary.com/dx0fji5gh/image/upload/v1661771785/realme/ha3_vy033u.webp"  name="Buds Q2"  price="₹1,949"/>
    <RecomendedPhonesChils01 url="https://res.cloudinary.com/dx0fji5gh/image/upload/v1661771785/realme/ha4_v8z3av.webp"  name="Buds Wireless..."  price="₹1,299"/>
</div>
<div className='d-flex flex-row flex-warp'>
    <RecomendedPhonesChils01  url="https://res.cloudinary.com/dx0fji5gh/image/upload/v1661771786/realme/ha5_jurra9.webp" name= 'Buds 2 Neo' price='₹1,299'/>
    <RecomendedPhonesChils01  url="https://res.cloudinary.com/dx0fji5gh/image/upload/v1661771786/realme/ha6_ovux6z.webp"  name= 'Buds Wireless' price='₹2,999'/>
    <RecomendedPhonesChils01  url="https://res.cloudinary.com/dx0fji5gh/image/upload/v1661771786/realme/ha7_ftq0ge.webp"  name= 'pocket bluetoot..' price='₹599'/>
    <RecomendedPhonesChils01 url="https://res.cloudinary.com/dx0fji5gh/image/upload/v1661771786/realme/ha8_cple7m.webp"  name="Cobble Bluetoot.."  price="₹1,199"/>
    <RecomendedPhonesChils01 url="https://res.cloudinary.com/dx0fji5gh/image/upload/v1661772478/realme/ha9_wpjljl.webp"  name="Brick Bluetooth.."  price="₹2,999"/>
  </div>
  </>
  )
}

export default Hottest
