import React from 'react'
import '../../../asset/css/component-css/maincontent.css'

import endow1 from '../../../asset/img/endow/endow1.png'
import endow2 from '../../../asset/img/endow/endow2.png'
import endow3 from '../../../asset/img/endow/endow3.png'

import feature1 from '../../../asset/img/feature/feature1.png'
import feature2 from '../../../asset/img/feature/feature2.png'
import feature3 from '../../../asset/img/feature/feature3.png'

import banner1 from '../../../asset/img/banner/bannerbus1.jpg'


/**
* @author
* @function MainContent
**/

export const MainContent = (props) => {
    return (
        <div>
            <div className="grid-1000">
                <div className="main">
                    <h3>Ưu đãi nổi bật</h3>

                    <div className="slider-endow">
                        <div className="item">
                            <img src={endow1} alt="a1" />
                        </div>
                        <div className="item">
                            <img src={endow2} alt="a2" />
                        </div>
                        <div className="item">
                            <img src={endow3} alt="a3" />
                        </div>
                    </div>
                </div>


                <div className="main">
                    <h3>Tính năng nổi bật</h3>

                    <div className="slider-feature">
                        <div className="item">
                            <img src={feature1} alt="" />
                            <div className="feature-info">
                                <h3>Cá nhân hóa tìm kiếm</h3>
                                <p>5000+ tuyến đường, 2000+ nhà xe,
                                    5000+ đại lý trên khắp cả nước.
                                    Chọn xe yêu thích cực nhanh.
                                </p>
                            </div>
                        </div>


                        <div className="item">
                            <img src={feature2} alt="" />
                            <div className="feature-info">
                                <h3>Cá nhân hóa tìm kiếm</h3>
                                <p>5000+ tuyến đường, 2000+ nhà xe,
                                    5000+ đại lý trên khắp cả nước.
                                    Chọn xe yêu thích cực nhanh.
                                </p>
                            </div>
                        </div>


                        <div className="item">
                            <img src={feature3} alt="" />
                            <div className="feature-info">
                                <h3>Cá nhân hóa tìm kiếm</h3>
                                <p>5000+ tuyến đường, 2000+ nhà xe,
                                    5000+ đại lý trên khắp cả nước.
                                    Chọn xe yêu thích cực nhanh.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="main">
                    <div className="banner1">
                        <img src={banner1} alt="" />
                        <div className="banner1-box">
                            <h3>Trải nghiệm tìm xe tuyệt vời</h3>
                            <div className="item-text">
                                <i class='bx bx-check'></i>
                                 Đặt vé dễ dàng chỉ với vài thao tác
                            </div>

                            <div className="item-text">
                                <i class='bx bx-check'></i>
                                Hỗ trợ tìm kiếm nhanh bằng cách đăng nhập
                            </div>

                            <div className="item-text">
                                <i class='bx bx-check'></i>
                                Hỗ trợ nhiều dịch vụ 
                            </div>

                            <div className="btn-booking">
                                Đặt ngay
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}