import {appConstants} from 'utils/appConstants'
import Config from './Config'

interface IConfig {
    method: 'get' | 'post' | 'put' | 'delete',
    url: string,
    params: {
        limit?: number,
        count?: number,
        sort?: string,
        q?: string,
    }
}

const maxResults = 10

export const getLatestActiveSubreddits = (navigation?: string) => {
    const url = navigation 
        ? `${Config.baseUrl}subreddits.json?${navigation}` 
        : `${Config.baseUrl}subreddits.json`
    const config: IConfig = {
        method: appConstants.network.apiMethods.GET,
        url,
        params: {
            limit: maxResults,
            count: maxResults,
            sort: 'new'
        }
    }
    return config
}

export const getLatestThreads = (subreddit: string, nav?:string) => {
    const url = nav
        ? `https://oauth.reddit.com/r/${subreddit}/?${nav}`
        : `https://oauth.reddit.com/r/${subreddit}`
    return {
        method: appConstants.network.apiMethods.GET,
        url,
        params: {
            limit: maxResults,
            count: maxResults,
            sort: 'new'
        }
    }
}

export const search = (what: string, q:string) => {
    const url = what === 'subreddits' 
        ? 'https://oauth.reddit.com/subreddits/search'
        : `https://oauth.reddit.com/${what}/search`
    
    return {
        method: appConstants.network.apiMethods.GET,
        url,
        params: {
            limit: maxResults,
            q,
            sort: 'new'
        }
    }
}