import React, {FC} from 'react'
import {
    StyledPostItem,
    StyledPostTitle,
    StyledPostSubtitle,
    StyledPostImage,
    StyledDataWrapper,
    StyledPostAuthor,
    StyledDataInfo,
    StyledDataInfoScore
} from './PostItemStyles'
import self from 'assets/images/noImage.jpg'
import nsfw from 'assets/images/nsfw.jpg'
import {LinkSingle} from 'models/Links'
import {
    Conditional, 
    Icon
} from 'components'
import {styles} from 'styles/values'

interface Props {
    data: LinkSingle,
}
const PostItem: FC<Props> = ({data}: Props) => {
    const {url, post_hint, thumbnail, author, title, selftext, score, over_18} = data.data
    const isImage = post_hint === 'image'
    return (
        <StyledPostItem
            href={url}
            isImage={isImage}
        >
            <Conditional condition={isImage}>
                <StyledPostImage src={url} isBig={isImage} />
            </Conditional>

            <Conditional condition={thumbnail === 'nsfw' || thumbnail === 'self'}>
                <StyledPostImage src={`${thumbnail === 'nsfw' ? nsfw : self}`} />
            </Conditional>

            <Conditional condition={!!thumbnail && thumbnail.length > 7}>
                <StyledPostImage src={thumbnail} />
            </Conditional>

            <StyledDataWrapper>
                <StyledPostAuthor>{author}</StyledPostAuthor>
                <StyledPostTitle>{title}</StyledPostTitle>
                <Conditional condition={!!selftext}>
                    <StyledPostSubtitle>{selftext.substr(0, 85)}...</StyledPostSubtitle>
                </Conditional>
            </StyledDataWrapper>
            <StyledDataInfo>
                <StyledDataInfoScore>{score}</StyledDataInfoScore>
                <Conditional condition={!!over_18}>
                    <Icon d={Icon.res.PLUS18} color={styles.color.brand.PRIMARY} />
                </Conditional>
            </StyledDataInfo>
        </StyledPostItem>
    )
}

export default PostItem