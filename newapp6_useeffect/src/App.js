import React,{useEffect,useState} from 'react'



const App = () => {

  const [name,setName]=useState('');


  const onChangeHandeller=(e)=>{
    setName(e.target.value)
  }
  
  
  const useEffectFunction=()=>{
   console.log(name)
  }
  
  useEffect(useEffectFunction,[name])

  return (
    <div>
      <input type="text" value={name} onChange={onChangeHandeller} />
    </div>
  )
}

export default App
