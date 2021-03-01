import React from 'react'
import LayoutComponent from './LayoutComponent/LayoutComponent'
import {
    Logo
} from 'components'
import SearchComponent from 'components/SearchComponent'
import { SubredditList } from 'models/Subreddit'

interface Props {
    children: React.ReactNode,
    handleSearch: (what: string, q: string) => void,
    searchResults: SubredditList
}

const Layout = ({ children, handleSearch, searchResults }: Props) => (
    <LayoutComponent>
        <LayoutComponent.Header>
            <Logo />
        </LayoutComponent.Header>
        <LayoutComponent.Main>
            <LayoutComponent.Left>
                {children}
            </LayoutComponent.Left>
            <LayoutComponent.Right>
                <h1>Search</h1>
                <SearchComponent
                    handleSearch={handleSearch}
                    searchResults={searchResults}
                />
            </LayoutComponent.Right>
        </LayoutComponent.Main>
    </LayoutComponent>
)
export default Layout