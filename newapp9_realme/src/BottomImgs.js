import React from 'react'

const BottomImgs = () => {
  return (
    <div className='d-flex flex-row justify-content-center downspace'>
    <div>
      <div className='imgcard'>
        <img className='pb-2 pt-3 pl-3' src='https://res.cloudinary.com/dx0fji5gh/image/upload/v1661853776/realme/bm1_b9t1lu.svg' alt='nodata'/>
        <h6 className='pl-3'>Free Shipping</h6>
        <p className='p-3 '>Avaliable for Orders Above ₹500</p>
      </div>
    </div>

    <div>
      <div className='imgcard ml-2'>
        <img className='pb-2 pt-3 pl-3' src='https://res.cloudinary.com/dx0fji5gh/image/upload/v1661853777/realme/bm2_p2xrek.svg' alt='nodata'/>
        <h6 className='pl-3'>Cash on Delivery</h6>
        <p className='p-3'>Supports Payment On Delivery</p>
      </div>
    </div>
    <div>
      <div className='imgcard ml-2'>
        <img className='pb-2 pt-3 pl-3' src='https://res.cloudinary.com/dx0fji5gh/image/upload/v1661853777/realme/bm3_gjpnql.svg' alt='nodata'/>
        <h6 className='pl-3'>Secure Payment</h6>
        <p className='p-3'>Realme Store offers Various Payment Methodes</p>
      </div>
    </div>
    <div>
      <div className='imgcard ml-2'>
        <img className='pb-2 pt-3 pl-3' src='https://res.cloudinary.com/dx0fji5gh/image/upload/v1661853776/realme/bm4_giapzb.svg' alt='nodata'/>
        <h6 className='pl-3'>Warranty Policy</h6>
        <p className='p-3'>This Warenty Policy applicable only in India</p>
      </div>
    </div>
    </div>
  )
}

export default BottomImgs
