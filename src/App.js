import {React, Component} from 'react'
import {Route, Routes} from 'react-router-dom'

import Home from './components/Home'
import VideoDetail from './components/VideoDetail'
import FashionBeauty from './components/FashionBeauty'
import Gaming from './components/Gaming'
import Learning from './components/Learning'
import Music from './components/Music'
import Shorts from './components/Shorts'
import Movies from './components/Movies'
import Sports from './components/Sports'
import Trending from './components/Trending'
import ChannelDetail from './components/ChannelDetail'
import History from './components/History'
import LikedVideos from './components/LikedVideos'
import WatchLater from './components/WatchLater'
import Login from './components/Login'
import Register from './components/Register'

import ContextObject from './context/contextObject'
import { createGlobalStyle } from 'styled-components'
import './App.css'

const GlobalStyle = createGlobalStyle`
    ::-webkit-scrollbar{
        width: 8px;
    }

    ::-webkit-scrollbar-track{
        background: #0f0f0f;
    }

    ::-webkit-scrollbar-thumb{
        background-color: #6e6b6a;
        border-radius: 7px;
    }

    html{
        scroll-behaviour: smooth;
    }
`

class App extends Component {
    state = {currentCategory: "Home", showSidebar: true}

    changeSearchInput = (value) => {
        this.setState({searchInput: value === "Home" ? "" : value})
    }

    toggleSidebar = () => {
        this.setState(prevState => ({showSidebar: !prevState.showSidebar}))
    }

    changeCategory = (name) => {
        this.setState({currentCategory: name})
    }

    render() {
        const {currentCategory, showSidebar} = this.state;

        return (
            <div className="app-container">
                <GlobalStyle />
                <ContextObject.Provider value={{
                      currentCategory,
                      changeCategory: this.changeCategory,
                      showSidebar,
                      toggleSidebar: this.toggleSidebar,
                }}>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/video/:id" element={<VideoDetail />} />
                        <Route exact path="/Fashion & Beauty" element={<FashionBeauty />} />
                        <Route exact path="/Gaming" element={<Gaming />} />
                        <Route exact path="/Learning" element={<Learning />} />
                        <Route exact path="/Music" element={<Music />} />
                        <Route exact path="/Shorts" element={<Shorts />} />
                        <Route exact path="/Sports" element={<Sports />} />
                        <Route exact path="/Trending" element={<Trending />} />
                        <Route exact path="/Movies" element={<Movies />} />
                        <Route exact path="/channel/:id" element={<ChannelDetail />} />
                        <Route exact path="/History" element={<History />} />
                        <Route exact path="/Liked videos" element={<LikedVideos />} />
                        <Route exact path="/Watch later" element={<WatchLater />} />
                        <Route exact path="/Login" element={<Login />} />
                        <Route exact path="/Register" element={<Register />} />
                    </Routes>
                </ContextObject.Provider>
            </div>
        )
    }
}

export default App