import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {styles} from 'styles/values'


const StyledSearchResult = styled(Link)<{backgroundImage?: string}>`
    margin: ${styles.unit.DOUBLE}px 0 0 0;
    padding: ${styles.unit.DOUBLE*2}px;
    text-decoration: none;
    width: 100%;

    @media (min-width: 640px) {
        width: 50%;
    }

    @media (min-width: 768px) {
        width: 100%;
    }

    ${props => !!props.backgroundImage 
        ? `background-image: url(${props.backgroundImage})` 
        : `background-color: ${styles.color.brand.PRIMARY_HOVER}`
    }
`

const StyledSearchResultContainer = styled.div`
    display: flex;
    padding: ${styles.unit.DOUBLE*2}px;
    border-radius: ${styles.borderRadius.PRIMARY};
    background-color: ${styles.color.shade.NEUTRAL07};
    width: 100%;
`

const StyledSearchResultImage = styled.img`
    width: ${styles.unit.DOUBLE*10}px;
    height: ${styles.unit.DOUBLE*10}px;
    border-radius: ${styles.borderRadius.CIRCLE};
`

const StyledSearchResultTitle = styled.h3`
   margin: 0;
   overflow: hidden;
   white-space: nowrap;
   text-overflow: ellipsis;
   width:calc(100% - 10px);
`
const StyledSearchResultDescription = styled.p`
    margin: 0;
    font-size: ${styles.typographyScale.TYPE12};
    font-weight: ${styles.fontWeight.REGULAR};
    overflow: hidden;
`

const StyledSearchResultTitleAndSubtitle = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 0 ${styles.unit.DOUBLE*2}px;
    width: 100%;
`

export {
    StyledSearchResult,
    StyledSearchResultContainer,
    StyledSearchResultImage,
    StyledSearchResultTitle,
    StyledSearchResultDescription,
    StyledSearchResultTitleAndSubtitle
}