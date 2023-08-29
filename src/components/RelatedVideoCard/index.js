import {React} from 'react'
import {Link} from 'react-router-dom'
import {AiFillCheckCircle} from 'react-icons/ai'
import {formatDistanceToNowStrict} from 'date-fns'

import { RelatedVideoChannelTitle, RelatedVideoChildContainer, RelatedVideoImage, RelatedVideoContentContainer, RelatedVideoPublishPara, RelatedVideoTitle, RelatedVideoChannelTitleContainer } from './styledComponents'

const RelatedVideoCard = ({videoItem}) => {
    const {id, snippet} = videoItem;

    return (
        <Link to={`/video/${id.videoId}`} className="channel-name-link-element">
            <RelatedVideoChildContainer>
                <RelatedVideoImage src={snippet.thumbnails.default.url} alt="image" />
                <RelatedVideoContentContainer>
                    <RelatedVideoTitle>{snippet.title.slice(0,65)}{snippet.title.length >= 65 ? "..." : ""}</RelatedVideoTitle>
                    <RelatedVideoChannelTitleContainer>
                        <Link to={`/channel/${snippet.channelId}`} className="video-card-link-element"><RelatedVideoChannelTitle>{snippet.channelTitle}</RelatedVideoChannelTitle></Link>
                        <AiFillCheckCircle size={14} color="#bab6ab" />
                    </RelatedVideoChannelTitleContainer>
                    <RelatedVideoPublishPara>{formatDistanceToNowStrict(new Date(snippet.publishedAt))} ago</RelatedVideoPublishPara>
                </RelatedVideoContentContainer>
            </RelatedVideoChildContainer>
        </Link>
    )
}

export default RelatedVideoCard