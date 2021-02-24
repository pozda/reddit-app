import { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {RESTService as NetworkService} from "../../network/NetworkService"
import { getLatestThreads } from "../../network/Requests";



const networkService = new NetworkService();

const SubredditPage:React.FC<{}> = () => {
  const [latestThreads, setLatestThreads] = useState()
  const [selectedSub, setSelectedSub] = useState()
  // @ts-ignore
  const {subredditId} = useParams()
  const fetchLatestThreads = (id: string) => {
    const config = getLatestThreads(id)
    networkService.makeRequest(config)
    .then((response: AxiosResponse<any>) => { 
        setLatestThreads(response.data)
        setSelectedSub(subredditId)
    }) 
  }


useEffect(()=>{
  fetchLatestThreads(subredditId!)
  // eslint-disable-next-line
},[subredditId])


    return (
        <>
        <h1>selected sub: {selectedSub}</h1>
        {// @ts-ignore
latestThreads && latestThreads?.children?.map(subs => {
return (
<a href={subs.data.url} key={subs.data.title}><h3>{subs.data.title}</h3></a>
);
})
}
      </>
    )
}

export default SubredditPage