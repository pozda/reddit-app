import React from 'react'
import {shallow} from 'enzyme'
import Button from './index'

const text = 'string'
const mockFn = jest.fn()

describe('Button', () => {
    it('should be defined', () => {
        expect(Button).toBeDefined()
    })
    it('should render correctly', () => {
        const wrapper = shallow(
            <Button text={text} onClick={mockFn} />
        )
        expect(wrapper).toMatchSnapshot()
    })
    it('should trigger the function on click', () => {
        const wrapper = shallow(
            <Button text={text} onClick={mockFn} />
        )
        wrapper.simulate('click')
        expect(mockFn).toHaveBeenCalledTimes(1)
    })
})