import styled from 'styled-components'
import styles from 'styles/values'

const StyledSearchbar = styled.div`
    position: relative;
    dislay: flex;
    align-items: center;
`

const StyledSearchbarIconWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 56px;
    transition: ${styles.transition.PRIMARY};
    cursor: pointer;
    svg {
        path {
            fill: ${styles.color.shade.DARK};
            transition: ${styles.transition.PRIMARY};
        }
    }
`

const StyledSearchbarField = styled.input`
    height: 56px;
    padding: 6px 64px 6px 12px;
    color: ${styles.color.shade.DARK};
    font-size: ${styles.typographyScale.TYPE16};
    border: 1px solid ${styles.color.shade.TRANSPARENT};
    transition: ${styles.transition.PRIMARY};
    &:hover,
    &:focus {outline: 0;}
    }
    @media(min-width: 768px){
        width: 580px;
    }
`

export {
    StyledSearchbar,
    StyledSearchbarField,
    StyledSearchbarIconWrapper
}