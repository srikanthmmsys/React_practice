import React, { useState } from 'react'

const Child = (props) => {
    const [data,setData]=useState(1);

const onClickHandeller=(e)=>{
    setData(data+1);
    props.getData(data);
}

  return (
    <div>
      <h1>Child</h1>
      <button onClick={onClickHandeller}>Button</button>
    </div>
  )
}

export default Child
