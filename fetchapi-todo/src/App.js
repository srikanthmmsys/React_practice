import './App.css'
import React, { useCallback, useEffect, useState } from "react";

const App = () => {
  const [inputname, setInputname] = useState("");
  const [inputwork, setInputwork] = useState("");
  const [inputdays, setInputdays] = useState("");
  const[loadedtodo,setLoadedtodo]=useState([]);
  const[loading,setLoading]=useState("false")
  const[deleted,setDeleted]=useState(false);
  const onchangeHandeller = (e) => {
    setInputname(e.target.value);
  };

  const onchangeworkHandeller = (e) => {
    setInputwork(e.target.value);
  };

  const onchangedaysHandeller = (e) => {
    setInputdays(e.target.value);
  };
  const todo={
    name:inputname,work:inputwork,days:inputdays
  }
  const postdatahandelller=async()=>{
    const response=await fetch('https://fetchpractice-2d074-default-rtdb.firebaseio.com/todo.json',{
      method:"POST",
      body:JSON.stringify(todo),
      headers:{'content-type':'application/json'}
    })
const data=await response.json();
console.log(data)
setInputname("")
setInputdays("")
setInputwork("")

  }

  

 const getTodoHandeller=useCallback(async()=>{
  setLoading(true)
const getresponse=await fetch('https://fetchpractice-2d074-default-rtdb.firebaseio.com/todo.json')
const getdata=await getresponse.json();

const loadedtodo=[];
for (const key in getdata){
  loadedtodo.push({
    id:key,name:getdata[key].name,work:getdata[key].work,days:getdata[key].days
  })
}
setLoadedtodo(loadedtodo)
setLoading(false)
 },[])

 useEffect(()=>{getTodoHandeller();},[getTodoHandeller])
  






 const deletehandeller=async()=>{
  setDeleted(true)
  const response=await fetch('https://fetchpractice-2d074-default-rtdb.firebaseio.com/todo.json',{
    method:"DELETE"}
)
if(response.ok){
  console.log("deleted")
  setDeleted(false)
}
}

  return (
    <div>
      <center><h1>Work List</h1></center>
   <center>   <input type="text" value={inputname} placeholder="name" onChange={onchangeHandeller} />
      <input type="text" value={inputwork} placeholder="work" onChange={onchangeworkHandeller} />
      <input type="number" value={inputdays} placeholder="days" onChange={onchangedaysHandeller} />
      <button onClick={postdatahandelller}>ADD</button></center>
      <hr/>
      <center><button onClick={getTodoHandeller}>List</button></center>
      <hr/>
      <center>{!loading? loadedtodo.map((obj)=>{return <li className="list">
        <h1>{obj.name}</h1>
        <h1>{obj.work}</h1>
        <h1>{obj.days}</h1>
        <hr/>
      </li>}):<p>loading.....</p>}</center>
    <center><button onClick={deletehandeller}>Clear</button></center>
    <center>{deleted && <p>deleting.....</p>}</center>
    </div>
  );
};

export default App;
