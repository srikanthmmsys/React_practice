import React from 'react'
import BestdealsChild from './BestdealsChild'

const Bestdeals = () => {
  
// let a=<p className='text-danger text-center'>₹8,399   <del className='text-secondary'>₹8,999</del></p>
// let b=<p className='text-danger text-center'>₹10,499   <del className='text-secondary'>₹11,499</del></p>
// let c=<p className='text-danger text-center'>₹12,999   <del className='text-secondary'>₹13,999</del></p>
// let d=<p className='text-danger text-center'>₹9,999   <del className='text-secondary'>₹10,999</del></p>

// let e=<p className='text-danger'>₹1000 off on prepaid</p>
// let f=<p className='text-danger'>₹2500 0ff on prepaid</p>



    return (
    <div className='d-flex flex-row justify-content-center'>
      <BestdealsChild head="Super Pricing Deals" url="https://res.cloudinary.com/dx0fji5gh/image/upload/v1661520796/realme/bd1_prlgxk.webp" url1="https://res.cloudinary.com/dx0fji5gh/image/upload/v1661520802/realme/bd2_c9o1xt.webp" url2="https://res.cloudinary.com/dx0fji5gh/image/upload/v1661520814/realme/bd3_bg71ik.webp" name="Realme narzo 5i" name1="Realme narzo 5A" name2="realme Pad" text={<p className='text-danger text-center'>₹8,399   <del className='text-secondary'>₹8,999</del></p>} text1={<p className='text-danger text-center'>₹10,499   <del className='text-secondary'>₹11,499</del></p>}text2={<p className='text-danger text-center'>₹12,999   <del className='text-secondary'>₹13,999</del></p>}/>
      <BestdealsChild head="Super Online Offers" url="https://res.cloudinary.com/dx0fji5gh/image/upload/v1661520814/realme/bd4_bgomg1.webp" url1="https://res.cloudinary.com/dx0fji5gh/image/upload/v1661520815/realme/bd5_qdpgob.webp" url2="https://res.cloudinary.com/dx0fji5gh/image/upload/v1661520815/realme/bd6_ewhr1z.webp" name="realme Pad mini" name1="Realme 9" name2="Realme 9 5G" text={<p className='text-danger text-center'>₹9,999   <del className='text-secondary'>₹10,999</del></p>} text1="₹16,999"text2="₹15,999" line1={<p className='text-danger'>₹1000 off on prepaid</p>} line2={<p className='text-danger'>₹2500 0ff on prepaid</p>}/>
    </div>
  )
}

export default Bestdeals
