import {appConstants} from '../utils/appConstants'
import Config from './Config'

interface IConfig {
    method: "get" | "post" | "put" | "delete",
    url: string,
    params: {
        limit?: number
    }
}

const maxResults = 10

export const getLatestActiveSubreddits = () => {
    const config: IConfig = {
        method: appConstants.network.apiMethods.GET,
        url: `${Config.baseUrl}subreddits.json`,
        params: {
            limit: maxResults
        }
    }
    return config
}

export const getLatestThreads = (subreddit: string) => {
    return {
        method: appConstants.network.apiMethods.GET,
        url: `https://oauth.reddit.com/r/${subreddit}/new`,
        params: {
            limit: maxResults
        }
    }
}