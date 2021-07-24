import React, { useState } from 'react'
import PairComponent from './components/PairComponent'
import SearchBar from './components/SearchBar'
import { PlayerContext } from './Context/PlayersContext'

const App = () => {
  const [playerPairs, setPlayerPairs] = useState()
  return (
    <PlayerContext.Provider value={{ playerPairs, setPlayerPairs }}>
      <SearchBar />
      <PairComponent />
    </PlayerContext.Provider>
  )
}

export default App
