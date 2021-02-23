import { AxiosResponse } from "axios";
import { useEffect } from "react";
import { useState } from "react";
import NetworkService from "./network/NetworkService";
import { getLatestActiveSubreddits } from "./network/Requests";

const App:React.FC<{}> = () => {
  const networkService = new NetworkService()


  const [latestSubreddits, setLatestSubreddits] = useState({kind: 'none', data: { dist: 0}})
    
    const fetchLatestActiveSubreddits = () => {
        const config = getLatestActiveSubreddits()
        networkService.makeRequest(config)
            .then((response: AxiosResponse<any>) => {
                const results = response.data;
                console.log(results);
                setLatestSubreddits(results)
            })
    }

    useEffect(() => {
        fetchLatestActiveSubreddits()   
    })


  return (
  <>
      <header className="App-header">
       Search - extra
      </header>
      <main>
      {
        `${latestSubreddits?.kind} - ${latestSubreddits?.data?.dist}` 
      }
      </main>
    </>
)}

export default App;
