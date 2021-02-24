import appConstants from '../utils/appConstants'
import Config from './Config'

const maxResults = 10
// const key = Config.authorization

const accessToken = localStorage.getItem('access_token');

export const getLatestActiveSubreddits = () => {
    if(!accessToken) {
        console.log('missing access token')
    }    
    return {
        method: appConstants.apiMethods.GET,
        url: `${Config.baseUrl}subreddits.json`,
        params: {
            limit: maxResults
        },
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }
}

export const getLatestThreads = (subreddit: string) => {
    if(!accessToken) {
        console.log('missing access token')
    }
    return {
        method: appConstants.apiMethods.GET,
        //url: `${Config.baseUrl}r/${subreddit}/new`,
        url: `https://oauth.reddit.com/r/${subreddit}/new`,
        params: {
            limit: maxResults,
            sort: 'new',
        },
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }
}