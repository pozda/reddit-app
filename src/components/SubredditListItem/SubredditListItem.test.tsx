// should render
// with minimal props
// as well as with all optional

import React from 'react'
import {shallow} from 'enzyme'
import {SubredditListItem} from 'components'
import {SubredditSingle} from 'models/Subreddit'

const mockData: SubredditSingle = {
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

describe('SubredditListItem', () => {
    it('should be defined', () => {
        expect(SubredditListItem).toBeDefined()
    })
    it('should render correctly', () => {
        const wrapper = shallow(
            <SubredditListItem data={mockData} />
        )
        expect(wrapper).toMatchSnapshot()
    })
})