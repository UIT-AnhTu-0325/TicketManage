import React from 'react'
import { useState } from 'react'
import { Breadcrumb1 } from '../../components/Breadcrumb-fix'
import { LayoutCustomer } from '../../components/Layout'
import { InputBox } from '../../components/UI/InputBox'
import '../../asset/css/page-css/profile.css'
// img
import userImg from '../../asset/img/user.jpg'
import adsImg from '../../asset/img/ads.png'
import updatingImg from '../../asset/img/updating.png'
/**
* @author
* @function ProfileSetting
**/

export const ProfileSetting = (props) => {

    const [tabState,  setTabState] = useState(1);
    const changeTab = (index) =>{
        setTabState(index);
        console.log(index);
    }

    return(
    <> 
        <LayoutCustomer></LayoutCustomer>
        <Breadcrumb1></Breadcrumb1>

        <div className="profile__wrapper grid--larger-width">
           <div className="profile__left-bar">
              <div className="info">

                  <img src={userImg} alt="" />

                  <span className="name">Lam Hong</span>
                  <span className="rank">Hạng VIP</span>

                  <div className="important-info">
                    <div className="phone-number">
                      <i class='bx bx-phone'></i>
                      <span>0396432406</span>
                    </div>
                    <div className="email">
                      <i class="far fa-envelope"></i> 
                      <span>lamvanhong@gmail.com</span>
                    </div>
                  </div>

                  <div className="manager-ticket">
                      <div className="container quantity-ticket">
                          <span className="quantity">
                              1
                          </span>
                          <div className="quantity-text">
                              Vé
                          </div>
                      </div>

                      <div className="container discount-code">
                          <span className="quantity">
                              3
                          </span>
                          <div className="quantity-text">
                              Mã giảm giá
                          </div>
                      </div>
                      
                  </div>
              </div>

                <img className="ads" src={adsImg} alt="" />
            
           </div>

           
           
           <div className="profile__main-content">
                <div className="profile__tabs">

                        <div className="profile__header">
                            <h3>Cài đặt chung</h3>
                        </div>
                        <div className={tabState===1 ? "tab setting-info active" : "tab setting-info"} onClick={()=> changeTab(1)}>
                            <i class="far fa-user"></i>
                            <span>Cài đặt tài khoản</span>
                        </div>

                        <div className={tabState===2 ? "tab setting-info active" : "tab setting-info"} onClick={()=> changeTab(2)}>
                                <i class="fas fa-bus"></i>
                                <span>Tất cả vé</span>
                        </div>

                        <div className={tabState===3 ? "tab setting-info active" : "tab setting-info"} onClick={()=> changeTab(3)}>
                            <i class="fas fa-star-half-alt"></i>
                            <span>Đánh giá của tôi</span>
                        </div>

                        <div className={tabState===4 ? "tab setting-info active" : "tab setting-info"} onClick={()=> changeTab(4)}>
                            <i class="fas fa-sliders-h"></i>
                            <span>Cài đặt giao diện</span>
                        </div>

                        <div className={tabState===5 ? "tab setting-info active" : "tab setting-info"} onClick={()=> changeTab(5)}>
                            <i class="fas fa-sign-out-alt"></i>
                            <span>Đăng xuất</span>
                        </div>
                </div>
                <div className="profile__main-setting">
                    <div className={tabState===1 ? "content-setting-info active" : "content-setting-info"}>
                        <div className="avatar">
                            <div className="avatar__wrapper">
                                 <img src={userImg} alt="" />
                                 <i class="fas fa-pen-square"></i>
                            </div>
                        </div>
                        <InputBox type="text" title="Họ tên" />
                        <InputBox type="number" title="Số điện thoại" />
                        <InputBox type="email" title="Email" />
                        <div className="btn-save clear">
                            <button className="">Lưu thay đổi</button>
                        </div>
                    </div>

                    <div className={tabState===2 ? "content-setting-info active" : "content-setting-info"}>
                        <div className="avatar">
                            <div className="avatar__wrapper">
                                 <img src={userImg} alt="" />
                                 <i class="fas fa-pen-square"></i>
                            </div>
                        </div>
                        <InputBox type="text" title="Họ tên" />
                       
                        <div className="btn-save clear">
                            <button className="">Lưu thay đổi</button>
                        </div>
                    </div>

                    <div className={tabState===3 ? "content-setting-info active" : "content-setting-info"}>
                        <div className="updating-text">
                            Tính năng đang được update, quay lại sau nhé 
                        </div>
                        <img className="updating" src={updatingImg} alt="" />
                    </div>

                    <div className={tabState===4 ? "content-setting-info active" : "content-setting-info"}>
                        <div className="updating-text">
                            Tính năng đang được update, quay lại sau nhé 
                        </div>
                        <img className="updating" src={updatingImg} alt="" />
                    </div>

                    <div className={tabState===5 ? "content-setting-info active" : "content-setting-info"}>
                        <div className="updating-text">
                            Tính năng đang được update, quay lại sau nhé 
                        </div>
                        <img className="updating" src={updatingImg} alt="" />
                    </div>
                </div>
              
            </div>

           
        </div>
    </>
   )

 }