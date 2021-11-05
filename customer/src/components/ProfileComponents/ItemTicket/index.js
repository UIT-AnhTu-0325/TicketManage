import React from 'react'
import '../../../asset/css/component-css/itemTicket.css'

/**
* @author
* @function 
**/

export const ItemTicket = (props) => {
  return(
    <React.Fragment>
        <div className="profile__item-ticket">
            <div className="image-type">
              <i class='bx bxs-bus' ></i>
            </div>

            <div className="main">
                <div className="namebus">
                    Xe phương Trang
                </div>
                <div className="location">
                    Từ <span>Hà Nội</span> đến <span>Sài Gòn</span>
                </div>
                <div className="time">
                    <span className="start">20:00</span>
                    <i class='bx bx-right-arrow' ></i>
                    <span className="end">1:00</span>
                </div>
            </div>

            <div className="right">
                <div className="price">
                    560.000 vnđ
                </div>
                <div className="btn">
                    Chi tiết
                </div>
            </div>
        </div>
    </React.Fragment>
   )

 }