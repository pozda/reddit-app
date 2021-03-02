import axios, {AxiosInstance, AxiosRequestConfig} from 'axios'
import {getUnixTime} from 'date-fns'
import Config from './Config'
import Promise from 'ts-promise'
import {appConstants} from 'utils/appConstants'

const fetchAccessToken = async () => {
    const accessTokenURL = Config.accessTokenURL
    const result = await fetch(accessTokenURL,
        {
            method: appConstants.network.apiMethods.POST,
            body: appConstants.network.auth.GRANT_TYPE_CC,
            headers: {
                [appConstants.network.auth.AUTHORIZATION]: `${appConstants.network.auth.BASIC} ${Buffer.from(
                    `${Config.clientId}:${Config.clientSecret}`
                ).toString('base64')}`,
                [appConstants.network.auth.CONTENT_TYPE]: appConstants.network.headers.CONTENT_TYPE_APP_FORM
            }
        }
    )

    const {access_token, expires_in} = await result.json()
    if (result.ok) {
        const expiration = getUnixTime(Date.now()) + expires_in
        localStorage.setItem(appConstants.network.auth.ACCESS_TOKEN, access_token)
        localStorage.setItem(appConstants.network.auth.TOKEN_EXPIRATION, `${expiration}`)
        return access_token
    } else {
        return Promise.reject(new Error('Access token error'))
    }
}

export const Network: AxiosInstance = axios.create({
    baseURL: Config.baseUrl,
    timeout: 10000,
    headers: {
        [appConstants.network.auth.CONTENT_TYPE]: appConstants.network.headers.CONTENT_TYPE_APP_FORM
    }
})

Network.interceptors.request.use(async (config: AxiosRequestConfig) => {
    const token = localStorage.getItem(appConstants.network.auth.ACCESS_TOKEN)
    let newToken
    const expiration = localStorage.getItem(appConstants.network.auth.TOKEN_EXPIRATION) || null
    const isExpired = expiration ? parseInt(expiration) <= getUnixTime(Date.now()) : true

    if (!token || isExpired) {
        newToken = await fetchAccessToken()
    }

    config.headers[appConstants.network.auth.AUTHORIZATION] = 
    `${appConstants.network.auth.BEARER} ${token ? token : newToken}`
    return config
},
error => {
    Promise.reject(error)
})