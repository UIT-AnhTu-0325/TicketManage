import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import Loading from "../../loading";
import ErrorMessage from "../../errorMessage";
import { register } from "../../../actions/userActions";

/**
* @author
* @function ModelRegister
**/

export const ModelRegister = (props) => {

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
        dispatch(register({ firstName, lastName, email, password, contactNumber }))
    };

    return (
        <div>
            <div className="modal-auth open" onClick={props.close, (e) => {
                e.stopPropagation();
                
            }}>
                <div className="modal-auth__container js-modal-auth__container">
                    <div className="modal-auth__close js-closemodal-btn" onClick={props.close} >
                        <i className="fas fa-times"></i>
                    </div>
                    <div className="auth__content">
                        <div className="auth__content__welcome">
                            <h3>Đăng ký tài khoản</h3>
                        </div>
                        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                        {loading && <Loading />}
                        {success && (
                            <ErrorMessage variant="success">
                                Sign Up successfully
                            </ErrorMessage>
                        )}
                        <div className="auth__content__form">
                            <form onSubmit={submitHandle}>
                                <p>Tên</p>
                                <div className="input-wrapper-auth">
                                    <input
                                        type="text"
                                        className="email"
                                        placeholder="Nhập tên của bạn"
                                        id=""
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>
                                <p>Họ</p>
                                <div className="input-wrapper-auth">
                                    <input
                                        type="text"
                                        className="email"
                                        placeholder="Nhập họ của bạn"
                                        id=""
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
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
                                <p>Tên đăng nhập</p>
                                <div className="input-wrapper-auth">
                                    <input
                                        type="text"
                                        className="email"
                                        placeholder="Nhập tên đăng nhập của bạn"
                                        id=""
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <p>Số điện thoại</p>
                                <div className="input-wrapper-auth">
                                    <input
                                        type="number"
                                        className="email"
                                        placeholder="Nhập số điện thoại của bạn"
                                        id=""
                                        value={contactNumber}
                                        onChange={(e) => setContactNumber(e.target.value)}
                                    />
                                </div>
                                <div className="auth__content__login-btn">
                                    <button className="custom-btn">Đăng ký</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}