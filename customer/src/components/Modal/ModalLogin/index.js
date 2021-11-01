import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { login, readProfile } from "../../../actions/userActions";

/**
* @author
* @function ModalLogin
**/

export const ModalLogin = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //register
    const [emailRes, setEmailRes] = useState("");
    const [passwordRes, setPasswordRes] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const history = useHistory();

    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin

    const userProfile = useSelector((state) => state.userProfile)
    const { myProfile } = userProfile

    // const [loading, setLoading] = useState(false);
    // const auth = useSelector((state) => state.auth);

    // useEffect(() => {
    //     if (localStorage.getItem("authToken")) {
    //         history.push("/");
    //     }
    // }, [history]);


    // useEffect(() => {
    //     const userInfo = localStorage.getItem("userInfo");
    //     if (userInfo) {
    //         history.push("/profile");
    //     }
    // }, [history]);

    useEffect(() => {
        if (userInfo && myProfile) {
            history.push("/profile")
        }
    }, [history, userInfo, myProfile])

    // useEffect(() => {
    //     if (myProfile) {
    //         history.push("/")
    //     }
    // }, [history, myProfile])


    const submitHandle = async (e) => {
        e.preventDefault();
        dispatch(login(email, password))
        //dispatch(readProfile())
    };

    const onMyProfile = async (e) => {
        e.preventDefault();
        dispatch(readProfile())
    };

    // const userLogin = async (e) => {
    //     e.preventDefault();
    //     const user = {
    //         email,
    //         password,
    //     };
    //     dispatch(signin(user));
    //     console.log(email, password);
    // };



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
                    <div className="auth__heading">
                        <div className="auth__heading__nav">
                            <p>Trở thành đối tác</p>

                        </div>
                        <div className="auth__heading__signup custom-btn">
                            <i className="fas fa-user"></i>
                            <span>Đăng ký</span>
                        </div>
                    </div>
                    <div className={ auth ===1 ?"auth__content active" : "auth__content"}>
                        <div className="auth__content__welcome">
                            <h3>Welcome Back!</h3>
                            <p>Chưa có tài khoản? <a href="#"  onClick={()=>setAuth(2)}>Đăng ký</a></p>
                        </div>

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
                        </div>


                    </div>



                    <div className={ auth ===2 ?"auth__content active" : "auth__content"}>
                        <div className="auth__content__welcome">
                            <h3>Welcome To 5Ting Bus!</h3>
                            <p>Đã có tài khoản? <a href="#" onClick={()=>setAuth(1)}>Đăng nhập</a></p>
                        </div>

                        <div className="auth__content__form">
                            <form onSubmit={submitHandle}>
                               <p>Nhập họ tên của bạn</p>
                                <div className="input-wrapper-two">
                                    <div className="input-wrapper-auth two-column">
                                        <input
                                            type="text"
                                            className="email"
                                            placeholder="Họ"
                                            id=""
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                    <div className="input-wrapper-auth">
                                        <input
                                            type="text"
                                            className="email"
                                            placeholder="Tên"
                                            id=""
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <p>Email đăng nhập</p>
                                <div className="input-wrapper-auth">
                                    <input
                                        type="email"
                                        className="email"
                                        placeholder="Nhập email của bạn"
                                        id=""
                                        value={emailRes}
                                        onChange={(e) => setEmailRes(e.target.value)}
                                    />
                                </div>
                                <p>Mật khẩu</p>
                                
                                <div className="input-wrapper-auth hide-password">
                                    <input
                                        type="password"
                                        className="email"
                                        placeholder="Nhập mật khẩu của bạn"
                                        id=""
                                        value={passwordRes}
                                        onChange={(e) => setPasswordRes(e.target.value)}
                                    />
                                    <input type="checkbox" />
                                </div>

                                <div className="auth__content__login-btn">
                                    <button className="custom-btn">Đăng ký</button>
                                </div>
                            </form>


                        </div>

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
                                hoặc đăng ký với
                            </p>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )

}