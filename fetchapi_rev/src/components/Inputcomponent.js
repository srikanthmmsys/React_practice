import React,{useState} from 'react'

const Inputcomponent = (props) => {
    const [inputdata,setData]=useState("");
    const [poststatus,setPoststatus]=useState(false)
    const [validInput,setValidInput]=useState(true);
const onchangehandeller=(e)=>{
  if(e.keyCode===13){
    onclickhandeller();
  }
setData(e.target.value);
}
    const onclickhandeller=async()=>{
     if (inputdata!==""){
      setValidInput(true)
     
      setPoststatus(true)
    const options={
        method:"POST",body:JSON.stringify(inputdata),headers:{
            "content-type":"application/json"
        }
    }
const response=await fetch("https://fetchpractice-2d074-default-rtdb.firebaseio.com//todo.json",options  )
console.log(response,"post")
setData("")
setPoststatus(false)
}

else{
setValidInput(false)
setTimeout(()=>{
  setValidInput(true);
  console.log("hiii")
},2000)
}
}

  return (
    <div>
        <center>
      <input type="text" value={inputdata} onChange={onchangehandeller} onKeyDown={(e)=>{
        if(e.key==="Enter"){
          onclickhandeller();
        }
        console.log(e.key)
      }}/>
      <button onClick={onclickhandeller}>ADD</button>
      {poststatus&&<p>DataAdding....</p>}
      {!validInput&&<p>.....Enter valid input....</p>}
      </center>
    </div>
  )
}

export default Inputcomponent
