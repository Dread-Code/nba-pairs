import getPairs from './getPairs'

describe('getPairs', () => {
  const mockPlayers = [
    { first_name: 'Alex', h_in: '77', h_meters: '1.96', last_name: 'Acker' },
    { first_name: 'Hassan', h_in: '76', h_meters: '1.93', last_name: 'Adams' },
    { first_name: 'Arron', h_in: '77', h_meters: '1.96', last_name: 'Afflalo' },
    { first_name: 'Maurice', h_in: '77', h_meters: '1.96', last_name: 'Ager' }
  ]

  test('1) should return two players with 153', () => {
    const head = [mockPlayers[1], mockPlayers[0]]
    const queue = [mockPlayers[2], mockPlayers[3]]
    const result = getPairs(153, mockPlayers)

    expect(result.pair.length).toEqual(2)
    expect(result.pair).toEqual(head)
    expect(result.array.length).toEqual(2)
    expect(result.array).toEqual(queue)
  })

  test('2) should return empty array passing repetitive registers ', () => {
    const mockRepetitive = [
      { first_name: 'Alex', h_in: '77', h_meters: '1.96', last_name: 'Acker' },
      { first_name: 'Alex', h_in: '77', h_meters: '1.96', last_name: 'Acker' },
      { first_name: 'Alex', h_in: '77', h_meters: '1.96', last_name: 'Acker' },
      { first_name: 'Alex', h_in: '77', h_meters: '1.96', last_name: 'Acker' }
    ]

    const result = getPairs(154, mockRepetitive)
    expect(result.pair.length).toEqual(0)
    expect(result.array.length).toEqual(2)
  })

  test('3) should return empty passing a sum that not exist ', () => {
    const result = getPairs(169, mockPlayers)
    expect(result.pair.length).toEqual(0)
    expect(result.array.length).toEqual(0)
  })
})
