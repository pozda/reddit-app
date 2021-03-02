import React from 'react'
import {shallow} from 'enzyme'
import {SubredditList} from '../../models/Subreddit'
import SearchComponent from './index'
import {StyledSearchComponentField} from 'components/SearchComponent/SearchComponentStyles'

const mockFnSearch = jest.fn()
const mockList: SubredditList = {
    kind: 'string',
    data: {
        after: 'string',
        before: 'string',
        dist: 1,
        children: []
    }
}

describe('SearchComponent', () => {
    it('should be defined', () => {
        expect(SearchComponent).toBeDefined()
    })
    it('should render correctly', () => {
        const wrapper = shallow(
            <SearchComponent
                handleSearch={() => mockFnSearch('subreddits', 'query')}
                searchResults={mockList}
            />
        )
        expect(wrapper).toMatchSnapshot()
    })
    it('should trigger correctly', () => {
        const wrapper = shallow(
            <SearchComponent
                handleSearch={() => mockFnSearch('subreddits', 'query')}
                searchResults={mockList}
            />
        )
        const input = wrapper.find(StyledSearchComponentField)
        input.simulate('change', {target: {value: 'Hello'}}) 
        expect(mockFnSearch).toHaveBeenCalled()
    })
})