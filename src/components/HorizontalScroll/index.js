import {React} from 'react'
import {Link} from 'react-router-dom'

import ContextObject from '../../context/contextObject'

import { SliderItemButton } from './styledComponents';
import './index.css'

const HorizontalScroll = (props) => (
    <ContextObject.Consumer>
        {value => {
            const {currentCategory, changeCategory} = value;
            const {updateSelectedCategory} = props;

            const onClickButton = (value) => {
                changeCategory(value)
                updateSelectedCategory(value) 
            }

            return (
                <div className="slider">
                    <Link className="horizontal-link-element" to="/"><SliderItemButton type="button" active={(currentCategory === "Home").toString()} onClick={() => onClickButton("Home")}>All</SliderItemButton></Link>
                    <Link className="horizontal-link-element" to="/Gaming"><SliderItemButton type="button" active={(currentCategory === "Gaming").toString()} onClick={() => onClickButton("Gaming")}>Gaming</SliderItemButton></Link>
                    <Link className="horizontal-link-element" to="/Trending"><SliderItemButton type="button" active={(currentCategory === "Trending").toString()} onClick={() => onClickButton("Trending")}>Trending</SliderItemButton></Link>
                    <Link className="horizontal-link-element" to="/Fashion"><SliderItemButton type="button" active={(currentCategory === "Fashion").toString()} onClick={() => onClickButton("Fashion")}>Fashion</SliderItemButton></Link>
                    <Link className="horizontal-link-element" to="/Music"><SliderItemButton type="button" active={(currentCategory === "Music").toString()} onClick={() => onClickButton("Music")}>Music</SliderItemButton></Link>
                    <Link className="horizontal-link-element" to="/Sports"><SliderItemButton type="button" active={(currentCategory === "Sports").toString()} onClick={() => onClickButton("Sports")}>Sports</SliderItemButton></Link>
                    <Link className="horizontal-link-element" to="/Learning"><SliderItemButton type="button" active={(currentCategory === "Learning").toString()} onClick={() => onClickButton("Learning")}>Learning</SliderItemButton></Link>
                    <Link className="horizontal-link-element" to="/Movies"><SliderItemButton type="button" active={(currentCategory === "Movies").toString()} onClick={() => onClickButton("Movies")}>Movies</SliderItemButton></Link>
                    <Link className="horizontal-link-element" to="/Beauty"><SliderItemButton type="button" active={(currentCategory === "Beauty").toString()} onClick={() => onClickButton("Beauty")}>Beauty</SliderItemButton></Link>
                </div>
            )
        }}
    </ContextObject.Consumer>
)

export default HorizontalScroll