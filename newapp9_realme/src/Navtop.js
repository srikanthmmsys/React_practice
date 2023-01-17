import React from 'react'
import Orangehover from './Orangehover'
const Navtop = () => {

  return (
    <>
    <div className='d-flex justify-content-between'>
    <div className='flexl'>
     <Orangehover name="Realmew"/>
     <p className='line'>|</p>
     <Orangehover name="App"/>
     <p className='line'>|</p>
     <Orangehover name="Orders"/>
     <p className='line'>|</p>
     <Orangehover name="Community"/>
     <p className='line'>|</p>
     <Orangehover name="support"/>
     <p className='line'>|</p>
     <Orangehover name="UI 3.0"/>
    </div>
    <div className='flexr'>
    <Orangehover name="Login"/>
     <p className='line'>|</p>
     <Orangehover name="My Order"/>
     <p className='line'>|</p>
     <Orangehover name="Cart"/>


    </div>
    </div>
    </>
  )
}

export default Navtop
