import React from 'react'
import LayoutComponent from './LayoutComponent/LayoutComponent'
import {
    Logo
} from 'components'

interface Props {
    children: React.ReactNode,
    handleSearch: (what: string, q: string) => void,
    searchResults: any[],
    selectedSubreddit: string,
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
                Search
                {/* <SearchComponent
                    handleSearch={handleSearch}
                    searchResults={searchResults}
                /> */}
            </LayoutComponent.Right>
        </LayoutComponent.Main>
    </LayoutComponent>
)
export default Layout