import React,{useEffect, useRef, useState} from 'react'
import { NavLink } from 'react-router-dom'
import logoImg from "../../asset/img/logo.png"

import sidebarItem from '../../asset/JsonData/sidebar_routes.json'
import { SidebarItem } from './SidebarItem'

import './sidebar.css';
/**
* @author
* @function Sidebar
**/



export const Sidebar = (props) => {

    const activeItem = 1;// sidebarItem.findIndex(item=>item.route = props.location.pathname)
    
    const [currentTab, setCurrentTab] = useState(0);
    const changeTab= (ind)=>{
        setCurrentTab(ind);
      
    }

  
        

    return (
        <div className="sidebar">
            <div className="sidebar__logo">
                <img src={logoImg} alt="logo" />
            </div>

            {
                sidebarItem.map((item, ind) => (
                    <NavLink to={item.route} key={ind}>
                        <SidebarItem
                            title={item.display_name}
                            icon={item.icon}
                            active={ind === currentTab}
                            changeTab={()=>changeTab(ind)}
                        />
                    </NavLink>
                ))
            }

        </div>
    )

}