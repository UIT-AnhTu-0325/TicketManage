import React from 'react'
import busImg from '../../../asset/img/bus.png'
/**
* @author
* @function TicketDetail
**/

export const TicketDetail = (props) => {
  return(
    <>
        <div className="ticket-detail">
            <img src={busImg} alt="" />
            <div className="ticket-detail__short-info">
                <div className="short-info__heading">
                    <div className="short-info__name">
                        Xe Phương Trang
                    </div>
                    <div className="short-info__price">
                        499.000 VNĐ
                    </div>
                    <div className="short-info__mark">
                       <i class='bx bx-bookmark' ></i>
                    </div>
                </div>
                
                <div className="short-info__desc">
                    Giường nằm 40 chỗ
                </div>
                <div className="short-info__option">
                    <div className="option__quick-see">
                        <span>Xem nhanh</span>
                        <i class='bx bxs-down-arrow' ></i>
                    </div>
                    <div className="option__choose-this custom-btn">
                        <span>Chọn xe</span>
                    </div>
                </div>

            </div>
        </div>
    </>
   )

 }