import { useContext, useState, useEffect } from 'react'
import { PlayerContext } from '../../Context/PlayersContext'
import getPlayers from '../../services/getPlayers'
import searchPairs from '../../utils/searchPairs/searchPairs'

const useSearchPairs = () => {
  const [players, setPlayer] = useState([])

  const { playerPairs, setPlayerPairs } = useContext(PlayerContext)

  useEffect(async () => {
    const { data } = await getPlayers()
    setPlayer(data.values)
  }, [playerPairs])

  const searh = search => {
    const number = parseInt(search, 10)
    if (typeof number === 'number' && !Number.isNaN(number)) {
      const result = searchPairs(number, players)
      setPlayerPairs(result)
    }
  }

  return {
    searh
  }
}

export default useSearchPairs
