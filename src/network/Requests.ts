import appConstants from '../utils/appConstants'
import Config from './Config'

const maxResults = 10
// const key = Config.authorization

export const getLatestActiveSubreddits = (token: string) => {      
    return {
        method: appConstants.apiMethods.GET,
        url: `${Config.baseUrl}/subreddits.json`,
        params: {
            limit: maxResults
        },
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}