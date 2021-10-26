import React from 'react'

/**
* @author
* @function LeftPannel
**/

export const LeftPannel = (props) => {
  return(
        <div className="customer__left-panel">
                            <div className="login-popup">
                                <div className="left-pic">
                                  <img src={props.loginImg} alt="" />
                                </div>
                                <div className="login-popup__info">
                                    <div className="title">
                                        {props.title}
                                    </div>
                                    <div className="desc">
                                        {props.desc}
                                    </div>
                                    {props.isLogin === "true" ? <a href="#">{props.linkText}</a> : null }
                                   
                                </div>
                            </div>
                            <div className="left-pannel-info">
                                <div className="header">
                                    <i class="cus-bus fas fa-bus"></i>
                                    <span className="depart">Hà Nội</span>
                                    <i class="cus-right fas fa-arrow-right"></i>
                                    <span className="destination">Đà Nẵng</span>
                                    <a href="">Chi tiết</a>
                                </div>
                                <div className="main">
                                    <div className="date">
                                         <i class="far fa-clock"></i>
                                         <span> Ngày khởi hành</span> 
                                        <p> Thứ 3, ngày 26 tháng 10 năm 2021</p>
                                    </div>
                                    <div className="bus-branch">
                                         <span> Xe</span>  <spanc className="branch-name">Phương Trang</spanc>
                                    </div>

                                    <div className="time-estimate">
                                        <div className="time-site time-site-start">
                                            <span className="time">7:00</span>
                                            <span className="site">Hà Nội</span>

                                        </div>
                                        <i class="fas fa-caret-right"></i>
                                        <div className="time-site time-site-end">
                                            <span className="time">11:30</span>
                                            <span className="site">Đà Nẵng</span>

                                        </div>
                                        <i class="cus-dot fas fa-circle"></i>
                                        <div className="time-taking-estimate">
                                            11h di chuyển
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
   
   )

 }