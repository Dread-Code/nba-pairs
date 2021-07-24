import React from 'react'
import { shallow } from 'enzyme'
import PairComponent from './PairComponent'
import { PlayerContext } from '../../Context/PlayersContext'

describe('PairComponent', () => {
  test('1)  should match sbnapshoot', () => {
    const wrapper = shallow(
      <PlayerContext.Provider>
        <PairComponent />
      </PlayerContext.Provider>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
