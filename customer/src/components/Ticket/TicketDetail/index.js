import React from 'react'
import busImg from '../../../asset/img/bus.png'
/**
* @author
* @function TicketDetail
**/

export const TicketDetail = ({info}) => {

  return(
    <>
        <div className="ticket-detail">
            <img src={busImg} alt="" />
            <div className="ticket-detail__short-info">
                <div className="short-info__heading">
                    <div className="short-info__name">
                        {info.enterprise.name}
                    </div>
                    <div className="short-info__price">
                        Giá vé: {info.ticket.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
                    </div>
                    <div className="short-info__mark">
                       <i class='bx bx-bookmark' ></i>
                    </div>
                </div>
                
                <div className="short-info__desc">
                Giờ khởi hành: {info.route.startTime.toFixed(2).toString().replace('.',':')}
                </div>
                <div className="short-info__desc">
                Thời gian di chuyển: {info.route.totalTime / 3600} giờ
                </div>
                <div className="short-info__desc">
                    Loại: {info.ticket.type}
                </div>
                <div className="short-info__desc">
                    Số vé: {info.ticket.quantity}
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