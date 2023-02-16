import React from 'react'
import useInccounter  from './custom-hooks/counter-Hook'
const App = () => {
  let data=useInccounter();
  return (
    <div className='center-align'>
    <h1>{data}</h1>
    </div>
  )
}

export default App
