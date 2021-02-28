import { AxiosResponse } from "axios";
import Conditional from "components/Conditional";
import React, { useState, useEffect, SetStateAction, Dispatch } from "react";
import { Link } from "react-router-dom";
import { SubredditList, SubredditSingle } from "../../models/Subreddit";
import { Network } from "../../network/NetworkService"
import { getLatestActiveSubreddits } from "../../network/Requests";
import routes from "../../routes/routes";

interface Props {
  setSelectedSub: Dispatch<SetStateAction<string>>
}

const fetchSomeSubreddits = (navigation?: string) => {
  const config = getLatestActiveSubreddits(navigation && navigation)
  return Network.request(config);
}

const HomePage: React.FC<Props> = ({ setSelectedSub }: Props) => {
  const [subredditList, setSubredditList] = useState<SubredditList>();
  const [nav, setNav] = useState<string>();
  const [first, setFirst] = useState<string>();

  useEffect(() => {
    fetchSomeSubreddits(nav)
      .then((response: AxiosResponse<SubredditList>) => {
        const data: SubredditList = response.data
        setSubredditList(data)
        if(!first) {
          setFirst(data.data.children[0].data.name)
        }
      })
  }, [nav, first]);

  return (
    <>
      <h1>Subbreddits</h1>
      {
        subredditList
          ? subredditList?.data.children?.map((subreddit: SubredditSingle) => {
            return (
              <Link
                key={subreddit.data.title}
                to={routes.subreddit.getPathWithParams?.(subreddit.data.display_name)}
                onClick={() => setSelectedSub(subreddit.data.display_name)}
              >
                <h3>{subreddit.data.title}</h3>
              </Link>
            );
          })
          : <h1>Loading</h1>
      }
      <Conditional condition={subredditList?.data.before !== first}>
        <button
          onClick={() => setNav(`before=${subredditList?.data.before}`)}
        >
          PREV
        </button>
      </Conditional>

      <Conditional condition={!!subredditList?.data.after}>
        <button
          onClick={() => setNav(`after=${subredditList?.data.after}`)}
        >
          NEXT
        </button>
      </Conditional>
    </>
  )
};

export default HomePage