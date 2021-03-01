import { SubredditSingle } from 'models/Subreddit'
import noImage from '../../assets/images/noImage.jpg'

import {
    StyledSearchComponentResult
} from './SearchComponentStyles'

interface Props {
    result: SubredditSingle
}

const SearchResult = ({ result }: Props) => {
    console.log(result)
    const {display_name_prefixed, url, icon_img, description} = result.data
    return(
        <>
           <StyledSearchComponentResult>

               <img src={icon_img || noImage} alt=""/>
                <a href={url}>{display_name_prefixed}</a>
                <p>{`${description.substr(0,85)}...`}</p>
                <hr/>
            </StyledSearchComponentResult>
        </>
    )}

export default SearchResult