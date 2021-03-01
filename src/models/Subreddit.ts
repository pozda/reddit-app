export interface SubredditList{
    kind: string,
    data: {
        after: string,
        before: string,
        dist: number,
        children: SubredditSingle[]
    }
}

export interface SubredditSingle {
    kind: string,
    data: {
        description: string,
        display_name: string,
        display_name_prefixed: string,
        id: string,
        name: string,
        over18: boolean,
        submission_type: string, 
        title: string,
        url: string,
        created_utc: number,
        banner_img: string,
        community_icon: string,
        header_img: string,
        icon_img: string
    }
}