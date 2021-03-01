interface IConstants {
    network: {
        apiMethods: {
            GET: 'get',
            POST: 'post',
            PUT: 'put',
            DELETE: 'delete'
        },
        search: {
            SUBREDDITS: string,
            POSTS: string
        },
        headers: {
            CONTENT_TYPE_APP_FORM: string
        },
        GRANT_TYPE_CC: string,
    },
    placeholder: {
        SEARCH: string,
        SEARCH_SUBS: string,
        LOGO: string,
    },

    title: {
        SEARCH_RESULTS: string
    }
}


export const appConstants: IConstants = {
    network : {
        apiMethods: {
            GET: 'get',
            POST: 'post',
            PUT: 'put',
            DELETE: 'delete'
        },

        search: {
            SUBREDDITS: 'subreddits',
            POSTS: 'posts'
        },
       
        headers: {
            CONTENT_TYPE_APP_FORM: 'application/x-www-form-urlencoded;charset=UTF-8',
        },

        GRANT_TYPE_CC: 'grant_type=client_credentials',
    },
   
    placeholder: {
        SEARCH: 'Search',
        SEARCH_SUBS: 'start typing for subreddits',
        LOGO: 'Go home to the list of subreddits'
    },

    title: {
        SEARCH_RESULTS: 'Search results'
    }
} 