import {
    StyledSubreditPostItem,
    StyledSubredditPostTitle,
    StyledSubredditPostSubtitle,
    StyledSubredditPostImage,
    StyledSubredditDataWrapper
} from './SubredditIPostItemStyles'
import noImage from '../../assets/images/noImage.jpg'
import { LinkSingle } from "models/Links";

interface Props {
    data: LinkSingle,
}
const SubredditPostItem: React.FC<Props> = ({ data }: Props) => {
    console.log(data);
    return (
        <StyledSubreditPostItem
            href={data.data.url}
        >
            <StyledSubredditPostImage src={noImage} />
            <StyledSubredditDataWrapper>
                <StyledSubredditPostTitle>{data.data.title}</StyledSubredditPostTitle>
                <StyledSubredditPostSubtitle>{`${data.data.author}`}</StyledSubredditPostSubtitle>
            </StyledSubredditDataWrapper>
        </StyledSubreditPostItem>
    )
}

export default SubredditPostItem;