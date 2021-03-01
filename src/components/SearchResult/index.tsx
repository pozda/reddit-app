import { SubredditSingle } from 'models/Subreddit'
import noImage from '../../assets/images/noImage.jpg'

import {
    StyledSearchResult,
    StyledSearchResultContainer,
    StyledSearchResultImage,
    StyledSearchResultTitle,
    StyledSearchResultDescription,
    StyledSearchResultTitleAndSubtitle
} from './SearchResultStyles'

interface Props {
    result: SubredditSingle
}

const SearchResult = ({ result }: Props) => {
    console.log(result)
    const { display_name_prefixed, url, icon_img, public_description, banner_img, banner_background_image, header_img } = result.data
    return (
        <>
            <StyledSearchResult style={{backgroundImage: `url(${banner_img || banner_background_image || header_img})`}} href={url}>
                <StyledSearchResultContainer>
                <StyledSearchResultImage src={icon_img || noImage} alt={display_name_prefixed} />
                    <StyledSearchResultTitleAndSubtitle>
                        <StyledSearchResultTitle>{display_name_prefixed}</StyledSearchResultTitle>
                        <StyledSearchResultDescription>{`${public_description?.substr(0, 85)}...`}</StyledSearchResultDescription>
                    </StyledSearchResultTitleAndSubtitle>
                </StyledSearchResultContainer>
            </StyledSearchResult>
        </>
    )
}

export default SearchResult