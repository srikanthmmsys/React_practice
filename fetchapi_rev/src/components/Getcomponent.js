import React, { useCallback, useEffect, useState } from "react";

const Getcomponent = () => {
  const [receivedgetdata, setReceivedgetdata] = useState([]);
  const [getstatus,setGetstatus]=useState(false)  

 
  const gethandeller = useCallback(async () => {
    setGetstatus(true)
    const response = await fetch(
      "https://fetchpractice-2d074-default-rtdb.firebaseio.com//todo.json"
    );
    const receiveddata = await response.json();
    const a = [];

    for (let y in receiveddata) {
      a.push(receiveddata[y]);
    }
    setReceivedgetdata(a);
    setGetstatus(false)
  },[]);
useEffect(()=>{gethandeller()},[gethandeller])

  return (
    <div>
      <center>
        <button onClick={gethandeller}>Get</button>
        {!getstatus && receivedgetdata.map((v,k) => (
          <h1 key={k}>{v}</h1>
        ))}
        {getstatus && <p>loading......</p>}
      </center>
    </div>
  );
};

export default Getcomponent;
