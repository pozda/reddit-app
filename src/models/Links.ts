export interface LinkList{
    kind: string,
    data: {
        after: string,
        before: string,
        dist: number,
        children: LinkSingle[]
    }
}

export interface imageResolution {
    width: number,
    height: number,
    url: string
}

export interface Preview {
    images: [
        {
            source: {
                url: string;
            }
        }
    ];    
}
export interface LinkSingle {
    kind: string,
    data: {
        author: string,
        created: number,
        created_utc: number,
        id: string,
        num_comments: number,
        over_18?: boolean,
        media_embed: {},
        permalink: string,
        pinned: boolean,
        post_hint: string,
        score: number,
        selftext: string,
        subbredit: string,
        title: string,
        thumbnail?: string,
        name: string,
        ups: number,
        downs: number,
        upvote_ratio: number,
        url: string,
        preview: string
    }
}