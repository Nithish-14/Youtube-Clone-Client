import {React, Component} from 'react';

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import { fetchFromAPI } from '../../utils/fetchFromAPI';

import VideoCard from '../VideoCard';
import Navbar from '../Navbar'
import Footer from '../Footer'
import Sidebar from '../Sidebar'
import ContextObject from '../../context/contextObject';

import { HomeContainer, HomeVideoListContainer, LoaderContainer, HorizontalScrollContainer, RouteHeading, RouteHeadingContainer, FailureViewImage, FailureViewButton, FailureViewHeading, FailureViewPara } from '../Home/styledComponents';

const apiStatus = {
    initial: "INITIAL",
    progress: "IN_PROGRESS",
    success: "SUCCESS",
    failure: "FAILURE"
}

class FashionBeauty extends Component {
    state = {homeVideos: [], apiStatus: apiStatus.initial, searchInput: 'Fashion & Beauty'}

    componentDidMount() {
        this.getVideos()
    }

    getVideos = async () => {
        this.setState({apiStatus: apiStatus.progress})
        const {searchInput} = this.state;

        try{
            const data = await fetchFromAPI(`search?part=snippet&q=${searchInput}&maxResults=50`)
            this.setState({homeVideos: data.items, apiStatus: apiStatus.success})
        } catch (error) {
            this.setState({apiStatus: apiStatus.failure})
        }
          
    }

    onChangeSearchInput = (value) => {
        this.setState({searchInput: value}, this.getVideos)
    }

    successRender = (showSidebar) => {
        const {homeVideos} = this.state;
        return (
        <HomeVideoListContainer width={showSidebar.toString()}>
            {homeVideos.map((each, idx) => <VideoCard key={idx} videoItem={each} />)}
        </HomeVideoListContainer>)
    }

    renderLoaderView = () => (
        <LoaderContainer>
            <Loader type={'Rings'} shadow={true} color="#ffffff" height={50} width={50} />
        </LoaderContainer>
    )

    onClickRetryButton = () => {
        this.getVideos()
    }

    renderFailureView = () => (
        <LoaderContainer>
            <FailureViewImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png" alt="image" />
            <FailureViewHeading>Oops! Something Went Wrong</FailureViewHeading>
            <FailureViewPara>We cannot seem to find the page you are looking for</FailureViewPara>
            <FailureViewButton type="button" onClick={this.onClickRetryButton}>Retry</FailureViewButton>
        </LoaderContainer>
    )

    switchRender = (status, showSidebar) => {
        switch(status) {
            case "IN_PROGRESS":
                return this.renderLoaderView();
            case "SUCCESS":
                return this.successRender(showSidebar);
            case "FAILURE":
                return this.renderFailureView();
            default:
                return null
        }
    } 

    render() {
        const {apiStatus} = this.state;
        return (
            <ContextObject.Consumer>
                {value => {
                    const {showSidebar} = value;

                    return (
                        <>
                            <Navbar onChangeSearchInput={this.onChangeSearchInput} />
                            <HomeContainer>
                                <Sidebar />
                                <HorizontalScrollContainer width={showSidebar.toString()}>
                                    <RouteHeadingContainer>
                                        <RouteHeading>Fashion & Beauty</RouteHeading>
                                    </RouteHeadingContainer>
                                    {this.switchRender(apiStatus, showSidebar)}
                                </HorizontalScrollContainer>
                            </HomeContainer>
                            <Footer />
                        </>
                    )
                }}
            </ContextObject.Consumer>
        )
    }
}

export default FashionBeauty