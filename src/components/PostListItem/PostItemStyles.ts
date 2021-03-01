import styled from 'styled-components'
import { styles } from 'styles/values'

const StyledPostItem = styled.a<{ isImage: boolean }>`
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: ${styles.unit.DOUBLE}px;
    background-color: ${styles.color.shade.WHITE};
    margin: 0 ${styles.unit.DOUBLE * 2}px ${styles.unit.DOUBLE * 2}px 0;
    box-shadow: 3px 5px 5px 1px rgba(0,0,0,0.05);
    border-radius: ${styles.borderRadius.PRIMARY};
    text-decoration: none;
    transition: ${styles.transition.PRIMARY};
    flex-wrap: ${props => props.isImage ? 'wrap' : 'nowrap'};
    &:hover {
        margin-left: 6px;
        box-shadow: 3px 5px 5px 1px rgba(0,0,0,0.25);
    }
`

const StyledPostImage = styled.img<{isBig?: boolean }>`
    display: block;
    ${props => !props.isBig
        ?   `width: ${styles.unit.DOUBLE * 10}px;
            height: ${styles.unit.DOUBLE * 10}px;
            border-radius: ${styles.borderRadius.CIRCLE};
            border: 3px solid ${styles.color.shade.NEUTRAL};
            margin-right: ${styles.unit.DOUBLE * 2}px;`

        :   `width: 100%;
            height: auto;
            border-radius: ${styles.borderRadius.PRIMARY};
            margin-bottom: ${styles.unit.DOUBLE * 2}px;`
    }
    
`

const StyledDataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 3;
    justify-content: center;
    max-width: calc(100% - 100px);
`
const StyledPostTitle = styled.h3`
    color: ${styles.color.shade.DARK};
    font-size: ${styles.typographyScale.TYPE16};
    transition: ${styles.transition.PRIMARY};
    margin: ${styles.unit.DOUBLE}px;
`
const StyledPostSubtitle = styled.p`
    color: ${styles.color.shade.DARK};
    font-size: ${styles.typographyScale.TYPE12};
    transition: ${styles.transition.PRIMARY};
    margin: ${styles.unit.DOUBLE}px;
`

const StyledPostAuthor = styled.p`
    color: ${styles.color.shade.DARK};
    font-size: ${styles.typographyScale.TYPE12};
    text-transform: uppercase;
    transition: ${styles.transition.PRIMARY};
    margin: ${styles.unit.ZERO}px ${styles.unit.DOUBLE}px;
    line-height: ${styles.lineHeight.LHEIGHT1_2}; 
`

const StyledDataInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
`

const StyledDataInfoScore = styled.p`
color: ${styles.color.shade.DARK};
font-size: ${styles.typographyScale.TYPE12};
font-weight: ${styles.fontWeight.BOLD};
transition: ${styles.transition.PRIMARY};
margin: ${styles.unit.ZERO}px;
`

export {
    StyledPostItem,
    StyledPostTitle,
    StyledPostImage,
    StyledDataWrapper,
    StyledPostSubtitle,

    StyledPostAuthor,
    StyledDataInfo,
    StyledDataInfoScore
}