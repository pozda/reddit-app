import styled from 'styled-components'
import {styles} from 'styles/values'

const StyledSubreditListItem = styled.a`
    position: relative;
    display: flex;
    padding: ${styles.unit.DOUBLE}px;
    margin: 0 0 ${styles.unit.DOUBLE*2}px 0;
    text-decoration: none;
    background-color: ${styles.color.shade.WHITE};
    border-radius: ${styles.borderRadius.PRIMARY};
    transition: ${styles.transition.PRIMARY};
    box-shadow: 3px 5px 5px 1px rgba(0,0,0,0.05);
    @media (min-width: 768px) {
        margin: 0 ${styles.unit.DOUBLE*2}px ${styles.unit.DOUBLE*2}px 0;
    }
    &:hover {
        margin-left: 6px;
        box-shadow: 3px 5px 5px 1px rgba(0,0,0,0.25);
    }        
`

const StyledSubredditIcon = styled.img`
    display: block;
    width: ${styles.unit.DOUBLE * 10}px;
    height: ${styles.unit.DOUBLE * 10}px;
    margin-right: ${styles.unit.DOUBLE*2}px;
    border: 3px solid ${styles.color.shade.NEUTRAL};
    border-radius: ${styles.borderRadius.CIRCLE};
`

const StyledSubredditDataWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const StyledSubredditTitle = styled.h3`
    margin: ${styles.unit.DOUBLE}px;
    color: ${styles.color.shade.DARK};
    font-size: ${styles.typographyScale.TYPE16};
    transition: ${styles.transition.PRIMARY};
`
const StyledSubredditSubtitle = styled.p`
    margin: ${styles.unit.DOUBLE}px;
    color: ${styles.color.shade.DARK};
    font-size: ${styles.typographyScale.TYPE12};
    transition: ${styles.transition.PRIMARY};
`

export {
    StyledSubredditDataWrapper,
    StyledSubredditIcon,
    StyledSubreditListItem,
    StyledSubredditSubtitle,
    StyledSubredditTitle
}