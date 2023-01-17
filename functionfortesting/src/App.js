import React,{useState} from 'react'
import './App.css'
const App = () => {
  
  const [prev,setPrev]=useState(true)
  const [next,setNext]=useState(true)
  const [reset,setReset]=useState(true)
  const [data,setData]=useState(0)
  let arr=["hii","how are you","please try","build your own","practice","results","reach your goal"];
const ResetHandeller=()=>{
  setReset(false);
  setNext(true)
setPrev(true)
setData(0);
console.log(reset)

}
const prevHandeller=()=>{
if(data>0){setData(data-1);
setPrev(false)
setReset(true)
setNext(true)
}
else{
  setData(arr.length-1)
}}
const nextHandeller=()=>{
if (data<arr.length-1){setData(data+1);
setNext(false)
setPrev(true)
setReset(true)
}
else{setData(0)}}


  return (
    <div><center>
    <div>
      <button  className={reset?'accessbutton':''} onClick={ResetHandeller}>reset</button>
      <button className={prev?'accessbutton ':''} onClick={prevHandeller}>prev</button>
      <button className={next?'accessbutton':''}  onClick={nextHandeller}>next</button>
   
    </div>
    <div> {arr[data]}</div>
    
    </center></div>
  )
}

export default App



