import { shallow } from 'enzyme'
import React from 'react'
import CardPairs from './CardPairs'

const players = [
  {
    header: 'Deron Williams',
    description: '75'
  },
  {
    header: 'Thabo Sefolosha',
    description: '79'
  }
]

describe('CardPairs', () => {
  test('1) Should match snapshoot', () => {
    const wrapper = shallow(<CardPairs playersPair={players} />)
    expect(wrapper).toMatchSnapshot()
  })
  test('2) should find a Deron Williams in the first element', () => {
    const wrapper = shallow(<CardPairs playersPair={players} />)
    expect(wrapper.find('CardContent').getElements()[0].props.header).toBe('Deron Williams')
    expect(wrapper.find('CardContent').getElements()[1].props.description).toBe('75')
  })
})
