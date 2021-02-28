import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch, useHistory } from 'react-router-dom'
import routes from "./routes/routes";
import HomePage from "./pages/Home/HomePage";
import SubredditPage from "./pages/Subreddit/SubredditPage";
import { Layout } from "components";
import GlobalStyles from "styles/globalStyles";
import { Network } from "network/NetworkService";
import { search } from "network/Requests";
import { AxiosResponse } from "axios";
import { useCallback } from "react";
import { LinkList } from "models/Links";
import { SubredditList } from "models/Subreddit";

const App: React.FC<{}> = () => {
    const [selectedSubreddit, setSelectedSubreddit] = useState<string>('')
    const [searchResults, setSearchResults] = useState<any[]>([])
    let history = useHistory()

    const handleSearch = (what: string, q: string) => {
        const config = search(what, q)
        Network.request(config)
            .then((response: AxiosResponse<SubredditList>) => {
                setSearchResults(response.data.data.children)
            });
    }

    useEffect(() => {
        history.push(`${selectedSubreddit}`)
    }, [history, selectedSubreddit]);

    return (
        <>
            <GlobalStyles />
            <Layout
                handleSearch={handleSearch}
                searchResults={searchResults}
                selectedSubreddit={selectedSubreddit}
            >
                {
                    <Switch>
                        <Route exact
                            {...routes.home}
                            render={() => (
                                <HomePage
                                    setSelectedSub={setSelectedSubreddit}
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
                                <SubredditPage />
                            )}
                        />
                        <Redirect to={routes.home.path} />
                    </Switch>
                }
            </Layout>
        </>
    )
}

export default App;