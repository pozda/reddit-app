import axios from 'axios'
import { getUnixTime } from 'date-fns'
import Config from './Config'
import Promise from 'ts-promise'

export class RESTService {
    instance = axios.create({
        baseURL: Config.baseUrl,
        timeout: 100000,
        headers: {
            Authorization: `Basic ${Buffer.from(
              `Xn9gIG6QLg0O3Q:AcmUZTtO-dGSj7qtpTN52ejNzhXs7A`
            ).toString("base64")}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          }
    })

    async fetchAccessToken() {
        const accessTokenURL = 'https://www.reddit.com/api/v1/access_token';
        const result = await fetch(accessTokenURL, 
            {
                method: 'POST',
                body: 'grant_type=client_credentials',
                headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + Buffer.from(`${Config.clientId}:${Config.clientSecret}`).toString('base64')
            }
        })

        const {access_token, expires_in} = await result.json()
            if (result.ok) {
                const expiration = getUnixTime(Date.now()) + expires_in;
                localStorage.setItem('access_token', access_token);
                localStorage.setItem('token_expiration', `${expiration}`)
            } else {
                return Promise.reject(new Error(`Access token error`))
            }
    } 


    makeRequest = (config: any) =>{
        this.fetchAccessToken()
        return(
            this.instance.request(config)
            .then(response => Promise.resolve(response.data))
        )}
}