import React,{useEffect, useState} from 'react'

const useInccounter=() => {

    const [count,setCount]=useState(0);

useEffect(()=>{
    const interwal=setInterval(()=>{
        setCount((prev)=>prev+1);
    },1000);
    return ()=> clearInterval(interwal);
}

,[]
);

  return <center><div>{count}</div></center>;
  
}

export default useInccounter;
