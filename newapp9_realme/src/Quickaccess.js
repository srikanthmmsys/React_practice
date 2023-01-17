import React from 'react'
import QuickaccessChild from './QuickaccessChild'

const Quickaccess = () => {
const arr=["https://res.cloudinary.com/dx0fji5gh/image/upload/v1661516393/realme/ac1_py2fzq.png","https://res.cloudinary.com/dx0fji5gh/image/upload/v1661516409/realme/ac2_qfwxmi.png","https://res.cloudinary.com/dx0fji5gh/image/upload/v1661516411/realme/ac3_gjfkaq.png","https://res.cloudinary.com/dx0fji5gh/image/upload/v1661516412/realme/ac4_jbwyam.png","https://res.cloudinary.com/dx0fji5gh/image/upload/v1661516416/realme/ac5_wyjtpv.png","https://res.cloudinary.com/dx0fji5gh/image/upload/v1661516419/realme/ac6_wyscqs.png","https://res.cloudinary.com/dx0fji5gh/image/upload/v1661516421/realme/ac7_a06lvg.png"]
const arr1=["828 Fan Festival","Gift","Flash Sale","Daily Draw","Phone  <10000","Phone <15000","Phone >15000"]

  return (
    <div className='d-flex flex-row justify-content-between'>
      <QuickaccessChild url={arr[0]} name={arr1[0]}/>
      <QuickaccessChild url={arr[1]} name={arr1[1]}/>
      <QuickaccessChild url={arr[2]} name={arr1[2]}/>
      <QuickaccessChild url={arr[3]} name={arr1[3]}/>
      <QuickaccessChild url={arr[4]} name={arr1[4]}/>
      <QuickaccessChild url={arr[5]} name={arr1[5]}/>
      <QuickaccessChild url={arr[6]} name={arr1[6]}/>
    </div>
  )
}

export default Quickaccess
