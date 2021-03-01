import styled from 'styled-components'
import {styles} from 'styles/values'

const StyledButton = styled.button`
    position: relative;
    margin: ${styles.unit.DOUBLE}px ${styles.unit.DOUBLE}px ${styles.unit.DOUBLE*4}px 0;
    padding:  ${styles.unit.BASE*3}px ${styles.unit.DOUBLE*3}px;
    text-align: center;
    color: ${styles.color.shade.WHITE};
    background-color: ${styles.color.brand.PRIMARY};
    border: none;
    border-radius: ${styles.borderRadius.PRIMARY};
    cursor: pointer;
    box-shadow: 3px 5px 5px 1px rgba(0,0,0,0.05);
    transition: ${styles.transition.PRIMARY};

    &:hover {
        background-color: ${styles.color.brand.PRIMARY_HOVER};
        box-shadow: 3px 5px 5px 1px rgba(0,0,0,0.25);
    }
    &:focus {
        outline: 0;
    }   
`
export {
    StyledButton
}