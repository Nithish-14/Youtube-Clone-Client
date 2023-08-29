import {React} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {formatDistanceToNowStrict} from 'date-fns'

import {AiFillCheckCircle} from 'react-icons/ai'

import ContextObject from '../../context/contextObject'

import { VideoListElement, VideoPublishPara, VideoChannelTitle, VideoThumbnail, ChannelTitleContainer, VideoContentContainer, VideoTitlePara } from './styledComponents'
import './index.css'

const VideoCard = ({videoItem}) => {
    const {id, snippet} = videoItem;

    const onClickVideoItem = async () => {
        const jwtToken = Cookies.get('jwt_token')
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${jwtToken}`
                },
                body: JSON.stringify(videoItem)
            };

            const response = await fetch("https://youtube-clone-server-9svx.vercel.app/user/addhistory", options);
            console.log(await response.json()) 
    }
    
    return (
        <ContextObject.Consumer>
            {value => {
                const {showSidebar} = value;

                return (
                    <Link to={`/video/${id.videoId}`} className="video-card-link-element">
                        <VideoListElement sidebar={showSidebar.toString()} width={snippet.thumbnails.medium.width} onClick={onClickVideoItem}>
                            <VideoThumbnail sidebar={showSidebar.toString()} height={snippet.thumbnails.medium.height} src={snippet.thumbnails.medium.url} alt="image" />
                            <VideoContentContainer>
                                <VideoTitlePara>{snippet.title}</VideoTitlePara>
                                <ChannelTitleContainer>
                                    <Link to={`/channel/${snippet.channelId}`} className="video-card-link-element"><VideoChannelTitle>{snippet.channelTitle}</VideoChannelTitle></Link>
                                    <AiFillCheckCircle size={13} color="#bab6ab" />
                                </ChannelTitleContainer>
                                <VideoPublishPara>{formatDistanceToNowStrict(new Date(snippet.publishedAt))} ago</VideoPublishPara>
                            </VideoContentContainer>
                        </VideoListElement>
                    </Link>
                )
            }}
        </ContextObject.Consumer>
    )
}

export default VideoCard