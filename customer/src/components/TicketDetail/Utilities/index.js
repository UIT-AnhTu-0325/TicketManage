import React from 'react'

/**
* @author
* @function TicketUtilities
**/

export const TicketUtilities = (props) => {
  return(
    <div>
        <div className="ticket-utilities">
            <div className="ultility">
                <div className="ultility__header">
                    <span>Những dịch vụ bạn sẽ nhận được</span>
                </div>
                <div className="main">
                    <div className="session-item">
                        <div className="session-icon">
                             <i class="fas fa-thermometer-empty"></i>
                        </div>
                       <div className="session-content">
                            <div className="session-title">
                                    Điều hòa
                            </div>
                            <div className="session-desc">
                                Xe được trang bị hệ thống điều hòa hiện đại
                            </div>
                       </div>
                    </div>

                    <div className="session-item">
                        <div className="session-icon">
                        <i class="fas fa-battery-three-quarters"></i>
                        </div>
                       <div className="session-content">
                            <div className="session-title">
                                    Sạc điện thoại
                            </div>
                            <div className="session-desc">
                                Hỗ trợ sạc pin các dòng điện thoại
                            </div>
                       </div>
                    </div>

                    <div className="session-item">
                        <div className="session-icon">
                          <i class="fas fa-wifi"></i>
                        </div>
                       <div className="session-content">
                            <div className="session-title">
                                   Wifi
                            </div>
                            <div className="session-desc">
                                  Hỗ trợ wifi tốc độ cao trên xe
                            </div>
                       </div>
                    </div>

                    <div className="session-item">
                        <div className="session-icon">
                            <i class="fas fa-tv"></i>
                        </div>
                       <div className="session-content">
                            <div className="session-title">
                                  Tivi
                            </div>
                            <div className="session-desc">
                                  Cùng nhau xem phim trên xe
                            </div>
                       </div>
                    </div>
                </div>

                <div className="ultility__header">
                    <span>Những dịch vụ bạn có thể tùy chọn</span>
                </div>
                <div className="main">
                    <div className="main__list-services">
                        <div className="services__item">
                            <input type="checkbox" defaultChecked className="custom-checkbox-rectangle" />
                            <span>Đồ ăn</span>
                        </div>
                        <div className="services__item">
                            <input type="checkbox" defaultChecked className="custom-checkbox-rectangle" />
                            <span>Mùng mền</span>
                        </div>
                        <div className="services__item">
                            <input type="checkbox" defaultChecked className="custom-checkbox-rectangle" />
                            <span>Ghế Vip</span>
                        </div>
                    </div>
                        
                   
                    
                </div>
            </div>
          

        </div>

    </div>
   )

 }