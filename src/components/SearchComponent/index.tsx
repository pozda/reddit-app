import React from 'react'
import { appConstants } from 'utils/appConstants'
import {
    StyledSearchComponent,
    StyledSearchComponentField,
    StyledSearchComponentInputWrapper
} from './SearchComponentStyles'
import { useState } from 'react';
import { useEffect } from 'react';
import SearchResult from 'components/SearchResult';
import { SubredditList, SubredditSingle } from 'models/Subreddit';

interface Props {
    handleSearch: (what: string, q:string) => void, 
    searchResults: SubredditList
}

const SearchComponent = ({ handleSearch, searchResults }: Props) => {
    const [resultsList, setResultsList] = useState(searchResults);

    useEffect(() => {
        setResultsList(searchResults);
    }, [searchResults]);

    return (
        <>
            <StyledSearchComponent>
                <StyledSearchComponentInputWrapper>
                    <StyledSearchComponentField
                        placeholder={appConstants.placeholder.SEARCH_SUBS}
                        onChange={(e) => handleSearch(appConstants.network.search.SUBREDDITS, e.target.value)}
                    />
                </StyledSearchComponentInputWrapper>
                {
                    resultsList?.data?.children.map((result: SubredditSingle, index: number) => {

                        return(<SearchResult key={result.data.id} result={result} />)
                    })
                }
                
            </StyledSearchComponent>
        </>
    )
}
export default SearchComponent