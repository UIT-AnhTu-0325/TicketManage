import React from 'react'

/**
* @author
* @function ModalLogin
**/

export const ModalLogin = (props) => {
  return(
    <div>
        <div className="modal-auth open" onClick={props.close, (e)=>{
            e.stopPropagation();
        } }>
            <div className="modal-auth__container js-modal-auth__container">
                <div className="modal-auth__close js-closemodal-btn" onClick=  {props.close} >
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
                <div className="auth__content">
                    <div className="auth__content__welcome">
                        <h3>Welcome Back!</h3>
                        <p>Chưa có tài khoản? <a href="">Đăng ký</a></p>
                    </div>
                    
                    <div className="auth__content__form">
                        <form action="">
                            <p>Email đăng nhập</p>
                            <div className="input-wrapper-auth">
                                <input type="email" className="email" placeholder="Nhập email của bạn" id="" />
                            </div>
                            <p>Mật khẩu</p>
                            <div className="input-wrapper-auth hide-password">
                                <input type="password" className="email" placeholder="Nhập mật khẩu của bạn" id="" />
                                <input type="checkbox" /> 
                            </div>
                        </form>

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
                    <div className="auth__other-method">
                        <p className="text">
                            hoặc đăng nhập với
                        </p>
                    </div>


                </div>
            </div>
        </div>
        
    </div>
   )

 }