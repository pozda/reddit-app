import styled from 'styled-components'
import {styles} from 'styles/values'

const StyledLogoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 24px;
    margin-left: ${styles.unit.DOUBLE *2}px;
    transition: ${styles.transition.PRIMARY};
    @media(min-width: 380px){
        width: 110px;
    }

    & svg path {
        fill: ${styles.color.shade.DARK};
        transition: ${styles.transition.PRIMARY};
    }
    &:hover {
        color: ${styles.color.shade.DARK05};
        margin-left:${styles.unit.DOUBLE *3}px;
        svg path {
            fill: ${styles.color.brand.PRIMARY_HOVER};
        }
        a {
            color: ${styles.color.shade.DARK05};
        }
    }
    & a {
        display: flex;
        color: ${styles.color.shade.DARK};
        text-decoration: none;
        transition: ${styles.transition.PRIMARY};
    }
`

const StyledLogoText = styled.span`
    display: none;
    @media(min-width:380px) {
        display:block;
        margin-left: 3px;
        font-size: ${styles.typographyScale.TYPE20};
    }

`

export {
    StyledLogoText,
    StyledLogoWrapper
}