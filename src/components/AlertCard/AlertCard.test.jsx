import React from 'react'
import { shallow } from 'enzyme'
import AlertCard from './AlertCard'

describe('AlertCard', () => {
  const errorText = 'No matches found'
  const wrapper = shallow(<AlertCard error={errorText} />)
  test('1) should match snapshoot ', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('2) should return the text in CardContent description', () => {
    expect(expect(wrapper.find('CardContent').getElements()[1].props.description).toBe(errorText))
  })
})
