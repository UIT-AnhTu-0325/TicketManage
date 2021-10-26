import React, { useEffect } from 'react'
import { useState } from 'react'
import { Breadcrumb1 } from '../../components/Breadcrumb-fix'
import { LayoutCustomer } from '../../components/Layout'
import { InputBox } from '../../components/UI/InputBox'
import '../../asset/css/page-css/profile.css'
// img
import userImg from '../../asset/img/user.jpg'
import adsImg from '../../asset/img/ads.png'
import updatingImg from '../../asset/img/updating.png'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { updateProfile } from '../../actions/userActions'
/**
* @author
* @function ProfileSetting
**/

export const ProfileSetting = (props) => {

    const [firstName, setFirstName] = useState("")
    const [email, setEmail] = useState("")
    const [pic, setPic] = useState("")
    const [contactNumber, setContactNumber] = useState("")



    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const userUpdate = useSelector((state) => state.userUpdate)
    const { loading, error, success } = userUpdate

    const userProfile = useSelector((state) => state.userProfile)
    const { myProfile } = userProfile

    console.log(userInfo)
    //console.log(myProfile)

    const history = useHistory()

    useEffect(() => {
        if (!userInfo && !myProfile) {
            history.push("/")
        }
        else {

            document.getElementById("nameId").textContent = myProfile.profile.account.firstName;
            document.getElementById("phoneId").textContent = myProfile.profile.account.contactNumber;
            document.getElementById("emailId").textContent = myProfile.profile.account.email;

            setFirstName(myProfile.profile.account.lastName + " " + myProfile.profile.account.firstName)
            setContactNumber(myProfile.profile.account.contactNumber)
            setEmail(myProfile.profile.account.email)
            // setPic(userInfo.pic)
        }
    }, [history, userInfo, myProfile])


    const [tabState, setTabState] = useState(1);
    const changeTab = (index) => {
        setTabState(index);
        console.log(index);
    }

    const update = (e) => {
        e.preventDefault();
        dispatch(updateProfile({ firstName, email, contactNumber }));
    };

    return (
        <>
            <LayoutCustomer></LayoutCustomer>
            <Breadcrumb1></Breadcrumb1>

            <div className="profile__wrapper grid--larger-width">
                <div className="profile__left-bar">
                    <div className="info">

                        <img src={userImg} alt="" id="picId" />

                        <span className="name" id="nameId">Lam Hong</span>
                        <span className="rank" id="">Hạng VIP</span>

                        <div className="important-info">
                            <div className="phone-number" id="phoneId">
                                <i class='bx bx-phone'></i>
                                <span>0396432406</span>
                            </div>
                            <div className="email" id="emailId">
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
                        <div className={tabState === 1 ? "tab setting-info active" : "tab setting-info"} onClick={() => changeTab(1)}>
                            <i class="far fa-user"></i>
                            <span>Cài đặt tài khoản</span>
                        </div>

                        <div className={tabState === 2 ? "tab setting-info active" : "tab setting-info"} onClick={() => changeTab(2)}>
                            <i class="fas fa-bus"></i>
                            <span>Tất cả vé</span>
                        </div>

                        <div className={tabState === 3 ? "tab setting-info active" : "tab setting-info"} onClick={() => changeTab(3)}>
                            <i class="fas fa-star-half-alt"></i>
                            <span>Đánh giá của tôi</span>
                        </div>

                        <div className={tabState === 4 ? "tab setting-info active" : "tab setting-info"} onClick={() => changeTab(4)}>
                            <i class="fas fa-sliders-h"></i>
                            <span>Cài đặt giao diện</span>
                        </div>

                        <div className={tabState === 5 ? "tab setting-info active" : "tab setting-info"} onClick={() => changeTab(5)}>
                            <i class="fas fa-sign-out-alt"></i>
                            <span>Đăng xuất</span>
                        </div>
                    </div>
                    <div className="profile__main-setting">
                        <form onSubmit={update}>
                            <p>Email đăng nhập</p>
                            <div className="input-wrapper-auth">
                                <input
                                    type="email"
                                    className="email"
                                    placeholder="Nhập email của bạn"
                                    id=""
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="auth__content__login-btn">
                                <button className="custom-btn">Lưu thay đổi</button>
                            </div>
                        </form>
                        <div className={tabState === 1 ? "content-setting-info active" : "content-setting-info"}>
                            <div className="avatar">
                                <div className="avatar__wrapper">
                                    <img src={userImg} alt="" />
                                    <i class="fas fa-pen-square"></i>
                                </div>
                            </div>
                            <InputBox
                                type="text"
                                title="Họ tên"
                            />
                            <InputBox
                                type="number"
                                title="Số điện thoại"
                            />
                            <InputBox
                                type="email"
                                title="Email"
                            />
                            <button type="submit" class="btn btn-primary">
                                Submit
                            </button>
                            <div className="btn-save clear">
                                <button className="">Lưu thay đổi</button>
                            </div>
                        </div>

                        <div className={tabState === 2 ? "content-setting-info active" : "content-setting-info"}>
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

                        <div className={tabState === 3 ? "content-setting-info active" : "content-setting-info"}>
                            <div className="updating-text">
                                Tính năng đang được update, quay lại sau nhé
                            </div>
                            <img className="updating" src={updatingImg} alt="" />
                        </div>

                        <div className={tabState === 4 ? "content-setting-info active" : "content-setting-info"}>
                            <div className="updating-text">
                                Tính năng đang được update, quay lại sau nhé
                            </div>
                            <img className="updating" src={updatingImg} alt="" />
                        </div>

                        <div className={tabState === 5 ? "content-setting-info active" : "content-setting-info"}>
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