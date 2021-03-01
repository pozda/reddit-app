import { AxiosResponse } from "axios";
import Button from "components/Button";
import Conditional from "components/Conditional";
import SubredditPostItem from "components/PostListItem";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { LinkList, LinkSingle } from "../../models/Links";
import { Network } from "../../network/NetworkService"
import { getLatestThreads } from "../../network/Requests";

const fetchLatestThreads = (id: string, nav?: string) => {
  const config = getLatestThreads(id, nav)
  return Network.request(config)
}

const SubredditPage: React.FC<{}> = () => {
  const [latestThreads, setLatestThreads] = useState<LinkList>()
  const [selectedSub, setSelectedSub] = useState<string>()
  const [nav, setNav] = useState('');
  const { subredditId } = useParams<{ subredditId: string }>();
  const [first, setFirst] = useState<string>();

  const navigate = (direction: string) => {
    setNav(direction);
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    fetchLatestThreads(subredditId!, nav)
      .then((response: AxiosResponse<LinkList>) => {
        const data: LinkList = response.data
        setLatestThreads(data);
        setSelectedSub(subredditId);
        if (!first) {
          setFirst(data.data.children[0].data.name)
        }
      })
  }, [subredditId, nav, first]);

  return (
    <>
      <h1>r/{!!selectedSub ? selectedSub : 'loading'}</h1>
      {
        latestThreads?.data.children?.map((post: LinkSingle) => (
          <SubredditPostItem
            key={post.data.id}
            data={post}
          />
        ))
      }

      <Conditional condition={latestThreads?.data.before !== first}>
        <Button
          onClick={() => navigate(`before=${latestThreads?.data.before}`)}
          text={'PREV'}
        />
      </Conditional>

      <Conditional condition={!!latestThreads?.data.after}>
        <Button
          onClick={() => navigate(`after=${latestThreads?.data.after}`)}
          text={'NEXT'}
        />
      </Conditional>

    </>
  )
}

export default SubredditPage