import React from 'react'

import Fields from './Fields'
import ModeSwitcher from './ModeSwitcher'
import Results from './Results'

function App() {
  return (
    <div className="App">
      <ModeSwitcher />
      <Fields />
      <Results />
    </div>
  )
}

export default App
