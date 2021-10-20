import React from 'react'
import { TicketDetail } from '../TicketDetail'
/**
* @author
* @function TicketFounded
**/

export const TicketFounded = (props) => {
  return(
    <>
        <div className="ticket__header">
            <div className="ticket__header__title">
                Các chuyến xe đi từ <span>Quảng Nam</span>  đến  <span>Hà Nội</span>
            </div>

            <div className="ticket__header__option">
                <div className="option__item">
                    Tất cả
                </div>
                <div className="option__item active">
                    Dành cho bạn
                </div>
                <div className="option__item">
                    Theo dõi
                </div>
            </div>
        </div>


        <div className="ticket__result">
            <TicketDetail />
            <TicketDetail />
            <TicketDetail />
            <TicketDetail />
            <TicketDetail />
            <TicketDetail />
        </div>


    </>
   )

 }