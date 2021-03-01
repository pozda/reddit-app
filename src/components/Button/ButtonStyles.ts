import styled from 'styled-components'
import {styles} from 'styles/values'

const StyledButton = styled.button`
position: relative;
display: flex;
padding:  ${styles.unit.BASE*3}px ${styles.unit.DOUBLE*3}px;
background-color: ${styles.color.brand.PRIMARY};
margin: ${styles.unit.DOUBLE}px ${styles.unit.DOUBLE}px ${styles.unit.DOUBLE*4}px 0;
color: ${styles.color.shade.WHITE};
box-shadow: 3px 5px 5px 1px rgba(0,0,0,0.05);
border-radius: ${styles.borderRadius.PRIMARY};
display: inline-block;
border: none;
text-decoration: none;
cursor: pointer;
text-align: center;
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