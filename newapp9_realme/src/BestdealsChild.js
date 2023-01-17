import React from 'react'
import './Orangehover.css'
const BestdealsChild = (props) => {
  return (
    <div className='BestChildBack m-5 p-3'>
      <div className='d-flex flex-row justify-content-between p-2'>
        <h4>{props.head}</h4>
        <h6 className='text-secondary'>ViewMore -&gt;</h6>
      </div>
    <div className='d-flex flex-row justify-content-center p-3'>
      <div className='d-flex flex-column'>
        <img className='quick' src={`${props.url}`} alt='noimg'/>
        <p className='quickfont text-center'>{props.name}</p>
        <p>{props.text}</p>
        <p>{props.line}</p>
      </div>
      <div className='d-flex flex-column'>
        <img className='quick' src={`${props.url1}`} alt='noimg'/>
        <p className='quickfont text-center'>{props.name1}</p>
        <p className='text-center'>{props.text1}</p>
        <p>{props.line1}</p>
      </div>
      <div className='d-flex flex-column'>
        <img  className='quick'src={`${props.url2}`} alt='noimg'/>
        <p className='quickfont text-center'>{props.name2}</p>
        <p className='text-center'>{props.text2}</p>
        <p>{props.line2}</p>
      </div>
    </div>
    
    </div>
  )
}

export default BestdealsChild
