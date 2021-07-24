import React, { useState } from 'react'
import PairComponent from './components/PairComponent'
import Header from './components/Header'
import { PlayerContext } from './Context/PlayersContext'

const App = () => {
  const [playerPairs, setPlayerPairs] = useState()
  return (
    <PlayerContext.Provider value={{ playerPairs, setPlayerPairs }}>
      <Header />
      <PairComponent />
    </PlayerContext.Provider>
  )
}

export default App
