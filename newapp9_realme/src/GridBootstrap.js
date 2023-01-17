import React, { useState } from 'react'
import Orangehover from './Orangehover'

const GridBootstrap = () => {
  const [count,setCount]=useState(0);
  if (count>0){
    throw new Error("error occured")
  }
  return (
    
    <div className='container'>
      <div className='row'>
        <div className='col-2'>
            <h6 className='pb-2'>Recomended</h6>
            <Orangehover><p>realme C30</p></Orangehover>
            <Orangehover><p>realme C31</p></Orangehover>
            <Orangehover><p>realme C35</p></Orangehover>
            <Orangehover><p>realme narzo 50 Pro 5G</p></Orangehover>
            <Orangehover><p>realme narzo 50 Pro</p></Orangehover>
            <Orangehover><p>realme 9i</p></Orangehover>
            <Orangehover><p>realme 9 5G</p></Orangehover>
            <Orangehover><p>realme 9 Pro 5G</p></Orangehover>
            <Orangehover><p>realme GT NEO 3</p></Orangehover>
            <Orangehover><p>realme GT 2</p></Orangehover>
            <Orangehover><p>More phones</p></Orangehover>
        </div>
        <div className='col-2'>
            <h6 className='pb-2'>Support</h6>
            <Orangehover><p>FAQ</p></Orangehover>
            <Orangehover><p>User Guide</p></Orangehover>
            <Orangehover><p>Service Centers</p></Orangehover>
            <Orangehover><p>realme Coins</p></Orangehover>
            <Orangehover><p>E-waste Management</p></Orangehover>

      </div>
      <div className='col-2'>
            <h6 className='pb-2'>About realme</h6>
            <Orangehover><p>Our Brand</p></Orangehover>
            <Orangehover><p>Newsroom</p></Orangehover>
            <Orangehover><p>Retail Store</p></Orangehover>
            <Orangehover><p>Decleration</p></Orangehover>
      </div>
      <div className='col-2'>
            <h6 className='pb-2'>Contact realme</h6>
            <Orangehover><p>service@realme.com</p></Orangehover>
            <Orangehover><p>orders.in@realme.com</p></Orangehover>


      </div>
      <div className='col-3 ml-5 '>

      <div className='pl-4 pt-5'>
            <button className='chatbutton p-2' onClick={()=>{
              setCount(count+1);
             
              
            }} > CHAT SUPPORT</button>
           
            <p>9:00:21:00,mon-sun</p>
            <p>Including Hollidays</p>
            </div>
            <div>
            <img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" alt='facebook'/>
        
            <img src="https://img.icons8.com/ios-filled/50/000000/twitter-circled--v1.png"alt='twitter'/>
            <img src="https://img.icons8.com/sf-black-filled/64/000000/youtube-play.png" alt='toutube'/>
            <img src="https://img.icons8.com/ios-filled/50/000000/instagram-new--v1.png" alt='instagram'/>
            </div>
            
            
            </div>
    </div>
    
    </div>
    
  )
}

export default GridBootstrap
