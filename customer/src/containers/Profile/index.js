import React, { useEffect } from "react";
import { useState } from "react";
import { Breadcrumb1 } from "../../components/Breadcrumb-fix";
import { LayoutCustomer } from "../../components/Layout";
import { InputBox } from "../../components/UI/InputBox";
import "../../asset/css/page-css/profile.css";
// img
import userImg from "../../asset/img/user.jpg";
import adsImg from "../../asset/img/ads.png";
import updatingImg from "../../asset/img/updating.png";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../actions/userActions";
import ErrorMessage from "../../components/errorMessage";
import Loading from "../../components/loading";
import { MyTicket } from "../../components/ProfileComponents/MyTicket";
/**
 * @author
 * @function ProfileSetting
 **/

export const ProfileSetting = (props) => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [file, setFile] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading, error, success, userInfoUpdate } = userUpdate;
  //const { userInfoUpdate } = userUpdate

  const userProfile = useSelector((state) => state.userProfile);
  const { myProfile } = userProfile;

  useEffect(() => {
    document.getElementById("nameId").textContent = localStorage.getItem(
      "firstName"
    );
    document.getElementById("phoneId").textContent = localStorage.getItem(
      "contact"
    );
    document.getElementById("emailId").textContent = localStorage.getItem(
      "email"
    );

    var image = new Image();
    image.onload = function() {
      document.getElementById("avatarId").setAttribute("src", this.src);
    };
    //image.src = myProfile.profile.avatar;

    image.src = localStorage.getItem("avatar");

    var setImage = new Image();
    setImage.onload = function() {
      document.getElementById("setAvatarId").setAttribute("src", this.src);
    };
    //setImage.src = myProfile.profile.avatar;

    setImage.src = localStorage.getItem("avatar");

    // setFirstName(myProfile.profile.account.firstName)
    // setContactNumber(myProfile.profile.account.contactNumber)
    // setEmail(myProfile.profile.account.email)

    setFirstName(localStorage.getItem("firstName"));
    setContactNumber(localStorage.getItem("contact"));
    setEmail(localStorage.getItem("email"));
    // setPic(userInfo.pic)
    // }
  }, [userInfo, myProfile]);

  const [tabState, setTabState] = useState(2);
  const changeTab = (index) => {
    setTabState(index);
    //console.log(index);
  };

  const postDetails = (pics) => {
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "notezipper");
      data.append("cloud_name", "piyushproj");
      fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setAvatar(data.url.toString());
          //console.log(avatar);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
    }
  };

  const update = (e) => {
    e.preventDefault();
    dispatch(
      updateProfile(
        { firstName, email, contactNumber, avatar },
        localStorage.getItem("token")
      )
    );
  };

  return (
    <>
      <LayoutCustomer></LayoutCustomer>
      <Breadcrumb1></Breadcrumb1>

      <div className="profile__wrapper grid--larger-width">
        <div className="profile__main-content">
          <div className="profile__tabs">
            <div className="profile__header">
              <h3>Cài đặt chung</h3>
            </div>
            <div
              className={
                tabState === 1 ? "tab setting-info active" : "tab setting-info"
              }
              onClick={() => changeTab(1)}
            >
              <i class="far fa-user"></i>
              <span>Cài đặt tài khoản</span>
            </div>

            <div
              className={
                tabState === 2 ? "tab setting-info active" : "tab setting-info"
              }
              onClick={() => changeTab(2)}
            >
              <i class="fas fa-bus"></i>
              <span>Tất cả vé</span>
            </div>

            <div
              className={
                tabState === 3 ? "tab setting-info active" : "tab setting-info"
              }
              onClick={() => changeTab(3)}
            >
              <i class="fas fa-star-half-alt"></i>
              <span>Đánh giá của tôi</span>
            </div>

            <div
              className={
                tabState === 4 ? "tab setting-info active" : "tab setting-info"
              }
              onClick={() => changeTab(4)}
            >
              <i class="fas fa-sliders-h"></i>
              <span>Cài đặt giao diện</span>
            </div>

            <div
              className={
                tabState === 5 ? "tab setting-info active" : "tab setting-info"
              }
              onClick={() => {
                localStorage.clear();
              }}
            >
              <i class="fas fa-sign-out-alt"></i>
              <span>Đăng xuất</span>
            </div>
          </div>
          <div className="profile__main-setting">
            <form onSubmit={update}>
              <div
                className={
                  tabState === 1
                    ? "content-setting-info active"
                    : "content-setting-info"
                }
              >
                <div className="avatar">
                  <div className="avatar__wrapper">
                    <img alt="" id="setAvatarId" />
                    <i class="fas fa-pen-square"></i>
                  </div>
                </div>
                <InputBox
                  type="text"
                  title="Tên"
                  placeholder=""
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <InputBox
                  type="number"
                  title="Số điện thoại"
                  placeholder=""
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                />
                <InputBox
                  type="email"
                  title="Email"
                  placeholder=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputBox
                  type="file"
                  title="Avatar"
                  placeholder=""
                  // onChange={event => {
                  //     const file = event.target.files[0]
                  //     setFile(file)
                  //     console.log(file)
                  // }}
                  onChange={(e) => postDetails(e.target.files[0])}
                />
                {loading && <Loading />}
                {success && (
                  <ErrorMessage variant="success">
                    Updated Successfully
                  </ErrorMessage>
                )}
                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                <div className="btn-save clear">
                  <button className="">Lưu thay đổi</button>
                </div>
              </div>
            </form>

            <div
              className={
                tabState === 2
                  ? "content-setting-info active"
                  : "content-setting-info"
              }
            >
              <div className="my-ticket-tab">
                <MyTicket />
              </div>
            </div>

            <div
              className={
                tabState === 3
                  ? "content-setting-info active"
                  : "content-setting-info"
              }
            >
              <div className="updating-text">
                Tính năng đang được update, quay lại sau nhé
              </div>
              <img className="updating" src={updatingImg} alt="" />
            </div>

            <div
              className={
                tabState === 4
                  ? "content-setting-info active"
                  : "content-setting-info"
              }
            >
              <div className="updating-text">
                Tính năng đang được update, quay lại sau nhé
              </div>
              <img className="updating" src={updatingImg} alt="" />
            </div>

            <div
              className={
                tabState === 5
                  ? "content-setting-info active"
                  : "content-setting-info"
              }
            >
              <div className="updating-text">
                Tính năng đang được update, quay lại sau nhé
              </div>
              <img className="updating" src={updatingImg} alt="" />
            </div>
          </div>
        </div>

        <div className="profile__left-bar">
          <div className="info">
            <img src={userImg} alt="" id="avatarId" />

            <span className="name" id="nameId">
              Lam Hong
            </span>
            <span className="rank" id="">
              Hạng VIP
            </span>

            <div className="important-info">
              <div className="phone-number" id="phoneId">
                <i class="bx bx-phone"></i>
                <span>0396432406</span>
              </div>
              <div className="email" id="emailId">
                <i class="far fa-envelope"></i>
                <span>lamvanhong@gmail.com</span>
              </div>
            </div>

            <div className="manager-ticket">
              <div className="container quantity-ticket">
                <span className="quantity">1</span>
                <div className="quantity-text">Vé</div>
              </div>

              <div className="container discount-code">
                <span className="quantity">3</span>
                <div className="quantity-text">Mã giảm giá</div>
              </div>
            </div>
          </div>

          <img className="ads" src={adsImg} alt="" />
        </div>
      </div>
    </>
  );
};
