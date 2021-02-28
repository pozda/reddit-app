import { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { LinkList, LinkSingle } from "../../models/Links";
import {Network} from "../../network/NetworkService"
import { getLatestThreads } from "../../network/Requests";

const fetchLatestThreads = (id: string, nav?:string) => {
  const config = getLatestThreads(id, nav)
  return Network.request(config)
}

const SubredditPage:React.FC<{}> = () => {
  const [latestThreads, setLatestThreads] = useState<LinkList>()
  const [selectedSub, setSelectedSub] = useState<string>()
  const [nav, setNav] = useState('');
  const {subredditId} = useParams<{subredditId: string}>();
  
  
useEffect(()=>{
  fetchLatestThreads(subredditId!, nav)
    .then((response: AxiosResponse<LinkList>) => { 
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
        ? latestThreads?.data.children?.map((subs: LinkSingle) => {
          return (
            <a href={subs.data.url} key={subs.data.id}>
              <h3>{subs.data.title}</h3>
            </a>
          );
        })
        : <h1>Loading data</h1>
      }

      
      <button 
        onClick={
          () => setNav(`before=${latestThreads?.data?.before}` )
        }
      >
        PREV
      </button>

      <button 
        onClick={
          () => setNav(`after=${latestThreads?.data?.after}` )
        }
      >
        NEXT
      </button>
    </>
)}

export default SubredditPage