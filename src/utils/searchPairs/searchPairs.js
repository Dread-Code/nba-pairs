import getPairs from '../getPairs/getPairs'

const searchPairs = (number, players) => {
  const finalArray = []
  for (let i = 0; i < players.length; i++) {
    const { pair, array } = getPairs(number, players)
    if (pair.length !== 0) {
      finalArray.push(pair)
      players = array
    }
  }
  return finalArray
}

export default searchPairs
