import React,{useReducer} from 'react'


const initialState={count:0};

function reducer(state,action){
  switch(action.perform){
    case "increment":return{count:state.count+1};
    case "decrememt":return{count:state.count-1};
    default :throw new Error();
  }
}



const App = () => {
  

const[state,dispatcher]=useReducer(reducer,initialState);



  return (
    <div>
      <center>
        <button onClick={()=>{dispatcher({perform:"increment"})}}>up</button>
        <h1>{state.count}</h1>
        <button onClick={()=>{dispatcher({perform:"decrememt"})}} >down</button>
      </center>
    </div>
  )
}

export default App
