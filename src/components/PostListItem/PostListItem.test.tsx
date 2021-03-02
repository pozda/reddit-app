import React from 'react'
import {shallow} from 'enzyme'
import {PostListItem} from 'components'

const mockItem = {
    kind: 'string',
    data: {
        author: 'string',
        created: 21141341234,
        created_utc: 21141341234,
        id: 'string',
        num_comments: 123,
        over_18: false,
        media_embed: {},
        permalink: 'string',
        pinned: false,
        post_hint: 'string',
        score: 120,
        selftext: 'string',
        subbredit: 'string',
        title: 'string',
        thumbnail: 'string',
        name: 'string',
        ups: 125,
        downs: 12,
        upvote_ratio: 0.92,
        url: 'string',
        preview: 'string'
    }
}

describe('PostListItem', () => {
    it('should be defined', () => {
        expect(PostListItem).toBeDefined()
    })
    it('should render correctly', () => {
        const wrapper = shallow(
            <PostListItem data={mockItem}/>
        )
        expect(wrapper).toMatchSnapshot()
    })
})