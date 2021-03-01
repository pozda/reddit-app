import { SubredditSingle } from "models/Subreddit";
import {
    StyledSubreditItem,
    StyledSubredditTitle,
    StyledSubredditSubtitle,
    StyledSubredditIcon,
    StyledSubredditDataWrapper
} from './SubredditItemStyles'
import noImage from '../../assets/images/noImage.jpg'

interface Props {
    data: SubredditSingle
}
const SubredditItem: React.FC<Props> = ({ data }: Props) => {
    return (
        <StyledSubreditItem
            to={data.data.url}
        >
            <StyledSubredditIcon src={data.data.icon_img || noImage} />
            <StyledSubredditDataWrapper>
                <StyledSubredditTitle>{data.data.display_name_prefixed}</StyledSubredditTitle>
                <StyledSubredditSubtitle>{`${data.data.description.substr(0,85)}...`}</StyledSubredditSubtitle>
            </StyledSubredditDataWrapper>
        </StyledSubreditItem>
    )
}

export default SubredditItem;