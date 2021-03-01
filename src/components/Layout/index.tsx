import { FC, ReactNode } from 'react'
import LayoutComponent from './LayoutComponent/LayoutComponent'
import {
    Logo,
    SearchComponent
} from 'components'
import { SubredditList } from 'models/Subreddit'

interface Props {
    children: ReactNode,
    handleSearch: (what: string, q: string) => void,
    searchResults: SubredditList
}

const Layout: FC<Props> = ({ children, handleSearch, searchResults }: Props) => (
    <LayoutComponent>
        <LayoutComponent.Header>
            <Logo />
        </LayoutComponent.Header>
        <LayoutComponent.Main>
            <LayoutComponent.Left>
                {children}
            </LayoutComponent.Left>
            <LayoutComponent.Right>
                <h1>search</h1>
                <SearchComponent
                    handleSearch={handleSearch}
                    searchResults={searchResults}
                />
            </LayoutComponent.Right>
        </LayoutComponent.Main>
    </LayoutComponent>
)
export default Layout