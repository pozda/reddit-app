import React from 'react'
import {shallow} from 'enzyme'
import {SearchComponent} from 'components'
import {SubredditList} from 'models/Subreddit'

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
})