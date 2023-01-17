import React, { useContext } from "react";
import { store } from "./App";
const Child1 = () => {
  const [data, setData] = useContext(store);

  return (
    <div>
      <h1>Child1:{data.name}</h1>
      <button onClick={()=>{
        setData([{name:"sri"}])
      }}>setData</button>
    </div>
  );
};

export default Child1;
