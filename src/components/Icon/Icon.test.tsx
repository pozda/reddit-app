import React from 'react'
import {shallow} from 'enzyme'
import {Icon} from 'components'

const color = '#FF0000'

describe('Icon', () => {
    it('should be defined', () => {
        expect(Icon).toBeDefined()
    })
    it('should render correctly with mandatory prop', () => {
        const wrapper = shallow(
            <Icon d={Icon.res.SEARCH} />
        )
        expect(wrapper).toMatchSnapshot()
    })
    it('should render correctly with optional props', () => {
        const wrapper = shallow(
            <Icon d={Icon.res.SEARCH} color={color} width={512} height={512}  />
        )
        expect(wrapper).toMatchSnapshot()
    })
})