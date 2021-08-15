import React, { useEffect } from 'react'
import RNStopAppModule, { Counter } from 'react-native-stop-app'

const App = () => {
  useEffect(() => {
    console.log(RNStopAppModule)
  })

  return <Counter />
}

export default App
