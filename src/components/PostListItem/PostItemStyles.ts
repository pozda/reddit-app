import styled from 'styled-components'
import {styles} from 'styles/values'

const StyledPostItem = styled.div<{ isImage: boolean }>`
    display: flex;
    flex-wrap: ${props => props.isImage ? 'wrap' : 'nowrap'};
    justify-content: space-between;
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
        box-shadow: 3px 5px 5px 1px rgba(0,0,0,0.25);
    }
`

const StyledPostImage = styled.img<{isBig?: boolean }>`
    display: block;
    ${props => !props.isBig
        ?   `width: ${styles.unit.DOUBLE * 10}px;
            height: ${styles.unit.DOUBLE * 10}px;
            margin-right: ${styles.unit.DOUBLE * 2}px;
            border-radius: ${styles.borderRadius.CIRCLE};
            border: 3px solid ${styles.color.shade.NEUTRAL};`

        :   `width: 100%;
            height: auto;
            margin-bottom: ${styles.unit.DOUBLE * 2}px;
            border-radius: ${styles.borderRadius.PRIMARY};`
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
    margin: ${styles.unit.DOUBLE}px;
    color: ${styles.color.shade.DARK};
    font-size: ${styles.typographyScale.TYPE16};
    transition: ${styles.transition.PRIMARY};
`
const StyledPostSubtitle = styled.p`
    margin: ${styles.unit.DOUBLE}px;
    color: ${styles.color.shade.DARK};
    font-size: ${styles.typographyScale.TYPE12};
    transition: ${styles.transition.PRIMARY};
`

const StyledPostAuthor = styled.p`
    margin: ${styles.unit.ZERO}px ${styles.unit.DOUBLE}px;
    color: ${styles.color.shade.DARK};
    font-size: ${styles.typographyScale.TYPE12};
    line-height: ${styles.lineHeight.LHEIGHT1_2}; 
    text-transform: uppercase;
    transition: ${styles.transition.PRIMARY};
`

const StyledDataInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
`

const StyledDataInfoScore = styled.p`
    margin: ${styles.unit.ZERO}px;
    color: ${styles.color.shade.DARK};
    font-size: ${styles.typographyScale.TYPE12};
    font-weight: ${styles.fontWeight.BOLD};
    transition: ${styles.transition.PRIMARY};
`

export {
    StyledDataInfo,
    StyledDataInfoScore,
    StyledDataWrapper,
    StyledPostAuthor,
    StyledPostImage,
    StyledPostItem,
    StyledPostSubtitle,
    StyledPostTitle
}