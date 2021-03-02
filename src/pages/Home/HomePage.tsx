import React, {FC, useState, useEffect} from 'react'
import {AxiosResponse} from 'axios'
import {Button, Conditional, SubredditListItem} from 'components'
import {SubredditList, SubredditSingle} from 'models/Subreddit'
import {Network} from 'network/NetworkService'
import {getLatestActiveSubreddits} from 'network/Requests'

export  const fetchSomeSubreddits = (navigation?: string) => {
    const config = getLatestActiveSubreddits(navigation && navigation)
    return Network.request(config)
}

const HomePage: FC<{}> = () => {
    const [subredditList, setSubredditList] = useState<SubredditList>()
    const [nav, setNav] = useState<string>()
    const [first, setFirst] = useState<string>()

    const navigate = (direction: string) => {
        setNav(direction)
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        fetchSomeSubreddits(nav)
            .then((response: AxiosResponse<SubredditList>) => {
                const data: SubredditList = response.data
                setSubredditList(data)
                if (!first) {
                    setFirst(data.data.children[0].data.name)
                }
            })
    }, [nav, first])

    return (
        <>
            <h1>Subreddits</h1>
            {
                subredditList?.data?.children.map((subreddit: SubredditSingle) => (<SubredditListItem
                    key={subreddit.data.id}
                    data={subreddit}
                />))
            }
            <Conditional condition={subredditList?.data.before !== first}>
                <Button
                    onClick={() => navigate(`before=${subredditList?.data.before}`)}
                    text={'PREV'}
                />
            </Conditional>

            <Conditional condition={!!subredditList?.data.after}>
                <Button
                    onClick={() => navigate(`after=${subredditList?.data.after}`)}
                    text={'NEXT'}
                />
            </Conditional>
        </>
    )
}

export default HomePage