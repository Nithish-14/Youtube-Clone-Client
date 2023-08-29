import {React, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {RxHamburgerMenu} from 'react-icons/rx'
import {TbBrandYoutubeKids} from 'react-icons/tb'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsThreeDotsVertical, BsFillMicFill} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import {BiArrowBack} from 'react-icons/bi'

import ContextObject from '../../context/contextObject'

import { NavBarElement, LogoHeading, SearchButton,
 LogoContainer, SearchInput, SignInButton,
  ToggleButton, SearchContainer, LogoContainerMobile,
LogoContainerLaptop, HamToggleButton } from './styledComponents';
import './index.css'

const Navbar = (props) => {
    const [showSearchBar, toggleSearchBar] = useState(false)
    const [searchValue, changeSearchValue] = useState("")
    const navigate = useNavigate();
    const onKeyDownValue = (event) => {
          const {onChangeSearchInput} = props;

          if (event.key === "Enter") {
              document.getElementById("searchInput").blur()
              onChangeSearchInput(searchValue)
          } 
    }

    const onClickSignoutButton = () => {
        Cookies.remove('jwt_token');
        navigate("/Login")
    }

    const ReactPopUpSignout = () => (
        <div>
            <Popup
                trigger={
                    <button type="button" style={{backgroundColor: 'transparent', border: 'none', cursor: 'pointer'}}><CgProfile color="#3495eb" style={{marginLeft: '20px'}} size={30} /></button>
                }
                position="bottom right"
                closeOnDocumentClick
            >
                <div className="overlay-container">
                    <p className="popup-para">Are you sure you want to sign out?</p>
                    <Link to="/Login" className="nav-link-element">
                        <SignInButton type="button" style={{marginLeft: '0px'}} onClick={onClickSignoutButton}>  
                            Sign out
                        </SignInButton>
                    </Link>
                </div>
            </Popup>
        </div>
    )
     
    const mobileNavbar = () => (
        <ContextObject.Consumer>
            {value => {
                const {toggleSidebar} = value;
                const {onChangeSearchInput} = props;

                return (
                    <>
                        <LogoContainer>
                            <HamToggleButton type="button" onClick={() => toggleSidebar()}><RxHamburgerMenu color="white" size={23} /></HamToggleButton>
                            <Link className="nav-link-element" to="/">
                                <LogoContainer>
                                    <TbBrandYoutubeKids className="youtube-logo" color="red" size={37} />
                                    <LogoHeading>N Tube</LogoHeading>
                                </LogoContainer>
                            </Link>
                        </LogoContainer>
                        <LogoContainerMobile>
                            <ToggleButton type="button" onClick={() => toggleSearchBar(prevState => !prevState)}><AiOutlineSearch color="white" size={23} /></ToggleButton>
                            <BsFillMicFill className="mic-icon-primary" color="white" size={18} />
                        </LogoContainerMobile>
                        <LogoContainerLaptop>
                            <SearchContainer>
                                <SearchInput id="searchInput" value={searchValue} placeholder="Search" onKeyDown={onKeyDownValue} onChange={(event) => changeSearchValue(event.target.value)} type="search" />
                                <SearchButton type="button" onClick={() => onChangeSearchInput(searchValue)}><AiOutlineSearch color="white" size={23} /></SearchButton>
                            </SearchContainer>
                            <BsFillMicFill className="mic-icon-primary" color="white" size={18} />
                        </LogoContainerLaptop>
                        <LogoContainer>
                            <BsThreeDotsVertical color="white" size={20} />
                            {Cookies.get("jwt_token") === undefined ? 
                                (<Link to="/Login" className="nav-link-element">
                                    <SignInButton type="button">
                                        <CgProfile className="profile-icon" size={23} />
                                        Sign in
                                    </SignInButton>
                                </Link>
                                ) : 
                                (
                                    ReactPopUpSignout()
                                )
                            }
                        </LogoContainer>
                    </>
                )
            }}
        </ContextObject.Consumer> 
    )

    const mobileNavbarSearch = () => {
        const {onChangeSearchInput} = props;

        return (
            <>
                <ToggleButton type="button" onClick={() => toggleSearchBar(prevState => !prevState)}>
                    <BiArrowBack color="#fff" size={23} />
                </ToggleButton>
                <SearchContainer>
                    <SearchInput id="searchInput" value={searchValue} placeholder="Search" onKeyDown={onKeyDownValue}  onChange={(event) => changeSearchValue(event.target.value)} type="search" />
                    <SearchButton type="button" onClick={() => onChangeSearchInput(searchValue)}><AiOutlineSearch color="white" size={23} /></SearchButton>
                </SearchContainer>
                <BsFillMicFill className="mic-icon" color="white" size={18} />
            </>
        )
    }


    
        
    return (
        <NavBarElement>
            {showSearchBar ? mobileNavbarSearch() : mobileNavbar()}
        </NavBarElement>
    )

}

export default Navbar