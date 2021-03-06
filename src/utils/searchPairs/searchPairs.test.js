import searchPairs from './searchPairs'

describe('SearchPairs', () => {
  const mockPlayers = [
    { first_name: 'Alex', h_in: '77', h_meters: '1.96', last_name: 'Acker' },
    { first_name: 'Hassan', h_in: '76', h_meters: '1.93', last_name: 'Adams' },
    { first_name: 'Arron', h_in: '77', h_meters: '1.96', last_name: 'Afflalo' },
    { first_name: 'Maurice', h_in: '77', h_meters: '1.96', last_name: 'Ager' },
    { first_name: 'Alexis', h_in: '84', h_meters: '2.13', last_name: 'Ajinca' },
    { first_name: 'LaMarcus', h_in: '83', h_meters: '2.11', last_name: 'Aldridge' },
    { first_name: 'Joe', h_in: '80', h_meters: '2.03', last_name: 'Alexander' },
    { first_name: 'Malik', h_in: '82', h_meters: '2.08', last_name: 'Allen' },
    { first_name: 'Ray', h_in: '77', h_meters: '1.96', last_name: 'Allen' },
    { first_name: 'Tony', h_in: '76', h_meters: '1.93', last_name: 'Allen' },
    { first_name: 'Morris', h_in: '78', h_meters: '1.98', last_name: 'Almond' },
    { first_name: 'Rafer', h_in: '74', h_meters: '1.88', last_name: 'Alston' },
    { first_name: 'Louis', h_in: '81', h_meters: '2.06', last_name: 'Amundson' },
    { first_name: 'Chris', h_in: '82', h_meters: '2.08', last_name: 'Andersen' }
  ]
  test('1) should return and empety array if the ', () => {
    const result = searchPairs(180, [...mockPlayers])
    expect(result).toEqual([])
  })

  test('2) should return 4 elements passign 154', () => {
    const result = searchPairs(154, [...mockPlayers])
    expect(result.length).toEqual(4)
  })
})
