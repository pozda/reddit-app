import React, { useState } from "react";
import { Redirect, Route, Switch } from 'react-router-dom'
import routes from "./routes/routes";
import HomePage from "./pages/Home/HomePage";
import SubredditPage from "./pages/Subreddit/SubredditPage";
import { Layout } from "components";
import GlobalStyles from "styles/globalStyles";
import { Network } from "network/NetworkService";
import { search } from "network/Requests";
import { AxiosResponse } from "axios";
import { SubredditList } from "models/Subreddit";

const App: React.FC<{}> = () => {
    const [searchResults, setSearchResults] = useState<SubredditList>()

    const handleSearch = (what: string, q: string) => {
        const config = search(what, q)
        Network.request(config)
            .then((response: AxiosResponse<SubredditList>) => {
                setSearchResults(response.data)
            });
    }

    return (
        <>
            <GlobalStyles />
            <Layout
                handleSearch={handleSearch}
                searchResults={searchResults!}
            >
                {
                    <Switch>
                        <Route exact
                            {...routes.home}
                            render={() => (
                                <HomePage />
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