import React from 'react'
import './Orangehover.css'
const BestSellerPhones = () => {
  return (
    <div className='container'>
        <div className='row-12 d-flex'>
    
    <div className='col-6'>
        <div className='pl-3 pb-3 bestsellingimg d-flex flex-column justify-content-end text-center effect border1'>
        <p className='bg-danger discount'>Upto ₹1500 Bank offer</p>
        <h3 className='text-white'>Realme 9I 5G</h3>
        <h6 className='text-secondary'>Flat ₹1500/- instant discount* with</h6>
        <h6 className='text-secondary'>ICICI BANK Easy EMI</h6>
        <h6 className='text-danger'><span className='text-white'>from</span>₹14,999</h6>
        </div>
      
    </div>
    <div className='col-6'>
    <div className='pb-4'>
        <div className='pl-3 pb-3 bestsellingimg1 d-flex flex-column justify-content-end text-center effect border1'>
        <p className='bg-danger discount'>₹500 prepaid off+Bank offer</p>
        <h3 className='text-white'>Realme C31</h3>
        <h6 className='text-secondary'>Naya Jamina Ka Entertainment</h6>
    
        <h6 className='text-danger'><span className='text-white'>from</span>₹9,299</h6>
        </div>
      
    </div>
    <div>
        <div className='pl-3 pb-3 bestsellingimg2 d-flex flex-column justify-content-end text-center effect border1'>
        <p className='bg-danger discount1'>₹2000 prepaid off+Bank offer</p>
        <h3 className='text-white'>Realme 9I</h3>
        <h6 className='text-white'>Next-Level Power</h6>
        <h6 className='text-danger'><span className='text-white'>from</span>₹13,499</h6>
        </div>
      
    </div>
    </div>
    </div>

    </div>
  )
}

export default BestSellerPhones
