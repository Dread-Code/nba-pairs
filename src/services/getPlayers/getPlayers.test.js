import axios from 'axios'
import { NBA_PLAYER_URI } from '../UriConstants/UriConstants'
import getPlayers from './getPlayers'

jest.mock('axios')

describe('getPlayers service', () => {
  test('1) fetches successfully data from an API', async () => {
    const data = {
      values: [
        { first_name: 'Alex', h_in: '77', h_meters: '1.96', last_name: 'Acker' },
        { first_name: 'Hassan', h_in: '76', h_meters: '1.93', last_name: 'Adams' },
        { first_name: 'Arron', h_in: '77', h_meters: '1.96', last_name: 'Afflalo' },
        { first_name: 'Maurice', h_in: '77', h_meters: '1.96', last_name: 'Ager' },
        { first_name: 'Alexis', h_in: '84', h_meters: '2.13', last_name: 'Ajinca' },
        { first_name: 'LaMarcus', h_in: '83', h_meters: '2.11', last_name: 'Aldridge' },
        { first_name: 'Joe', h_in: '80', h_meters: '2.03', last_name: 'Alexander' },
        { first_name: 'Malik', h_in: '82', h_meters: '2.08', last_name: 'Allen' },
        { first_name: 'Ray', h_in: '77', h_meters: '1.96', last_name: 'Allen' }
      ]
    }
    axios.get.mockImplementationOnce(() => Promise.resolve(data))
    await expect(getPlayers()).resolves.toEqual(data)
    expect(axios.get).toHaveBeenCalledWith(NBA_PLAYER_URI)
  })

  test('2) should ', async () => {
    const errorMessage = 'Network Error'
    axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)))
    await expect(getPlayers('react')).rejects.toThrow(errorMessage)
  })
})
