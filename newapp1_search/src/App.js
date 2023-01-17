import React,{useState} from 'react'


const App = () => {

  let a=['qwe','asd','fgh','uie','zxc','ghi',"wes","wea","aaa","aas","adc","abn"];
  const[data,setData]=useState('');
  const changeHandeller=(e)=>{
    setData(e.target.value);
  }

let b=a.filter((v)=>{ return v.toUpperCase().includes(data.toUpperCase())})

// if (b.length===0){
//   b[0]="Not Found"
// }
  let c=""
  if (b.length===0){
      c="notfound"
  }
  return (
    
    <div>
      <input type='text' onChange={changeHandeller} value={data}></input>
     
    <ol>
      {
      b.map((v)=>{return <li>{v}</li>})}
    </ol>
    {c}
    
    </div>
  )
}

export default App;
