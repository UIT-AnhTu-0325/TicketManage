import React from 'react'
import '../../../asset/css/component-css/itemTicket.css'
import { useState } from 'react';
import { ModalUpdateTicket } from '../../Ticket/ModalUpdateTicket';
import { useDispatch } from 'react-redux';
import { update } from '../../../action/user_ticket';

/**
* @author
* @function 
**/

export const ItemTicket = (props) => {
    const dispatch = useDispatch();
    const [openBuyingModal, setOpenBuyingModal] = useState(false);

    const clickOpenBuyingModal = () => {
        setOpenBuyingModal(true);
    }
    const clickCloseBuyingModal = () => {
        setOpenBuyingModal(false);
    }

    if (openBuyingModal === true) {
        document.body.style.overflowY = 'hidden';
        document.body.style.width = '100%';
        document.body.style.marginRight = "150px"
    }
    else {
        document.body.style.overflowY = 'auto';
        document.body.style.position = 'static';
    }
    return (
        <React.Fragment>
            <div className="profile__item-ticket">
                <div className="image-type">
                    <i class='bx bxs-bus' ></i>
                </div>

                <div className="main">
                    <div className="namebus">
                        {props.info.enterprise.name}
                    </div>
                    <div className="location">
                        Từ <span>{props.info.route.startLocation}</span> đến <span>{props.info.route.endLocation}</span>
                    </div>
                    <div className="time">
                        <span className="start">{props.info.route.startTime.toFixed(2).toString().replace('.', ' giờ ')} phút </span>
                        <span className="start">{new Date(props.info.trip.startDate).toLocaleDateString('vi-VN')}</span>
                    </div>
                </div>

                <div className="right">
                    <div className="price">
                        {props.info.ticket.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")} đ
                    </div>
                    {props.details && (
                        <div className="btn" onClick={clickOpenBuyingModal}>
                            Chi tiết
                        </div>
                    )}
                    {props.display && (<div className="cancelBtn" onClick={() => {
                        if (window.confirm("Bạn muốn hủy vé ?")) {
                            props.info.ticket.quantity[props.info.book.seatNumber - 1] = false;
                            dispatch(update({ ...props.info.book, canceled: true },
                                { idTrip: props.info.trip._id, quantity: props.info.ticket.quantity, price: props.info.ticket.price, _id: props.info.ticket._id }, props.info.book._id));
                            alert('Hủy vé thành công');
                            window.location.reload();
                        }
                    }}>
                        Hủy vé
                    </div>)}
                </div>

                <div className="modal__buy-ticket">
                    {openBuyingModal === true ? <ModalUpdateTicket closeModal={clickCloseBuyingModal} info={props.info} /> : null}
                </div>
            </div>
        </React.Fragment>
    )

}