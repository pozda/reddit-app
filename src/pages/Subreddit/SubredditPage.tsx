import { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {Network} from "../../network/NetworkService"
import { getLatestThreads } from "../../network/Requests";

const fetchLatestThreads = (id: string, nav?:string) => {
  const config = getLatestThreads(id, nav)
  return Network.request(config)
}

const SubredditPage:React.FC<{}> = () => {
  const [latestThreads, setLatestThreads] = useState()
  const [selectedSub, setSelectedSub] = useState()
  const [nav, setNav] = useState('');
  // @ts-ignore
  const {subredditId} = useParams()
  
  
useEffect(()=>{
  fetchLatestThreads(subredditId!, nav)
    .then((response: AxiosResponse<any>) => { 
      setLatestThreads(response.data)
      setSelectedSub(subredditId)
     console.log(response.data)
    })
},[subredditId, nav]);


return (
  <>
    <h1>selected sub: {!!selectedSub ? selectedSub : 'loading'}</h1>
      {
        latestThreads 
        // @ts-ignore
        ? latestThreads?.data?.children?.map(subs => {
          return (
            <a href={subs.data.url} key={subs.data.title}>
              <h3>{subs.data.title}</h3>
            </a>
          );
        })
        : <h1>Loading data</h1>
      }

      
      <button 
        onClick={
          // @ts-ignore
          () => setNav(`before=${latestThreads?.data?.before}` )
        }
      >
        PREV
      </button>

      <button 
        onClick={
          // @ts-ignore
          () => setNav(`after=${latestThreads?.data?.after}` )
        }
      >
        NEXT
      </button>
    </>
)}

export default SubredditPage