// @ts-nocheck

import { AxiosResponse } from "axios";
import React, { useState, useEffect, SetStateAction, Dispatch } from "react";
import { Link } from "react-router-dom";
import {Network} from "../../network/NetworkService"
import { getLatestActiveSubreddits } from "../../network/Requests";
import routes from "../../routes/routes";
interface Props  {
  setSelectedSub?: Dispatch<SetStateAction<string>>
}

interface Response { 
  data: {
    after: string,
    before:string
  }
}



const HomePage:React.FC<Props> = (props) => {
  const initial: Response = {data: {
    after: '',
    before:'',
  }}
  const [latestSubreddits, setLatestSubreddits] = useState(initial);

  const fetchLatestActiveSubreddits = (navigation?: string) => {
    const config = getLatestActiveSubreddits(navigation && navigation)
    Network.request(config)
      .then((response: AxiosResponse<any>) => { 
        const data: Response = response.data
        setLatestSubreddits(data)
      console.log(data)
    })
  }


  useEffect(() => {
    fetchLatestActiveSubreddits()
  },[]);
  return (
  <>
    <h1>Latest active subreddits:</h1>
      {
        latestSubreddits
        // @ts-ignore
        ? latestSubreddits?.data.children?.map((subs: any) => {
          return (
            <Link
              key={subs.data.title}
              to={routes.subreddit.getPathWithParams?.(subs.data.display_name)}
              // @ts-ignore
              onClick={()=>props.setSelectedSub(subs.data.display_name)}
            >
              <h3>{subs.data.title}</h3>
            </Link>
          );
        })
        : <h1>Loading</h1>
      }

        {/* {

          latestSubreddits?.data?.before &&

      <button 
        onClick={
          setNavigation(latestSubreddits?.data?.before)
        }
      >
        PREV
      </button>
}
      
{
          latestSubreddits?.data?.after &&

      <button 
        onClick={
          setNavigation(latestSubreddits?.data?.after)
        }
      >
        NEXT
      </button>
      
      } */}
  </>
)};

export default HomePage