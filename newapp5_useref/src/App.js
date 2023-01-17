import React ,{useRef,useState} from 'react'

const App = () => {
  const inputRef=useRef();
  const [value,setValue]=useState("")
  const changeHandeller=()=>{
setValue(inputRef.current.value)
  }
  return (
    <div>
      <input type="text" onChange={changeHandeller} ref={inputRef} />
      <h1>{value}</h1>
    </div>
  )
}

export default App
