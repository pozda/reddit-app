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
import noImage from 'assets/images/noImage.jpg'
import nsfw from 'assets/images/nsfw.jpg'
import {LinkSingle} from 'models/Links'
import {Conditional, Icon} from 'components'
import {styles} from 'styles/values'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import {Carousel} from 'react-responsive-carousel'


interface Props {
  data: LinkSingle;
}
const PostItem: FC<Props> = ({data}: Props) => {
    const {
        url,
        post_hint,
        thumbnail,
        author,
        title,
        selftext,
        score,
        over_18,
        is_gallery,
        gallery_data,
        media_metadata
    } = data.data
    const isImage = post_hint === 'image'
    return (
        <StyledPostItem isImage={isImage || is_gallery}>
            <Conditional condition={isImage}>
                <StyledPostImage src={url} isBig={isImage} />
            </Conditional>

            <Conditional condition={is_gallery === true}>    
                <Carousel>
                    {gallery_data?.items.map((picture, index) => {

                        let image = undefined

                        if(media_metadata[picture.media_id]) {
                            if(media_metadata[picture.media_id]['p']) {
                                if(media_metadata[picture.media_id]['p'][3]) {
                                    if(media_metadata[picture.media_id]['p'][3]['u']){
                                        image = media_metadata[picture.media_id]['p'][3]['u'].replace('preview', 'i')
                                    }
                                }
                            }
                        }
                        
                        return (image !==undefined 
                            ?
                            <div key={index} style={{width: '100%'}}>
                                <img src={image} />
                            </div>
                            : <div> no pics for you</div>
                        )
                    })}
                </Carousel>
            </Conditional>

            <a href={url}>
                <Conditional condition={thumbnail === 'nsfw' || thumbnail === 'noImage'}>
                    <StyledPostImage src={`${thumbnail === 'nsfw' ? nsfw : noImage}`} />
                </Conditional>
                <Conditional condition={!!thumbnail && thumbnail.length > 7}>
                    <StyledPostImage src={thumbnail} />
                </Conditional>
            </a>
            
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