import styled from 'styled-components'
import {styles} from 'styles/values'


const StyledSearchResult = styled.a`
    margin: ${styles.unit.DOUBLE}px 0 0 0;
    padding: ${styles.unit.DOUBLE*2}px;
    text-decoration: none;
    overflow: hiden;
    text-decoration: none;
    color: ${styles.color.shade.DARK};
    width: calc(100% - ${styles.unit.BASE*5}px);
    background-size: cover;
    background-position: center center;
    background-color: ${styles.color.brand.PRIMARY_HOVER};
    transition: ${styles.transition.PRIMARY};

    &:hover{
        color: ${styles.color.shade.GRAYBLUE};
        padding: ${styles.unit.DOUBLE*2}px ${styles.unit.DOUBLE}px ${styles.unit.DOUBLE*2}px ${styles.unit.DOUBLE*3}px;

        }
    }
    &:focus {
        outline: 0;
    }

    @media (min-width: 640px) {
        width: 50%;
    }

    @media (min-width: 768px) {
        width: 100%;
    }
`

const StyledSearchResultContainer = styled.div`
    display: flex;
    padding: ${styles.unit.DOUBLE*2}px 0 ${styles.unit.DOUBLE*2}px ${styles.unit.DOUBLE*2}px;
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