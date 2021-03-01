import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {styles} from '../../styles/values'

const StyledSubreditItem = styled(Link)`
    position: relative;
    display: flex;
    padding: ${styles.unit.DOUBLE}px;
    background-color: ${styles.color.shade.WHITE};
    margin: 0 ${styles.unit.DOUBLE*2}px ${styles.unit.DOUBLE*2}px 0;
    box-shadow: 3px 5px 5px 1px rgba(0,0,0,0.05);
    border-radius: ${styles.borderRadius.PRIMARY};
    transition: ${styles.transition.PRIMARY};
    &:hover {
        margin-left: 6px;
        box-shadow: 3px 5px 5px 1px rgba(0,0,0,0.25);
    }

`

const StyledSubredditIcon = styled.img`
    display: block;
    width: ${styles.unit.DOUBLE * 10}px;
    height: ${styles.unit.DOUBLE * 10}px;
    border-radius: ${styles.borderRadius.CIRCLE};
    border: 3px solid ${styles.color.shade.NEUTRAL};
    margin-right: ${styles.unit.DOUBLE*2}px;
`

const StyledSubredditDataWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const StyledSubredditTitle = styled.h3`
    color: ${styles.color.shade.DARK};
    font-size: ${styles.typographyScale.TYPE16};
    transition: ${styles.transition.PRIMARY};
    margin: ${styles.unit.DOUBLE}px;
`
const StyledSubredditSubtitle = styled.p`
    color: ${styles.color.shade.DARK};
    font-size: ${styles.typographyScale.TYPE12};
    transition: ${styles.transition.PRIMARY};
    margin: ${styles.unit.DOUBLE}px;
`
const StyledSubredditSince = styled.div`
    background-color: ${styles.color.brand.PRIMARY};
    color: ${styles.color.shade.WHITE};
    transform: rotate(-90deg);
    width: ${styles.unit.DOUBLE*12}px;
    font-size: ${styles.typographyScale.TYPE12};
    height: ${styles.unit.DOUBLE*5}pxpx;
    font-weight: ${styles.fontWeight.BOLD};
    text-align: center;
    position: absolute;
    right: -${styles.unit.BASE*8}px;
    align-self: center;
    border-radius: 0 0 ${styles.borderRadius.PRIMARY} ${styles.borderRadius.PRIMARY};
`
export {
    StyledSubreditItem,
    StyledSubredditTitle,
    StyledSubredditIcon,
    StyledSubredditDataWrapper,
    StyledSubredditSubtitle,
    StyledSubredditSince
}