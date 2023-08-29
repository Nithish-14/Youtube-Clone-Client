import {React} from 'react'
import {Link} from 'react-router-dom'

import ContextObject from '../../context/contextObject'

import {GoHomeFill, GoHome, GoClock} from 'react-icons/go'
import { MdHistory} from 'react-icons/md'
import {AiOutlineLike} from 'react-icons/ai'

import {FooterContainer, FooterSubContainer, FooterPara} from './styledComponents'
import './index.css'

const Footer = () => (
    <ContextObject.Consumer>
        {value => {
            const {currentCategory, changeCategory} = value;

            return (
                <FooterContainer>
                    <Link to='/' className="footer-link-element">
                        <FooterSubContainer onClick={() => changeCategory("Home")}>
                            {currentCategory === "Home" ? <GoHomeFill color="#ffffff" size={22} /> : <GoHome color="#ffffff" size={22} />}
                            <FooterPara>Home</FooterPara>
                        </FooterSubContainer>
                    </Link>
                    <Link to="/History" className="footer-link-element">
                        <FooterSubContainer onClick={() => changeCategory("History")}>
                            {currentCategory === "History" ? <MdHistory color="#ffffff" size={22} /> : <MdHistory color="#ffffff" size={22} />}
                            <FooterPara>History</FooterPara>
                        </FooterSubContainer>
                    </Link>
                    <Link to="/Liked videos" className="footer-link-element">
                        <FooterSubContainer onClick={() => changeCategory("Liked videos")}>
                            {currentCategory === "Liked videos" ? <AiOutlineLike color="#ffffff" size={22} /> : <AiOutlineLike color="#ffffff" size={22} />}
                            <FooterPara>Liked videos</FooterPara>
                        </FooterSubContainer>
                    </Link>
                    <Link to="/Watch later" className="footer-link-element">
                        <FooterSubContainer onClick={() => changeCategory("Watch later")}>
                            {currentCategory === "Watch later" ? <GoClock color="#ffffff" size={22} /> : <GoClock color="#ffffff" size={22} />}
                            <FooterPara>Watch later</FooterPara>
                        </FooterSubContainer>
                    </Link>
                </FooterContainer>
            )
        }}
    </ContextObject.Consumer>
)

export default Footer