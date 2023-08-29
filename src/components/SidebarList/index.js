import React from 'react'
import {Link} from 'react-router-dom'

import ContextObject from '../../context/contextObject';

import { SidebarListElement, SidebarPara } from './styledComponents'
import './index.css'

const SidebarList = (props) => {
    const {item} = props;
    const {name, icon} = item;
    
    return (
        <ContextObject.Consumer>
            {value => {
                const {currentCategory, changeCategory} = value;

                return (
                    <Link className="sidebar-link-element" to={name !== "Home" ? `/${name}` : '/'}>
                        <SidebarListElement active={(currentCategory === name).toString()} onClick={() =>changeCategory(name)}>
                            <>{icon}</>
                            <SidebarPara>{name}</SidebarPara>
                        </SidebarListElement>
                    </Link>
                )
            }}
        </ContextObject.Consumer>
    )
};

export default SidebarList