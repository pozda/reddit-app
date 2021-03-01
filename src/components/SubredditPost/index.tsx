import { SubredditSingle } from "models/Subreddit";
import {
    StyledSubreditItem,
    StyledSubredditTitle,
    StyledSubredditSubtitle,
    StyledSubredditSince,
    StyledSubredditIcon,
    StyledSubredditDataWrapper
} from './SubredditItemStyles'
import noImage from '../../assets/images/noImage.jpg'

interface Props {
    data: SubredditSingle,
    setSelectedSubreddit: (subreddit: string) => void,
}
const SubredditItem: React.FC<Props> = ({ data }: Props) => {
    const date = new Date(data.data.created_utc * 1000).toLocaleDateString("en-GB");
    return (
        <StyledSubreditItem
            to={data.data.url}
        >
            <StyledSubredditIcon src={data.data.icon_img || noImage} />
            <StyledSubredditDataWrapper>
                <StyledSubredditTitle>{data.data.display_name_prefixed}</StyledSubredditTitle>
                <StyledSubredditSubtitle>{`${data.data.description.substr(0,85)}...`}</StyledSubredditSubtitle>
            </StyledSubredditDataWrapper>
            <StyledSubredditSince>SINCE {date}</StyledSubredditSince>
        </StyledSubreditItem>
    )
}

export default SubredditItem;