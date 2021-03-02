import React from 'react'
import {shallow} from 'enzyme'
import {Conditional} from 'components'


describe('Conditional', () => {
    it('should be defined', () => {
        expect(Conditional).toBeDefined()
    })
    it('should render correctly', () => {
        const wrapper = shallow(
            <Conditional condition={true} />
        )
        expect(wrapper).toMatchSnapshot()
    })
    it('should render empty DOM element', () => {
        const wrapper = shallow(
            <Conditional condition={false} />
        )
        expect(wrapper).toEqual({})
    })
})