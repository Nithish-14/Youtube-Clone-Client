import {React, useState, useEffect} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import {CgProfile} from 'react-icons/cg'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Cookies from 'js-cookie'
import VideoCard from '../VideoCard';
import Navbar from '../Navbar'
import Footer from '../Footer'
import Sidebar from '../Sidebar'
import ContextObject from '../../context/contextObject';
import {FailureViewHeading} from '../Home/styledComponents'
import {SignInButton} from '../Navbar/styledComponents'
import {HomeContainer, HomeVideoListContainer, HorizontalScrollContainer, RouteHeading, RouteHeadingContainer, LoaderContainer, FailureViewPara, FailureViewImage, FailureViewButton} from '../Home/styledComponents'

const apiStatus = {
    initial: "INITIAL",
    progress: "IN_PROGRESS",
    success: "SUCCESS",
    failure: "FAILURE",
    signin: "SIGNIN" 
}

const History = () => {
    const [historyVideos, addhistoryVideos] = useState([])
    const [status, updateStatus] = useState(apiStatus.initial)
    const navigate = useNavigate()

    const onChangeSearchInput = () => {
        navigate("/")
    }

    const renderSignIn = () => (
        <LoaderContainer>
            <FailureViewPara>Watch history isn't viewable when signed out</FailureViewPara>
            <Link to="/Login" className="nav-link-element">
                <SignInButton type="button">
                    <CgProfile className="profile-icon" size={23} />
                    Sign in
                </SignInButton>
            </Link>
        </LoaderContainer>
    )

    const renderEmptyHistory = () => (
        <LoaderContainer>
            <FailureViewHeading>No videos in the history yet.</FailureViewHeading>
        </LoaderContainer>
    )

    const renderVideos = async () => {
        updateStatus(apiStatus.progress)
        const jwtToken = Cookies.get('jwt_token')
        const options = {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${jwtToken}`
            },
        };

        const response = await fetch("https://youtube-clone-server-nine.vercel.app/user/history", options);
        if (response.ok) {
            const {historyVideos} = await response.json();
            addhistoryVideos(historyVideos)
            updateStatus(apiStatus.success)
        } else {
            updateStatus(apiStatus.failure)
        }
    }

    useEffect(() => {
        if (Cookies.get('jwt_token') === undefined) {
            updateStatus(apiStatus.signin)
        } else {
            renderVideos()
        }
    }, [])

    const onClickRetryButton = () => {
        renderVideos()
    }

    const renderFailureView = () => (
        <LoaderContainer>
            <FailureViewImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png" alt="image" />
            <FailureViewHeading>Oops! Something Went Wrong</FailureViewHeading>
            <FailureViewPara>We cannot seem to find the page you are looking for</FailureViewPara>
            <FailureViewButton type="button" onClick={onClickRetryButton}>Retry</FailureViewButton>
        </LoaderContainer>
    )

    const renderLoaderView = () => (
        <LoaderContainer>
            <Loader type={'Rings'} shadow={true} color="#ffffff" height={50} width={50} />
        </LoaderContainer>
    )

    const renderSuccessView = () => {
        if (historyVideos.length === 0) {
            return renderEmptyHistory()
        } else {
            return historyVideos.map((each, idx) => <VideoCard key={idx} videoItem={each} />)
        }
    }

    const switchRender = () => {
        switch (status) {
            case 'IN_PROGRESS':
                return renderLoaderView();
            case "SUCCESS":
                return renderSuccessView();
            case "FAILURE":
                return renderFailureView();
            case "SIGNIN":
                return renderSignIn()
            default:
                return null;
        }
    }


    return (
        <ContextObject.Consumer>
            {value => {
                const {showSidebar} = value;

                return (
                    <> 
                        <Navbar onChangeSearchInput={onChangeSearchInput} />
                        <HomeContainer>
                            <Sidebar />
                            <HorizontalScrollContainer width={showSidebar.toString()}>
                                <RouteHeadingContainer>
                                    <RouteHeading>History</RouteHeading>
                                </RouteHeadingContainer>
                                <HomeVideoListContainer>
                                    {switchRender()}
                                </HomeVideoListContainer>
                            </HorizontalScrollContainer>
                        </HomeContainer>
                        <Footer />
                    </>
                )
            }}
        </ContextObject.Consumer>
    )
}

export default History