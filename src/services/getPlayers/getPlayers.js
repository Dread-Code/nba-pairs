import axios from 'axios'
import { NBA_PLAYER_URI } from '../UriConstants/UriConstants'

const getPlayers = async () => {
  const result = await axios.get(NBA_PLAYER_URI)
  return result
}

export default getPlayers
