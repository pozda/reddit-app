import { AxiosResponse } from "axios";
import React, { useState, useEffect, SetStateAction, Dispatch } from "react";
import { Link } from "react-router-dom";
import {Network} from "../../network/NetworkService"
import { getLatestActiveSubreddits } from "../../network/Requests";
import routes from "../../routes/routes";
interface Props 
    {
        setSelectedSub?: Dispatch<SetStateAction<string>>
    }


const HomePage:React.FC<Props> = (props) => {
  const [latestSubreddits, setLatestSubreddits] = useState()

  const fetchLatestActiveSubreddits = () => {
    const config = getLatestActiveSubreddits()
    Network.request(config)
    .then((response: AxiosResponse<any>) => { 
        const data = response.data
        setLatestSubreddits(data)
    }) 
  }

    useEffect(() => {
      fetchLatestActiveSubreddits();
    },[]);

    return (
        <>
        <h1>Naslov</h1>
        {// @ts-ignore
latestSubreddits && latestSubreddits?.children?.map((subs: any) => {
return (

    <Link
    key={subs.data.title}
    to={routes.subreddit.getPathWithParams?.(subs.data.display_name)}
    // @ts-ignore
    onClick={()=>props.setSelectedSub(subs.data.display_name)}>
<h3>{subs.data.title}</h3></Link>
);
})
}
      </>
    )
}

export default HomePage