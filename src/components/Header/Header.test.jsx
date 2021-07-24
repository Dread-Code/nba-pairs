import React from 'react'
import { shallow } from 'enzyme'
import HeaderPair from './Header'
import { PlayerContext } from '../../Context/PlayersContext'

describe('Header', () => {
  test('should match to snapshoot', () => {
    const wrapper = shallow(
      <PlayerContext.Provider>
        <HeaderPair />
      </PlayerContext.Provider>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
