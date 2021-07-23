import { shallow } from 'enzyme'
import React from 'react'
import CardPairs from './CardPairs'

const players = [
  {
    first_name: 'Mike',
    h_in: '70',
    h_meters: '1.78',
    last_name: 'Wilks'
  },
  {
    first_name: 'Brevin',
    h_in: '70',
    h_meters: '1.78',
    last_name: 'Knight'
  }
]

describe('CardPairs', () => {
  test('1) Should match snapshoot', () => {
    const wrapper = shallow(<CardPairs playersPair={players} />)
    expect(wrapper).toMatchSnapshot()
  })
  test('2) should find a Deron Williams in the first element', () => {
    const wrapper = shallow(<CardPairs playersPair={players} />)
    expect(wrapper.find('CardContent').getElements()[0].props.header).toBe('Mike Wilks')
    expect(wrapper.find('CardContent').getElements()[1].props.description).toBe('70')
  })
})
