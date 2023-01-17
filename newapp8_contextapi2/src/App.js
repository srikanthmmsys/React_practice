import React,{ createContext,useState} from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

export const store=createContext();

const App = () => {
  const [data,setData]=useState(
    {name:"srikanth",no:1234}
  );



  return (
    
    <div>
      <store.Provider  value={[data,setData]}>
     <center>
      <Child1/>
      <Child2/>
      </center>
      </store.Provider>
    </div>
    
  )
}

export default App
