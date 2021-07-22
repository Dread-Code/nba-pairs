import React from 'react'
import { shallow } from 'enzyme'
import PairComponent from './PairComponent';

describe('PairComponent', () => {
    test('1)  should match sbnapshoot', () => {
        const wrapper = shallow(<PairComponent/>)
        expect(wrapper).toMatchSnapshot()
    });
});