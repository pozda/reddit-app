import React, { useEffect, useState } from "react";
import {Redirect, Route, Switch, useHistory} from 'react-router-dom'
import routes from "./routes/routes";
import HomePage from "./pages/Home/HomePage";
import SubredditPage from "./pages/Subreddit/SubredditPage";

const App:React.FC<{}> = () => {
  const [selectedSub, setSelectedSub] = useState('')


  let history = useHistory()
  useEffect(() => {
    if(selectedSub !== undefined && selectedSub !== '') {
        history.push(`/r/${selectedSub}`)
    }
},[history, selectedSub])
  return (

    <>
            {/* <GlobalStyles />  */}
            {/* <Layout 
                handleSearchChange={handleSearchChange} 
                handleSearchSubmit={handleSearchSubmit}
                handleEnterKey={handleEnterKey}
                query={query}
            > */}
                {
                  
                     <Switch>
                            <Route exact
                                {...routes.home} 
                                render={() => (
                                   <HomePage 
                                    setSelectedSub={setSelectedSub}
                                   />
                                )}
                            />
                        
                            <Route exact
                                {...routes.search}
                                render={() => (
                                    <h1>search results</h1>
                                )} 
                            />
                            <Route
                                {...routes.subreddit}
                                render={() => (
                                    <SubredditPage/>
                                )} 
                            />
                            <Redirect to={routes.home.path} /> 
                        </Switch>
                       
                }
            {/* </Layout>        */}
        </>
)}

export default App;


