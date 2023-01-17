import React from "react";
import { Route, Routes} from "react-router-dom";
import ComponentA from "./Componennts/ComponentA";
import ComponentB from "./Componennts/ComponentB";
import ComponentsC from "./Componennts/ComponentsC";
import Navbar from "./Componennts/Navbar";
import './App.css'
const App = () => {
  return ( 
    <div className="center">
     
        <Routes>
          <Route path="/" exact element={<ComponentA/>} />
          <Route path="/comp1/*" exact element={<ComponentB/>} />
          <Route path="/comp2" exact element={<ComponentsC/>} />
          <Route path="/comp2/:name" exact element={<ComponentA/>} />
        </Routes>
        <Navbar/>
      
      
    </div>
    
  );
};

export default App;
