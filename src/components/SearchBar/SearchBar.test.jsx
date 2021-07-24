import React from 'react'
import { shallow } from 'enzyme'
import SearchBar from './SearchBar'
import { PlayerContext } from '../../Context/PlayersContext'

describe('SearchBar', () => {
  test('should match to snapshoot', () => {
    const wrapper = shallow(
      <PlayerContext.Provider>
        <SearchBar />
      </PlayerContext.Provider>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
