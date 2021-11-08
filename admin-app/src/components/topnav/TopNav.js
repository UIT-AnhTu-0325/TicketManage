import React from 'react'
import { DropDown } from '../dropdown/DropDown'
import './topnav.css'
import Link from 'react-router-dom'

import userImg from  '../../asset/img/user.jpg'
import notifications from '../../asset/JsonData/notification.json'
import userMenu from '../../asset/JsonData/user_menus.json'

/**
* @author
* @function TopNav
**/

export const TopNav = (props) => {

    const currentUser = {
        displayName : "Hong Admin",
        image: userImg
    }

    const renderUserToggle = (user) =>(
        <div className="topnav__right-user">
            <div className="topnav__right-user__img">
                <img src={userImg} alt="" />
            </div>

            <div className="topnav__right-user__name">
                {user.displayName}
            </div>
        </div>
    )
    
    return (
        <div className="topnav">
            <div className="topnav__search">
                <input type="text" placeholder='Search ...' />
                <i className="bx bx-search"></i>
            </div>

            <div className="topnav__right">
                <div className="topnav__right-item">
                    <DropDown
                       customToggle = {() => renderUserToggle(currentUser)}
                       contentData= {userMenu}
                       renderItems="true"
                    />
                </div>


                <div className="topnav__right-item">
                    <DropDown
                        icon='bx bx-bell'
                        badge='12'
                        contentData= {notifications}
                        renderItems ="true"
                        renderFooter="true"
                    />
                </div>

                <div className="topnav__right-item">
                   
                </div>
            </div>
        </div>
    )

}