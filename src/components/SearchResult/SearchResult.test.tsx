import React from 'react'
import {shallow} from 'enzyme'
import {SubredditSingle} from 'models/Subreddit'
import SearchResult from './index'

const mockResult: SubredditSingle = {
    kind: 'string',
    data: {
        public_description: 'string',
        display_name: 'string',
        display_name_prefixed: 'string',
        id: 'string',
        name: 'string',
        over_18: false,
        submission_type: 'string', 
        title: 'string',
        url: 'string',
        created_utc: 111231414531,
        banner_img: 'string',
        community_icon: 'string',
        header_img: 'string',
        icon_img: 'string',
        banner_background_image: 'string'
    }
}


describe('SearchResult', () => {
    it('should be defined', () => {
        expect(SearchResult).toBeDefined()
    })
    it('should render correctly', () => {
        const wrapper = shallow(
            <SearchResult result={mockResult} />
        )
        expect(wrapper).toMatchSnapshot()
    })
})