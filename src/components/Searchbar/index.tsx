import React from 'react'
import { appConstants } from 'utils/appConstants'
import {
    StyledSearchbar,
    StyledSearchbarField,
    StyledSearchbarIconWrapper
} from './SearchbarStyles'
import { Icon } from 'components'
import { useState } from 'react';
import { useEffect } from 'react';

interface Props {
    handleSearchChange: (e: React.SyntheticEvent<HTMLInputElement, Event>) => void,
    handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void,
    subSearchResults: any[]
}

const Searchbar = ({ handleSearchChange, handleKeyPress, subSearchResults }: Props) => {
    const [dropdownList, setDropdownList] = useState(subSearchResults);

    useEffect(() => {
        setDropdownList(subSearchResults);
        console.log(dropdownList)
    }, [dropdownList, subSearchResults]);

    return (
        <>
            <StyledSearchbar>
                <StyledSearchbarField
                    placeholder={appConstants.placeholder.SEARCH}
                    onSelect={(e) => handleSearchChange(e)}
                    onKeyPress={(e) => handleKeyPress(e)}
                />
                <StyledSearchbarIconWrapper>
                    <Icon d={Icon.res.SEARCH} height={16} width={16} />
                </StyledSearchbarIconWrapper>
            </StyledSearchbar>
        </>
    )
}
export default Searchbar