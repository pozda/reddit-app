import React from 'react'
import {shallow} from 'enzyme'
import {Layout, Button} from 'components'
import {SubredditList} from 'models/Subreddit'

const mockFnButton = jest.fn()
const mockFnSearch = jest.fn()
const mockResults: SubredditList ={
    kind: 'string',
    data: {
        after: 'string',
        before: 'string',
        dist: 1,
        children: [
            {
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
                    created_utc: 1343241325324,
                    banner_img: 'string',
                    community_icon: 'string',
                    header_img: 'string',
                    icon_img: 'string',
                    banner_background_image: 'string'
                }
            }
        ]
    }
}

describe('LayoutComponent', () => {
    it('should be defined', () => {
        expect(Layout).toBeDefined()
    })
    it('should render correctly', () => {
        const wrapper = shallow(
            <Layout handleSearch={mockFnSearch} searchResults={mockResults}>
                <Button text={'text'} onClick={mockFnButton} />
            </Layout>
        )
        expect(wrapper).toMatchSnapshot()
    })
})