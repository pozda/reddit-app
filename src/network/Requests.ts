import {appConstants} from '../utils/appConstants'
import Config from './Config'

interface IConfig {
    method: "get" | "post" | "put" | "delete",
    url: string,
    params: {
        limit?: number,
        count?: number,
    }
}

const maxResults = 10

export const getLatestActiveSubreddits = (navigation?: string) => {
    const url = !!navigation 
        ? `${Config.baseUrl}subreddits.json?${navigation}` 
        : `${Config.baseUrl}subreddits.json`
    const config: IConfig = {
        method: appConstants.network.apiMethods.GET,
        url,
        params: {
            limit: maxResults,
            count: maxResults,
        }
    }
    return config
}

export const getLatestThreads = (subreddit: string, nav?:string) => {
    const url = !!nav
        ? `https://oauth.reddit.com/r/${subreddit}/new?${nav}`
        : `https://oauth.reddit.com/r/${subreddit}/new`
    return {
        method: appConstants.network.apiMethods.GET,
        url,
        params: {
            limit: maxResults,
            count: maxResults,
        }
    }
}