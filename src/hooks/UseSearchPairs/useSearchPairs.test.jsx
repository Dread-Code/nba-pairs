import React from 'react'
import { cleanup } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import { PlayerContext } from '../../Context/PlayersContext'
import useSearchPairs from './useSearchPairs'

afterEach(cleanup)
const initialState = {
  playerPairs: [],
  setPlayerPairs: jest.fn()
}

describe('useSearchPairs', () => {
  test('should return default values', () => {
    const wrapper = ({ children }) => (
      <PlayerContext.Provider value={initialState}>{children}</PlayerContext.Provider>
    )
    const { result } = renderHook(() => useSearchPairs(), { wrapper })
    const { searh } = result.current
    expect(typeof searh).toBe('function')
  })
})
