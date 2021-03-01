import styled from 'styled-components'
import {styles} from 'styles/values'

const StyledSearchComponent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0;
    background-color: ${styles.color.shade.WHITE};
    border-radius: ${styles.borderRadius.PRIMARY};
    box-shadow: 3px 5px 5px 1px rgba(0,0,0,0.05);
`

const StyledSearchComponentInputWrapper = styled.div`
    display: flex;
    width: 100%;
    transition: ${styles.transition.PRIMARY};
    cursor: pointer;
`

const StyledSearchComponentField = styled.input`
    height: 56px;
    width: 100%;
    margin: ${styles.unit.DOUBLE}px;
    padding: ${styles.unit.DOUBLE}px;
    color: ${styles.color.shade.DARK};
    font-size: ${styles.typographyScale.TYPE20};
    font-weight: ${styles.fontWeight.BOLD};
    border: 1px solid ${styles.color.shade.WHITEY};
    border-radius: ${styles.borderRadius.PRIMARY};
    transition: ${styles.transition.PRIMARY};
    &:hover {
        border: 1px solid ${styles.color.brand.PRIMARY_HOVER};
    }
    &:focus {
        border: 1px solid ${styles.color.brand.PRIMARY};
    }
    &:hover,
    &:focus {
        outline: 0;
    }
`

const StyledSearchResultsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    max-height: 230px;
    overflow-y: auto;
    @media (min-width: 768px) {
        flex-wrap: nowrap;
        flex-direction: column;
        max-height: 100%;
    }
`

export {
    StyledSearchComponent,
    StyledSearchComponentField,
    StyledSearchComponentInputWrapper,
    StyledSearchResultsWrapper
}