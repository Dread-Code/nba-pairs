import React from 'react'
import { shallow } from 'enzyme'
import CardContainer from './CardContainer'

const playersMock = [
  [
    {
      first_name: 'Nate',
      h_in: '69',
      h_meters: '1.75',
      last_name: 'Robinson'
    },
    {
      first_name: 'Chucky',
      h_in: '71',
      h_meters: '1.8',
      last_name: 'Atkins'
    }
  ],
  [
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
]

describe('CardContainer', () => {
  test('1) should match snapshoot', () => {
    const wrapper = shallow(<CardContainer players={playersMock} />)
    expect(wrapper).toMatchSnapshot()
  })
  test('2) should return 2 elements ', () => {
    const wrapper = shallow(<CardContainer players={playersMock} />)
    expect(wrapper.find('GridColumn').getElements().length).toBe(playersMock.length)
  })
  test('3) should return card alert if recive a empty array', () => {
    const wrapper = shallow(<CardContainer players={[]} />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('GridColumn').getElements().length).toBe(0)
    expect(wrapper.find('AlertCard').getElements().length).toBe(1)
  })
})
