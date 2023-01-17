import React from 'react'
import Deletecomponent from './components/Deletecomponent'
import Getcomponent from './components/Getcomponent'
import Inputcomponent from './components/Inputcomponent'

const App = () => {
  return (
    <div>
      <center>
      <h1>To do</h1>
      </center>
      <hr></hr>
      <Inputcomponent/>
      <hr></hr>
      <Getcomponent/>
      <hr></hr>
      <Deletecomponent/>
    </div>
  )
}

export default App
