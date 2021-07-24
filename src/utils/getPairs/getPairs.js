const getPairs = (number, players) => {
  const tempArray = [] // With this array we return the pair
  const tempArray2 = [] // The index of the pairs found, we save for delete in the players array

  for (let i = 0; i < players.length; i++) {
    const playerInches = parseInt(players[i].h_in, 10)
    // Thes remainder
    const rem = number - playerInches
    // We save in their respective tempaArray depending of the rest
    for (let index = 0; index < players.length; index++) {
      // break if not match
      if (tempArray.length === 1) {
        break
      }
      // we save the pair of the first element found only in the case when the name is different
      if (
        parseInt(players[index].h_in, 10) === rem &&
        players[i].first_name !== players[index].first_name
      ) {
        tempArray.push(players[index])
        tempArray2.push(index)
      }
    }
    // we save the pair
    if (tempArray.length === 1) {
      tempArray.push(players[i])
      tempArray2.push(i)
      break
    }
  }
  // delete the position from the mainly array
  players.splice(tempArray2[0], 1)
  players.splice(tempArray2[1], 1)
  return {
    pair: tempArray,
    array: players
  }
}

export default getPairs
