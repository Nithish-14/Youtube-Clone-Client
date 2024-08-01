import {React} from 'react'

import {GoHomeFill, GoClock} from 'react-icons/go'
import {BiSolidVideos, BiMoviePlay, BiCopyright} from 'react-icons/bi'
import {BsFire} from 'react-icons/bs'
import {TfiCup} from 'react-icons/tfi'
import {GiHanger} from 'react-icons/gi'
import {SiYoutubegaming} from 'react-icons/si'
import {PiMusicNote} from 'react-icons/pi'
import { MdHistory } from 'react-icons/md'
import {AiOutlineLike, AiOutlineBulb} from 'react-icons/ai'

import ContextObject from '../../context/contextObject'
import SidebarList from '../SidebarList'

import { SidebarContainer, CopyRightPara, SpanElement, SidebarBottomPara, SidebarHeading, SidebarListContainer} from './styledComponents';

const category1 = [
    {
        name: "Home",
        icon: <GoHomeFill color="#ffffff" size={22} />
    },
    {
        name: "Shorts",
        icon: <BiSolidVideos color="#ffffff" size={22} />
    },
]

const category2 = [
    {
        name: "History",
        icon: <MdHistory color="#ffffff" size={22} />
    },
    {
        name: "Liked videos",
        icon: <AiOutlineLike color="#ffffff" size={22} />
    },
    {
        name: "Watch later",
        icon: <GoClock color="#ffffff" size={22} />
    },
]


const category4 = [
    {
        name: "Trending",
        icon: <BsFire color="#ffffff" size={22} />
    },
    {
        name: "Music",
        icon: <PiMusicNote color="#ffffff" size={22} />
    },
    {
        name: "Movies",
        icon: <BiMoviePlay color="#ffffff" size={22} />
    },
    {
        name: "Gaming",
        icon: <SiYoutubegaming color="#ffffff" size={22} />
    },
    {
        name: "Sports",
        icon: <TfiCup color="#ffffff" size={22} />
    },
    {
        name: "Learning",
        icon: <AiOutlineBulb color="#ffffff" size={22} />
    },
    {
        name: "Fashion & Beauty",
        icon: <GiHanger color="#ffffff" size={22} />
    },
]

const Sidebar = () => (
    <ContextObject.Consumer>
        {value => {
            const {showSidebar} = value;

            return (
                <SidebarContainer width={showSidebar.toString()}>
                    <SidebarListContainer>
                        {category1.map(each => <SidebarList key={each.name} item={each} />)}
                    </SidebarListContainer>
                    <SidebarListContainer>
                    {category2.map(each => <SidebarList key={each.name} item={each} />)}
                    </SidebarListContainer>
                    <SidebarListContainer>
                        <SidebarHeading>Explore</SidebarHeading>
                        {category4.map(each => <SidebarList key={each.name} item={each} />)}
                    </SidebarListContainer>
                    <SidebarListContainer>
                        <SidebarBottomPara>This website is completely a cloned version of YouTube built for an educational purpose.</SidebarBottomPara>
                        <CopyRightPara><BiCopyright color="#757272"/><SpanElement>2023</SpanElement> NITHISH<br /> All Rights Reserved.</CopyRightPara>
                    </SidebarListContainer>
                </SidebarContainer>
            )
        }}
    </ContextObject.Consumer>
)

export default Sidebar
