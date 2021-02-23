
import { AxiosResponse } from "axios";
import { useEffect } from "react";
import { useState } from "react";
import NetworkService from "./network/NetworkService";
import { getLatestActiveSubreddits } from "./network/Requests";

const App:React.FC<{}> = () => {
  const networkService = new NetworkService()


  const [latestSubreddits, setLatestSubreddits] = useState({kind: 'none', data: { dist: 0}})
  const [token, setToken] = useState('')
    
    const fetchLatestActiveSubreddits = (token: string) => {
        const config = getLatestActiveSubreddits(token)
        networkService.makeRequest(config)
            .then((response: AxiosResponse<any>) => {
                const results = response.data;
                console.log(results);
                setLatestSubreddits(results)
            })
    }

    useEffect(()=> {
      getRedditToken()
    }, [])

    useEffect(() => {
      fetchLatestActiveSubreddits(token);
    })



    async function getRedditToken() {
      const  REDDIT_CLIENT_ID  = 'Xn9gIG6QLg0O3Q';
      const REDDIT_CLIENT_SECRET = 'AcmUZTtO-dGSj7qtpTN52ejNzhXs7A';
      const REDDIT_ACCESS_TOKEN_URL = 'https://www.reddit.com/api/v1/access_token';
  
      const token = await fetch(REDDIT_ACCESS_TOKEN_URL, {
         method: 'POST',
          body: 'grant_type=client_credentials',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ` + Buffer.from(`${REDDIT_CLIENT_ID}:${REDDIT_CLIENT_SECRET}`).toString('base64') // Not sure about this
          }
      }).then(function(response) {
          console.log(response);
          return response.json();
      })
      setToken(token.access_token);
  }
  

  return (
  <>
      <header className="App-header">
       Search - extra
      </header>
      <main>
      {latestSubreddits?.kind}
      </main>
    </>
)}

export default App;
