import { SubredditSingle } from "models/Subreddit";
import {
    StyledSubreditListItem,
    StyledSubredditTitle,
    StyledSubredditSubtitle,
    StyledSubredditIcon,
    StyledSubredditDataWrapper
} from './SubredditListItemStyles'
import noImage from '../../assets/images/noImage.jpg'

interface Props {
    data: SubredditSingle
}
const SubredditItem: React.FC<Props> = ({ data }: Props) => {
    const {url, icon_img, display_name_prefixed, public_description} = data.data
    return (
        <StyledSubreditListItem
            to={url}
        >
            <StyledSubredditIcon src={icon_img || noImage} />
            <StyledSubredditDataWrapper>
                <StyledSubredditTitle>{display_name_prefixed}</StyledSubredditTitle>
                <StyledSubredditSubtitle>{`${public_description.substr(0,85)}...`}</StyledSubredditSubtitle>
            </StyledSubredditDataWrapper>
        </StyledSubreditListItem>
    )
}

export default SubredditItem;