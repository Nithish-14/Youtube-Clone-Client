import {React, useState, useEffect} from 'react';
import {useParams, Link, useNavigate} from 'react-router-dom';
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {AiFillCheckCircle, AiOutlineLike, AiOutlineShareAlt} from 'react-icons/ai'
import {MdSaveAlt, MdCheck} from 'react-icons/md'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {formatDistanceToNowStrict} from 'date-fns'
import {CgProfile} from 'react-icons/cg'
import { fetchFromAPI } from '../../utils/fetchFromAPI';
import HorizontalScroll from '../HorizontalScroll';
import { LoaderContainer } from '../Home/styledComponents';
import RelatedVideoCard from '../RelatedVideoCard';
import Navbar from '../Navbar'
import Footer from '../Footer'

import {FailureViewImage, FailureViewHeading, FailureViewPara, FailureViewButton} from '../Home/styledComponents'
import { SignInButton } from '../Navbar/styledComponents';
import { VideoDetailContainer, VideoDetailBottomContainer, ViewsPara, LikeButton, RelatedVideoContainer, VideoDescriptionPara, VideoDetailDescriptionContainer, IconButton, VideoDetailChannelRightContainer, SubscribersPara, ChannelNamePara, VideoDetailChannelNameContainer, VideoDetailChannelContainer, VideoDetailTitle, VideoDetailLeftContainer, VideoDetailRightContainer, VideoPlayerContainer } from './styledComponents';
import './index.css'

const relatedStrings = ["avengers", "Black hole", "latest", "trending", "Space"]

const VideoDetail = () => {
    const apiStatus = {
        initial: "INITIAL",
        progress: "IN_PROGRESS",
        success: "SUCCESS",
        failure: "FAILURE"
    }

    const randomNo = Math.floor(Math.random()*4)

    const [saved, updateSave] = useState(false)
    const [liked, updateLike] = useState(false)
    const [videoDetailApiStatus, changeStatus] = useState(apiStatus.initial)
    const [videoDetail, updateVideoDetail] = useState({})
    const [relatedVideos, updateRelatedVideos] = useState([])
    const [showFullSubs, updateSubs] = useState(false)
    const {id} = useParams();
    const history = useNavigate();

    const onChangeSearchInput = (value) => {
        history("/")
    }

    const getVideoDetails = async () => {
        try{
            const data = await fetchFromAPI(`videos?part=snippet&id=${id}`)
            updateVideoDetail(data.items[0])
            const suggestedVideos = await fetchFromAPI(`search?part=snippet&q=${relatedStrings[randomNo]}&maxResults=28`)
            updateRelatedVideos(suggestedVideos.items)
            changeStatus(apiStatus.success)
        } catch(error) {
            changeStatus(apiStatus.failure)
        }
  }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
          changeStatus(apiStatus.progress);
          getVideoDetails()
    }, [id])

    const updateSelectedCategory = (value) => (
        null
    )

    const views = (view) => {
        if (view >= 1000000) {
            return Math.floor(view / 1000000) + "M"
        } else if (view >= 1000) {
            return Math.floor(view / 1000) + "K"
        } else {
            return view
        }
    }


    const ReactPopUpLike = () => (
        <div>
            <Popup
                trigger={
                    <LikeButton type="button" liked={"false"}><AiOutlineLike className="icon" size={22} color="#f1f5f9" />{views(videoDetail.statistics.likeCount)}</LikeButton>
                }
                position="top left"
                closeOnDocumentClick
            >
                <div className="overlay-container">
                    <p className="popup-para">Sign in to like the video</p>
                    <Link to="/Login" className="nav-link-element">
                        <SignInButton type="button" style={{marginLeft: '0px'}}>
                            <CgProfile className="profile-icon" size={23} />
                            Sign in
                        </SignInButton>
                    </Link>
                </div>
            </Popup>
        </div>
    )

    const ReactPopUpSave = () => (
        <div>
            <Popup
                trigger={
                    <IconButton type="button">
                        <MdSaveAlt color="#f1f5f9" size={22} />
                        Save
                    </IconButton>
                }
                position="top left"
                closeOnDocumentClick
            >
                <div className="overlay-container">
                    <p className="popup-para">Sign in to save the video</p>
                    <Link to="/Login" className="nav-link-element">
                        <SignInButton type="button" style={{marginLeft: '0px'}}>
                            <CgProfile className="profile-icon" size={23} />
                            Sign in
                        </SignInButton>
                    </Link>
                </div>
            </Popup>
        </div>
    )

    const onClickShareButton = () => {
        const content = `${videoDetail.snippet.title} - N Tube \n${window.location.href.toString()}`
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(content)}`)
    }

    const successRender = () => {
        const onClickLikeButton = async () => {
            updateLike(prevState => !prevState)
            const jwtToken = Cookies.get('jwt_token')
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${jwtToken}`
                },
                body: JSON.stringify(videoDetail)
            };

            await fetch("https://youtube-clone-ten-iota.vercel.app/user/addlikedvideo", options);
        }

        const onClickSaveButton = async () => {
            updateSave(prevState => !prevState)
            const jwtToken = Cookies.get('jwt_token')
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${jwtToken}`
                },
                body: JSON.stringify(videoDetail)
            };

            await fetch("https://youtube-clone-ten-iota.vercel.app/user/addwatchlater", options);
        }

                return (
                    <>
                        <VideoDetailLeftContainer>
                                <VideoPlayerContainer>
                                    <ReactPlayer controls={true} width="100%" height="100%" playing={true} url={`https://www.youtube.com/watch?v=${id}`} />
                                </VideoPlayerContainer>
                                <VideoDetailBottomContainer>
                                    <VideoDetailTitle>{videoDetail.snippet.title}</VideoDetailTitle>
                                    <VideoDetailChannelContainer>
                                        <VideoDetailChannelNameContainer>
                                            <Link to={`/channel/${videoDetail.snippet.channelId}`} className="channel-name-link-element"><ChannelNamePara>{videoDetail.snippet.channelTitle} <AiFillCheckCircle size={13} color="#bab6ab" /></ChannelNamePara></Link>
                                            <SubscribersPara>{formatDistanceToNowStrict(new Date(videoDetail.snippet.publishedAt))} ago</SubscribersPara>
                                        </VideoDetailChannelNameContainer>
                                        <VideoDetailChannelRightContainer>
                                            {Cookies.get('jwt_token') === undefined ? 
                                               <ReactPopUpLike />
                                             : (<LikeButton type="button" onClick={onClickLikeButton} liked={liked.toString()}><AiOutlineLike className="icon" size={22} color={liked ? "#24a0ed" : "#f1f5f9"} />{views(videoDetail.statistics.likeCount)}</LikeButton>)}
                                            {Cookies.get('jwt_token') === undefined ? 
                                               <ReactPopUpSave />
                                             : (
                                                <IconButton type="button" onClick={onClickSaveButton}>
                                                    {saved ? <MdCheck color="#f1f5f9" size={22} /> : <MdSaveAlt color="#f1f5f9" size={22} />}
                                                    {saved ? "Saved" : "Save"}
                                                </IconButton>
                                             )   
                                            }
                                            <IconButton type="button" onClick={onClickShareButton}><AiOutlineShareAlt className="icon" size={22} color="#f1f5f9" /> Share</IconButton>
                                        </VideoDetailChannelRightContainer>
                                    </VideoDetailChannelContainer>
                                    <ViewsPara>{views(videoDetail.statistics.viewCount)} views</ViewsPara>
                                    <VideoDetailDescriptionContainer>
                                        <VideoDescriptionPara onClick={() => updateSubs(true)}>{showFullSubs ? videoDetail.snippet.description : videoDetail.snippet.description.slice(0,290) + '  ...more'}</VideoDescriptionPara>
                                    </VideoDetailDescriptionContainer>
                                </VideoDetailBottomContainer>
                        </VideoDetailLeftContainer>
                        <VideoDetailRightContainer>
                            <HorizontalScroll updateSelectedCategory={updateSelectedCategory} />
                            <RelatedVideoContainer>
                                {relatedVideos.map((each, idx) => <RelatedVideoCard videoItem={each} key={idx} />)}
                            </RelatedVideoContainer>
                        </VideoDetailRightContainer>
                    </>
                )
           
        }

    const onClickRetryButton = () => {
        getVideoDetails()
    }

    const failureRender = () => (
        <LoaderContainer>
            <FailureViewImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png" alt="image" />
            <FailureViewHeading>Oops! Something Went Wrong</FailureViewHeading>
            <FailureViewPara>We cannot seem to find the page you are looking for</FailureViewPara>
            <FailureViewButton type="button" onClick={onClickRetryButton}>Retry</FailureViewButton>
        </LoaderContainer>
    )

    const loaderView = () => (
        <LoaderContainer>
            <Loader type={'Rings'} shadow={true} color="#ffffff" height={50} width={50} />
        </LoaderContainer>
    )

    const switchRender = () => {
        switch(videoDetailApiStatus) {
            case "IN_PROGRESS":
                return loaderView();
            case "SUCCESS":
                return successRender();
            case "FAILURE":
                return failureRender();
            default:
                return null
        }
    }

    return (
        <>
            <Navbar onChangeSearchInput={onChangeSearchInput} />
            <VideoDetailContainer>
                {switchRender()}
            </VideoDetailContainer>
            <Footer />
        </>
    )

}

export default VideoDetail