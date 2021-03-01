import styled from 'styled-components'
import {styles} from 'styles/values'

const StyledLayout = styled.div`
    padding: ${styles.unit.DOUBLE*2}px;
`

const StyledLayoutHeader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    height: ${styles.size.HEADER};
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${styles.color.shade.WHITE};
`

const StyledLayoutMain = styled.div`
    display: flex;
    margin: 0 auto;
    padding-top: calc(${styles.size.HEADER} - ${styles.unit.DOUBLE*2}px);
    max-width: 1024px;
`

const StyledLayoutLeft = styled.div`
    width: 65%;
`

const StyledLayoutRight = styled.div`
    width:35%;
` 

export {
    StyledLayout,
    StyledLayoutLeft,
    StyledLayoutRight,
    StyledLayoutHeader,
    StyledLayoutMain
}