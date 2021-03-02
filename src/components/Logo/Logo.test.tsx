import React from 'react'
import {shallow} from 'enzyme'
import {Logo} from 'components'

describe('Logo', () => {
    it('should be defined', () => {
        expect(Logo).toBeDefined()
    })
    it('should render correctly', () => {
        const wrapper = shallow(
            <Logo />
        )
        expect(wrapper).toMatchSnapshot()
    })
})