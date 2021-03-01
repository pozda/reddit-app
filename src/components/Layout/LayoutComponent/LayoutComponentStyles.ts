import styled from 'styled-components'
import {styles} from 'styles/values'

const StyledLayout = styled.div`
    padding: ${styles.unit.DOUBLE*2}px;
`

const StyledLayoutHeader = styled.div`
    display: flex;
    justify-content: space-between;
    height: ${styles.size.HEADER};
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    align-items: center;
    background-color: ${styles.color.shade.WHITE};
    box-shadow: 3px 5px 5px 1px rgba(0,0,0,0.05);
`

const StyledLayoutMain = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    padding-top: calc(${styles.size.HEADER} - ${styles.unit.DOUBLE*2}px);
    max-width: 1024px;
    @media (min-width: 768px) {
        flex-wrap: nowrap;
    }
`

const StyledLayoutLeft = styled.div`
    order: 2;
    width: 100%;
    
    @media (min-width: 768px) {
        width: 65%;
        order: 1
    }
`

const StyledLayoutRight = styled.div`
    order: 1;
    width: 100%;
    @media (min-width: 768px) {
        width: 35%;
        order: 2
    }
` 

export {
    StyledLayout,
    StyledLayoutLeft,
    StyledLayoutRight,
    StyledLayoutHeader,
    StyledLayoutMain
}