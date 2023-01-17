import './App.css';
import React, { createContext, useState } from 'react'
import Componenta from './components/Componenta';
import Componentb from './components/Componentb';
import Componentc from './components/Componentc';

export const context=createContext();

const App = () => {
  const[inputdata,setInputdata]=useState("");
  const onchangehandeller=(e)=>{
    setInputdata(e.target.value)
  }
  return (
    <div><center>
      <Componentc/>
      <hr></hr>
      <h1>App</h1>
      <input type="text" value={inputdata} onChange={onchangehandeller}/>
      <context.Provider value={[inputdata,setInputdata]}>
     <div>{inputdata}</div> 
      <hr></hr>
      <Componenta/>
      
      <hr></hr>
      <Componentb/>
      </context.Provider>
      <hr></hr>
      
      </center>
    </div>
  )
}

export default App
