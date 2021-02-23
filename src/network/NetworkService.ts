import axios from 'axios'
import Config from './Config'
import Promise from 'ts-promise'

class RESTService {
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

    makeRequest = (config: any) => (
        this.instance.request(config)
            .then(response => {
                console.log(`response: ${response}`);
                return Promise.resolve(response);
            })
    )
}

export default RESTService