import React from 'react'
import {shallow} from 'enzyme'
import {Router} from 'react-router-dom'
import {createMemoryHistory} from 'history'
import SubredditPage from './SubredditPage'

describe('SubredditPage', () => {
    it('should be defined', () => {
        expect(SubredditPage).toBeDefined()
    })
    it('should render correctly', () => {
        const history = createMemoryHistory()
        const route = '/r/jesttest'
        history.push(route)
        const wrapper = shallow(
            <Router history={history}>
                <SubredditPage />
            </Router>
        )
        expect(wrapper).toMatchSnapshot()
    })
})