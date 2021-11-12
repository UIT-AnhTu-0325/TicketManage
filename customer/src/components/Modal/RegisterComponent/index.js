import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from "../../loading";
import ErrorMessage from "../../errorMessage";
import { register } from "../../../actions/userActions";

// img
import facebookImg from '../../../asset/img/social-icon/facebook.png'
import googleImg from '../../../asset/img/social-icon/google.png'
import appleImg from '../../../asset/img/social-icon/apple.png'
/**
* @author
* @function RegisterComponent
**/


export const RegisterComponent = (props) => {


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [contactNumber, setContactNumber] = useState("");

    const dispatch = useDispatch();

    const userRegister = useSelector((state) => state.userRegister)
    const { error, loading, userInfo, success } = userRegister

    const submitHandle = async (e) => {
        e.preventDefault();
        dispatch(register({ firstName, lastName, email, password, contactNumber , username:"default" }))
    };



  return(
    <React.Fragment>
        <div className="auth__content__welcome">
                            <h3>Welcome To 5Ting Bus!</h3>
                            <p>Đã có tài khoản? <a href="#" onClick={props.setAuth}>Đăng nhập</a></p>

                            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                        {loading && <Loading />}
                        {success && (
                            <ErrorMessage variant="success">
                                Sign Up successfully
                            </ErrorMessage>
                        )}
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

                                <p>Nhập số điện thoại</p>
                                <div className="input-wrapper-auth">
                                    <input
                                        type="number"
                                        className="number"
                                        placeholder="Nhập số điện thoại"
                                        id=""
                                        value={contactNumber}
                                        onChange={(e) => setContactNumber(e.target.value)}
                                    />
                                </div>


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
                            <div className="method-btn">
                                <img src={facebookImg} alt="" />
                                <img src={googleImg} alt="" />
                                <img src={appleImg} alt="" />
                            </div>
                        </div>

    </React.Fragment>
   )

 }