import React from 'react'
import Componenta from './Components/Componenta'
import ErrorBoundary from './Components/ErrorBoundary'
const App = () => {
  return (
    <div>
      <ErrorBoundary>
      <Componenta/>
      </ErrorBoundary>
    </div>
  )
}

export default App
