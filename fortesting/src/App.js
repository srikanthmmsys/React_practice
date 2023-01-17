import React from 'react'
import useInccounter  from './custom-hooks/counter-Hook'
const App = () => {
  let data=useInccounter();
  return (
    <div>
    {data}
    </div>
  )
}

export default App
