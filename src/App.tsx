import axios from "axios";
import { useEffect } from "react";
// import { useState } from "react";
// import NetworkService from "./network/NetworkService";
// import { getLatestActiveSubreddits } from "./network/Requests";

const App:React.FC<{}> = () => {
  // const networkService = new NetworkService()


  // const [latestSubreddits, setLatestSubreddits] = useState({kind: 'none', data: { dist: 0}})
    
    // const fetchLatestActiveSubreddits = () => {
    //     const config = getLatestActiveSubreddits()
    //     networkService.makeRequest(config)
    //         .then((response: AxiosResponse<any>) => {
    //             const results = response.data;
    //             console.log(results);
    //             setLatestSubreddits(results)
    //         })
    // }

    useEffect(() => {
       // fetchLatestActiveSubreddits();
        aToken()
    })

    const aToken = () => (
      axios
    .post(
      "https://www.reddit.com/api/v1/access_token?grant_type=client_credentials",
      '',
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${process.env.REDDIT_CLIENT_ID}:${process.env.REDDIT_CLIENT_SECRET}`
          ).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        }
      }
    )
    .then((r) => {console.log(r)})

    )
  

  return (
  <>
      <header className="App-header">
       Search - extra
      </header>
      <main>
      
      </main>
    </>
)}

export default App;
