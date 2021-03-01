import { AxiosResponse } from "axios";
import Conditional from "components/Conditional";
import React, { useState, useEffect } from "react";
import { SubredditList, SubredditSingle } from "../../models/Subreddit";
import { Network } from "../../network/NetworkService"
import { getLatestActiveSubreddits } from "../../network/Requests";
import SubredditItem from '../../components/SubredditItem'
import Button from '../../components/Button'



const fetchSomeSubreddits = (navigation?: string) => {
  const config = getLatestActiveSubreddits(navigation && navigation)
  return Network.request(config);
}

const HomePage: React.FC<{}> = () => {
  const [subredditList, setSubredditList] = useState<SubredditList>();
  const [nav, setNav] = useState<string>();
  const [first, setFirst] = useState<string>();

  useEffect(() => {
    fetchSomeSubreddits(nav)
      .then((response: AxiosResponse<SubredditList>) => {
        const data: SubredditList = response.data
        setSubredditList(data)
        if (!first) {
          setFirst(data.data.children[0].data.name)
        }
      })
  }, [nav, first]);

  return (
    <>
      <h1>Subreddits</h1>
      {
        subredditList?.data?.children.map((subreddit: SubredditSingle) => {
          return (<SubredditItem
            key={subreddit.data.id}
            data={subreddit}
          />);
        })
      }
      <Conditional condition={subredditList?.data.before !== first}>
        <Button
          onClick={() => setNav(`before=${subredditList?.data.before}`)}
          text={'PREV'}
        />
      </Conditional>

      <Conditional condition={!!subredditList?.data.after}>
        <Button
          onClick={() => setNav(`after=${subredditList?.data.after}`)}
          text={'NEXT'}
        />
      </Conditional>
    </>
  )
};

export default HomePage