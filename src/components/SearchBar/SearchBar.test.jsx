import React from 'react'
import { shallow } from 'enzyme'
import SearchBar from './SearchBar'

describe('SearchBar', () => {
  test('should match to snapshoot', () => {
    const wrapper = shallow(<SearchBar />)
    expect(wrapper).toMatchSnapshot()
  })
})
