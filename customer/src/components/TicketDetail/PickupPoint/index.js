import React from 'react'
import '../../../asset/css/TicketDetail/pickupPoint.css'

/**
* @author
* @function PickUpPoint
**/

export const PickUpPoint = (props) => {
  return(
    <div>
        <div className="pickup-dropoff">
            <div className="note">
                <p className="note__title">
                    Lưu ý:
                </p>
                <p className="note__desc">
                     Các mốc thời gian đón, trả bên dưới là thời gian dự kiến. <br/>
                    Lịch này có thể thay đổi tùy tình hình thưc tế.
                </p>
            </div>
            <div className="pickup-dropoff__main">
                <div className="pickup-point">
                    <div className="pickup-dropoff__point pickup-point__title">
                        Điểm đón
                    </div>
                    <ul className="pickup-point__content">
                        <li>
                            <span className="content-time">7h:30</span>
                            <span className="content-locate">Hội An</span>
                        </li>
                        <li>
                            <span className="content-time">9h:30</span>
                            <span className="content-locate">Điện An</span>
                        </li>
                        <li>
                            <span className="content-time">13h:10</span>
                            <span className="content-locate">Điện Bàn</span>
                        </li>
                    </ul>
                </div>

                <div className="dropoff-point">
                    <div className="pickup-dropoff__point dropoff-point__title">
                        Điểm trả
                    </div>
                    <ul className="pickup-point__content">
                        <li>
                            <span className="content-time">7h:30</span>
                            <span className="content-locate">Suối tiên</span>
                        </li>
                        <li>
                            <span className="content-time">19h:00</span>
                            <span className="content-locate">Bình Dương</span>
                        </li>
                        <li>
                            <span className="content-time">11h:30</span>
                            <span className="content-locate">Quận 10</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
   )

 }