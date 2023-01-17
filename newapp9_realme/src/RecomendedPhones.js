import React from 'react'
import './Orangehover.css'
import RecomendedPhonesChild from './RecomendedPhonesChild'
import RecomendedPhonesChils0 from './RecomendedPhonesChils0'

const RecomendedPhones = () => {
  return (
    <>
    <div className='d-flex flex-row flex-warp'>
    <img className='rimg effect ml-4 mb-2' src='https://res.cloudinary.com/dx0fji5gh/image/upload/v1661689803/realme/rp1_foue3b.webp' alt='noimg'/>
      <RecomendedPhonesChild  url="https://res.cloudinary.com/dx0fji5gh/image/upload/v1661689822/realme/rp2_dpv7sv.webp" discount='1500' name= 'Narzo 50' price='₹12,999'/>
    <RecomendedPhonesChils0 url="https://res.cloudinary.com/dx0fji5gh/image/upload/v1661689822/realme/rp4_ei6oqn.webp"  name="Narzo 50 5G"  price="₹15,999"/>
    <RecomendedPhonesChils0 url="https://res.cloudinary.com/dx0fji5gh/image/upload/v1661747770/realme/rp3_kvgjkw.webp"  name="Narzo 50 Pro 5G"  price="₹21,999"/>
</div>
<div className='d-flex flex-row flex-warp'>
    <RecomendedPhonesChild  url="https://res.cloudinary.com/dx0fji5gh/image/upload/v1661689822/realme/rp5_le6d45.webp" discount='2500' name= 'Realme 9 5G' price='₹15,999'/>
    <RecomendedPhonesChild  url="https://res.cloudinary.com/dx0fji5gh/image/upload/v1661689822/realme/rp6_rx0uw9.webp" discount='2000' name= 'Realme 9 Pro 5G' price='₹18,999'/>
    <RecomendedPhonesChild  url="https://res.cloudinary.com/dx0fji5gh/image/upload/v1661689821/realme/rp7_cfk7t4.webp" discount='2500' name= 'Realme 9 pro+ 5G' price='₹24,999'/>
    <RecomendedPhonesChils0 url="https://res.cloudinary.com/dx0fji5gh/image/upload/v1661689821/realme/rp8_ihsxeq.webp"  name="Narzo 50 5G"  price="₹15,999"/>
    <RecomendedPhonesChils0 url="https://res.cloudinary.com/dx0fji5gh/image/upload/v1661689822/realme/rp9_wiiw1y.webp"  name="Narzo 50 Pro 5G"  price="₹21,999"/>
  </div>
  </>
    )
}

export default RecomendedPhones
