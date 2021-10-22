import React from 'react'
import avatar from '../../../asset/img/travel.png'

/**
* @author
* @function HeaderLogined
**/

export const HeaderLogined = (props) => {
  return(
    <div>
        <div className="logined-bar">
            <div className="notify">
                 <i class="fas fa-bell"></i>
            </div>

            <div className="setting">
                <i class="fas fa-cog"></i>
            </div>
            
            <div className="profile">
                <div className="profile__avatar">
                    <img src={avatar} alt="" />
                </div>
                <div className="profile__name">
                    <span>Hi, LamHong</span>
                </div>
                <div className="profile__btn-down">
                    <i class="fas fa-chevron-down"></i>
                </div>
            </div>
        </div>
    </div>
   )

 }