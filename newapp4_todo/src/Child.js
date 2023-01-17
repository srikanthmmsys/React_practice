import React, { useState } from "react";
//import App from './App'
const Child = (props) => {
  const [username, setUsername] = useState("");

  const changeHandeller = (e) => {
    setUsername(e.target.value);
  };
  const submitHandeller = (e) => {
    e.preventDefault();
    props.setUsername(username);
    //console.log(username)
    setUsername("");
  };
  const blurhandeller=(e)=>{
e.target.style.color="red"
  }

  return (
    <div>
      
      <form  onSubmit={submitHandeller}>
        <h1>ToDo</h1>
        <input type="text" value={username} onChange={changeHandeller} onKeyDown={(e)=>{
          console.log('pressed key is',e.key)}} onBlur={blurhandeller}
          
          
          />
        <button type="submit">add</button>
      </form>
      
    </div>
  );
};

export default Child;
