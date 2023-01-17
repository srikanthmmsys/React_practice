import React from 'react'
import { useNavigate, Route, Routes} from "react-router-dom";
import Componenta from './components/Componenta'
import Componentb from './components/Componentb'
import Componentc from './components/Componentc'
import Home from './Home'

const App = () => {
  const Navigate=useNavigate();
  return (
    <div>
    
      <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/componenta' element={<Componenta/>}/>
      <Route path='/componentb/:name' element={<Componentb/>}/>
      <Route path='/componentc' element={<Componentc/>}/>
      <Route path='/comp' element={<Navigate to="/" replace/>}  />   {/* navigate to home page */}
      <Route path='*' element={<center><p>...page not found...</p>
      <button onClick={()=>
     Navigate("/", {replace:true}) }>back to home</button>
    </center>}/> {/* Falllback ui */}
      
      </Routes>
      
    </div>
  )
}

export default App
