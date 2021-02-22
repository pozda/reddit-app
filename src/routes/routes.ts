export interface RouteConfig {
    id: string,
    path: string,
    getPathWithParams?: Function,
    name: string,
    exact?: boolean,
    redirectTo?: string
}

const routes: {
    home: RouteConfig,
    search: RouteConfig,
    subreddit: RouteConfig
} = {
    home: {
        id: 'homeListing',
        name: 'Subbreddits',
        path: '/',
        exact: true
    },
    search: {
        id: 'searchResults',
        name: 'Search results',
        path: '/search',
        exact: true
    },
    subreddit: {
        id: 'subbreddit',
        name: 'Subreddit',
        path: '/subredit/:subredditId',
        getPathWithParams: (subredditId: string) => `/subreddit/${subredditId}`
    }
}

export default routes