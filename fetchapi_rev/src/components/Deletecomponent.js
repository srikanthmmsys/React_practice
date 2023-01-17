import React, { useState } from 'react'

const Deletecomponent =() => {
  const [deletestatus,setDeletestatus]=useState(false);
  const onclickhandeller=async()=> {
    setDeletestatus(true);
 const resp=  await fetch("https://fetchpractice-2d074-default-rtdb.firebaseio.com/todo.json",{method:"DELETE"})
 console.log(resp)
 setDeletestatus (false)
  }
 return (
    <div>
      <center>
        <button onClick={
          onclickhandeller}
        >DELETE</button>
        {deletestatus && <p>deleting....</p>}
      </center>
    </div>
  )
 
}

export default Deletecomponent
