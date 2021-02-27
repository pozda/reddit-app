interface IConfig {
    baseUrl: string,
    clientId: string,
    clientSecret: string,
    accessTokenURL: string
}

const Config: IConfig = {
    baseUrl: process.env.REACT_APP_BASE_URL || 'missing baseURL or its env var',
    clientId: process.env.REACT_APP_REDDIT_ID || 'missing clientId or its env var',
    clientSecret: process.env.REACT_APP_REDDIT_KEY || 'missing clientSecret or its env var',
    accessTokenURL: process.env.REACT_APP_REDDIT_ACCESS_TOKEN_URL || 'missing accessTokenURL or its env var'
}

export default Config