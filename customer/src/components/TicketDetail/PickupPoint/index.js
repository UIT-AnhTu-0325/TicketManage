import React, { useEffect } from 'react'
import '../../../asset/css/TicketDetail/pickupPoint.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetch } from '../../../action/location';
/**
* @author
* @function PickUpPoint
**/

export const PickUpPoint = (props) => {
    const locations = useSelector(state => state.locations);
    const getOn = locations.filter(location => location.city === props.info.route.startLocation);
    const getOff = locations.filter(location => location.city === props.info.route.endLocation);
    return (
        <div>
            <div className="pickup-dropoff">
                <div className="note">
                    <p className="note__title">
                        Lưu ý:
                    </p>
                    <p className="note__desc">
                        Các mốc thời gian đón, trả bên dưới là thời gian dự kiến. <br />
                        Lịch này có thể thay đổi tùy tình hình thưc tế.
                    </p>
                </div>
                <div className="pickup-dropoff__main">
                    <div className="pickup-point">
                        <div className="pickup-dropoff__point pickup-point__title">
                            Điểm đón
                        </div>
                        <ul className="pickup-point__content">
                            {getOn.map(element => (
                                <li>
                                    <span className="content-locate"> {element.location}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="dropoff-point">
                        <div className="pickup-dropoff__point dropoff-point__title">
                            Điểm trả
                        </div>
                        <ul className="pickup-point__content">
                            {getOff.map(element => (
                                <li>
                                    <span className="content-locate"> {element.location}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

}