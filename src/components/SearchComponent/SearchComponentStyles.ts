import styled from 'styled-components'
import {styles} from 'styles/values'

const StyledSearchComponent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: ${styles.color.shade.WHITE};
    padding: 0 ${styles.unit.DOUBLE}px;
    box-shadow: 3px 5px 5px 1px rgba(0,0,0,0.05);
    border-radius: ${styles.borderRadius.PRIMARY};
`

const StyledSearchComponentInputWrapper = styled.div`
    display: flex;
    width: 100%;
    transition: ${styles.transition.PRIMARY};
    cursor: pointer;
`

const StyledSearchComponentField = styled.input`
    height: 56px;
    width: calc(100% - ${styles.unit.DOUBLE}px);
    padding: 6px;
    color: ${styles.color.shade.DARK};
    font-size: ${styles.typographyScale.TYPE16};
    border: 1px solid ${styles.color.shade.TRANSPARENT};
    transition: ${styles.transition.PRIMARY};
    &:hover,
    &:focus {outline: 0;}
`


export {
    StyledSearchComponent,
    StyledSearchComponentField,
    StyledSearchComponentInputWrapper
}