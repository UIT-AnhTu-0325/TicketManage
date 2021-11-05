import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { login, readProfile } from "../../../actions/userActions";
import Loading from "../../loading";
import ErrorMessage from "../../errorMessage";
import { ModelRegister } from "../ModalRegister/index"


import { RegisterComponent } from "../RegisterComponent";

// img
import facebookImg from '../../../asset/img/social-icon/facebook.png'
import googleImg from '../../../asset/img/social-icon/google.png'
import appleImg from '../../../asset/img/social-icon/apple.png'
/**
* @author
* @function ModalLogin
**/

export const ModalLogin = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showModal, setShowModal] = useState(false);


    //register
    const [emailRes, setEmailRes] = useState("");
    const [passwordRes, setPasswordRes] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const history = useHistory();

    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin)
    const { error, loading, userInfo, success } = userLogin
    //const { userInfo } = userLogin

    const userProfile = useSelector((state) => state.userProfile)
    const { myProfile } = userProfile

    useEffect(() => {
        if (userInfo && myProfile) {
            history.push("/profile")
        }
    }, [history, userInfo, myProfile])

    const submitHandle = async (e) => {
        e.preventDefault();
        dispatch(login(email, password))
        //dispatch(readProfile())
    };

    const onMyProfile = async (e) => {
        e.preventDefault();
        dispatch(readProfile())
    };

    const openModal = () => {
        setShowModal(prev => !prev);
    }
    const setAuthToSignIn= ()=>{
        setAuth(1);
    }



    // Front end
    const [auth, setAuth] = useState(1); // 1 login, 2 is sign up



    return (
        <div>
            <div className="modal-auth open" onClick={props.close, (e) => {
                e.stopPropagation();
            }}>
                <div className="modal-auth__container js-modal-auth__container">
                    <div className="modal-auth__close js-closemodal-btn" onClick={props.close} >
                        <i className="fas fa-times"></i>
                    </div>
                    {/* <div className="auth__heading">
                        <div className="auth__heading__nav">
                            <p>Trở thành đối tác</p>

                        </div>
                        <div className="auth__heading__signup custom-btn" onClick={openModal} >
                            <i className="fas fa-user"></i>
                            <span>Đăng ký</span>
                        </div>
                    </div> */}
                    <div className={auth === 1 ? "auth__content active" : "auth__content"}>
                        <div className="auth__content__welcome">
                            <h3>Welcome Back!</h3>
                            <p>Chưa có tài khoản? <a href="#" onClick={() => setAuth(2)}>Đăng ký</a></p>
                        </div>
                        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                        {loading && <Loading />}
                        {success && (
                            <ErrorMessage variant="success">
                                Logged in successfully
                            </ErrorMessage>
                        )}
                        <div className="auth__content__form">
                            <form onSubmit={submitHandle}>
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
                                <p>Mật khẩu</p>
                                <div className="input-wrapper-auth hide-password">
                                    <input
                                        type="password"
                                        className="email"
                                        placeholder="Nhập mật khẩu của bạn"
                                        id=""
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <input type="checkbox" />
                                </div>
                                <div className="auth__content__option">
                                    <div className="remember-me">
                                        <input type="checkbox" className="custom-checkbox-cicle" />
                                        <span>Ghi nhớ tôi</span>
                                    </div>

                                    <div className="forgot-password">
                                        <a href="#">Quên mật khẩu?</a>
                                    </div>
                                </div>
                                <div className="auth__content__login-btn">
                                    <button className="custom-btn">Đăng nhập</button>
                                </div>

                            </form>


                        </div>
                        <form onSubmit={onMyProfile}>
                            <div className="auth__content__login-btn">
                                <button className="custom-btn">My profile</button>
                            </div>
                        </form>
                        {/* <div className="auth__content__option">
                            <div className="remember-me">
                                <input type="checkbox" className="custom-checkbox-cicle" />
                                <span>Ghi nhớ tôi</span>
                            </div>

                            <div className="forgot-password">
                                <a href="#">Quên mật khẩu?</a>
                            </div>
                        </div>
                        <div className="auth__content__login-btn">
                            <button className="custom-btn">Đăng nhập</button>
                        </div> */}
                        <div className="auth__other-method">
                            <p className="text">
                                hoặc đăng nhập với
                            </p>
                            <div className="method-btn">
                                <img src={facebookImg} alt="" />
                                <img src={googleImg} alt="" />
                                <img src={appleImg} alt="" />
                            </div>
                        </div>


                    </div>



                    <div className={auth === 2 ? "auth__content active" : "auth__content"}>
                        
                       <RegisterComponent setAuth={setAuthToSignIn}/>

                    </div>
                </div>


            </div>

            {showModal ? <ModelRegister close={openModal} /> : null}

        </div>
    )

}