import {React, useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {AiFillCheckCircle} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import { fetchFromAPI } from '../../utils/fetchFromAPI';
import { LoaderContainer } from '../Home/styledComponents';
import Footer from '../Footer'
import VideoCard from '../VideoCard';
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import ContextObject from '../../context/contextObject';

import {FailureViewImage, FailureViewHeading, FailureViewPara, FailureViewButton} from '../Home/styledComponents'

import { ChannelDetailContainer, ChanndelDetailVideoListContainer, ChannelDetailScrollContainer, ChannelDetailProfilePara, ChannelDetailTitleContainer, ChannelDetailTitle, ChannelDetailBanner, ChannelDetailProfileContainer, ChannelDetailProfileImage, ChannelDetailProfileRightContainer } from './styledComponents';

const ChannelDetail = () => {
    const apiStatus = {
        initial: "INITIAL",
        progress: "IN_PROGRESS",
        success: "SUCCESS",
        failure: "FAILURE"
    }
     
    const [channelDetailApiStatus, changeStatus] = useState(apiStatus.initial)
    const [channelDetail, setChannelDetail] = useState(null)
    const [channelVideos, setChannelVideos] = useState(null)
    const history = useNavigate();

    const onChangeSearchInput = () => {
        history("/")
    }

    const {id} = useParams();

    const views = (view) => {
        if (view >= 1000000) {
            return Math.floor(view / 1000000) + "M"
        } else {
            return Math.floor(view / 1000) + "K"
        }
    }

    const getChannelDetails = async () => {
        try{
            changeStatus(apiStatus.progress)
            const data = await fetchFromAPI(`channels?part=snippet&id=${id}`)
            setChannelDetail(data.items[0])
            const channelVideos = await fetchFromAPI(`search?channelId=${id}&part=snippet&order=date&maxResults=50`)
            setChannelVideos(channelVideos.items)
            changeStatus(apiStatus.success)
        } catch(error) {
            changeStatus(apiStatus.failure)
        }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        getChannelDetails()
    }, [id])

    const loaderView = () => (
        <LoaderContainer>
            <Loader type={'Rings'} shadow={true} color="#ffffff" height={50} width={50} />
        </LoaderContainer>
    )

    const successRender = () => (
        <>
            <ChannelDetailBanner src={channelDetail.brandingSettings.image.bannerExternalUrl} alt="image" />
            <ChannelDetailProfileContainer>
                <ChannelDetailProfileImage src={channelDetail.snippet.thumbnails.default.url} alt="image" />
                <ChannelDetailProfileRightContainer>
                    <ChannelDetailTitleContainer>
                        <ChannelDetailTitle>{channelDetail.snippet.title}</ChannelDetailTitle>
                        <AiFillCheckCircle size={15} color="#bab6ab" />
                    </ChannelDetailTitleContainer>
                    <ChannelDetailTitleContainer>
                        <ChannelDetailProfilePara>{channelDetail.snippet.customUrl}</ChannelDetailProfilePara>
                        <ChannelDetailProfilePara>{views(channelDetail.statistics.subscriberCount)} subscribers</ChannelDetailProfilePara>
                        <ChannelDetailProfilePara>{channelDetail.statistics.videoCount} videos</ChannelDetailProfilePara>
                    </ChannelDetailTitleContainer>
                    <ChannelDetailProfilePara>{channelDetail.snippet.description}</ChannelDetailProfilePara>
                </ChannelDetailProfileRightContainer>
            </ChannelDetailProfileContainer>
            <ChanndelDetailVideoListContainer>
            {channelVideos.map((each, idx) => <VideoCard key={idx} videoItem={each} />)}
            </ChanndelDetailVideoListContainer>
        </>
    )

    const onClickRetryButton = () => {
        getChannelDetails()
    }

    const failureRender = () => (
        <LoaderContainer>
            <FailureViewImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png" alt="image" />
            <FailureViewHeading>Oops! Something Went Wrong</FailureViewHeading>
            <FailureViewPara>We cannot seem to find the page you are looking for</FailureViewPara>
            <FailureViewButton type="button" onClick={onClickRetryButton}>Retry</FailureViewButton>
        </LoaderContainer>
    )

    const switchRender = () => {
        switch(channelDetailApiStatus) {
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
        <ContextObject.Consumer>
            {value => {
                const {showSidebar} = value;

                return (
                    <>
                        <Navbar onChangeSearchInput={onChangeSearchInput} />
                        <ChannelDetailContainer>
                            <Sidebar />
                            <ChannelDetailScrollContainer width={showSidebar.toString()}>
                                {switchRender()}
                            </ChannelDetailScrollContainer>
                        </ChannelDetailContainer>
                        <Footer />
                    </>
                )
            }}
        </ContextObject.Consumer>
    )
}

export default ChannelDetail