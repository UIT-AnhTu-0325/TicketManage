import React, { useState } from 'react'
import '../../../asset/css/modal-css/buy-ticket.css'
import { useDispatch } from 'react-redux';


// img
import loginRequestImg from '../../../asset/img/login-nice-img.png'
import serviceImg from '../../../asset/img/services.png'
import pickupPointImg from '../../../asset/img/pickup-point.png'
import confirmImg from '../../../asset/img/confirm.png'
import { InputBox } from '../../UI/InputBox'
import { LeftPannel } from './Components/LeftPannel'
import { createNew } from '../../../action/user_ticket';
/**
* @author
* @function ModalBuyTicket
**/

export const ModalBuyTicket = (props) => {
    console.log(props.info);
    const dispatch = useDispatch();

    const [processStatus, setProcessState] = useState(1);

    //front end relate logic
    const [processHandled, setProcessHandled] = useState(1);


    //  only for front-end design
    const [prevStatus, setPreStatus] = useState(1); // 1 is default with slide to right
    const [isOpen, setIsOpen] = useState(1);  //1 is default with first open， 2 is opened -> for design only
    const numberProcess = 4;
    const clickNextProcess = () => {

        if (processStatus < numberProcess) {
            setPreStatus(1)
            setProcessState(processStatus + 1)
        }
        else {
            setPreStatus(2)
        }
        if (processStatus > processHandled) {
            setProcessHandled(processStatus);
        }
    }

    const clickOpen = () => {
        setIsOpen(2);
    }


    return (
        <div>

            <div className="modal-ticket">
                <div className="modal-ticket__main">
                    <div className="modal-ticket__header">

                        <div className="process-bar">
                            <div className={
                                processStatus === 1 ? "item  active current info-customer"
                                    : "item  active info-customer"
                            } onClick={() => {
                                setProcessState(1);
                                if (processStatus > processHandled) {
                                    setProcessHandled(processStatus);
                                }
                            }
                            }>
                                <p>1</p>
                                <span>Thông tin khách hàng</span>
                            </div>
                            <div className={
                                processStatus === 2 ? "item process active current info-customer"
                                    : (processStatus > 2 ? "item process active info-customer" : "item process info-customer")
                            }

                                onClick={() => {

                                    clickOpen();
                                    setProcessState(2);
                                    if (processStatus > 2) {
                                        setPreStatus(2)
                                    } else {
                                        setPreStatus(1)
                                    }
                                    if (processHandled < 2) {
                                        setProcessHandled(2);
                                    }
                                }
                                }>
                                <p>2</p>
                                <span>Dịch vụ</span>
                            </div>
                            <div className=
                                {
                                    processStatus === 3 ? "item process active current info-customer"
                                        : (processStatus > 3 ? "item process active info-customer" : "item process info-customer")
                                }
                                onClick={() => {
                                    if (processHandled < 2) {
                                        return;
                                    }
                                    clickOpen();
                                    setProcessState(3);
                                    if (processStatus > 3) {
                                        setPreStatus(2)
                                    } else {
                                        setPreStatus(1)
                                    }
                                    if (3 > processHandled) {
                                        setProcessHandled(3);
                                    }
                                }
                                }>
                                <p>3</p>
                                <span>Điểm đón, trả</span>
                            </div>
                            <div className=
                                {
                                    processStatus === 4 ? "item process active current info-customer"
                                        : "item process info-customer"
                                }
                                onClick={() => {
                                    if (processHandled < 3) {
                                        return;
                                    }
                                    setProcessState(4); setPreStatus(1); clickOpen();
                                    if (processStatus > processHandled) {
                                        setProcessHandled(processStatus);
                                    }
                                }}>
                                <p>4</p>
                                <span>Xác nhận</span>
                            </div>
                        </div>
                    </div>



                    <div className="modal-ticket__content">
                        <div className={isOpen === 1 ? "content__customer active" : (processStatus === 1 ? "content__customer active slide-right" : "content__customer")}>

                            <LeftPannel
                                loginImg={loginRequestImg}
                                title="Đăng nhập để bỏ qua bước này"
                                desc=" Đặt vé nhanh và thuận tiện bằng cách đăng nhập để có những trải nghiệm tốt nhất"
                                isLogin="true"
                                linkText="Đăng nhập"
                                info={props.info}
                            >
                            </LeftPannel>

                            <div className="customer__right-panel">
                                <div className="right-panel__header">
                                    Điền thông tin liên hệ
                                </div>
                                <form action="" className="form-info-input">
                                    <InputBox type="text" title="Họ tên" value={localStorage.getItem('firstName') + " " + localStorage.getItem('lastName')}></InputBox>
                                    <InputBox type="number" title="Số điện thoại" value={localStorage.getItem('contact')}/>
                                    <InputBox type="email" title="Email" value={localStorage.getItem('email')}/>
                                </form>
                                <button className="custom-btn"
                                    onClick={() => {

                                        clickOpen();
                                        setProcessState(2);
                                        if (processStatus > 2) {
                                            setPreStatus(2)
                                        } else {
                                            setPreStatus(1)
                                        }
                                        if (processHandled < 2) {
                                            setProcessHandled(2);
                                        }
                                    }
                                    }
                                >Tiếp tục</button>
                            </div>
                        </div>

                        <div className={processStatus === 2 ?

                            (prevStatus === 1 ? "content__services active slide-left" : "content__services active slide-right")
                            : "content__services"

                        }>
                            <LeftPannel
                                loginImg={serviceImg}
                                title="Dịch vụ"
                                desc="Hãy chọn các dịch vụ bạn cần nhé :33"
                                isLogin="true"
                                linkText="Tìm hiểu thêm"
                                info={props.info}
                            >
                            </LeftPannel>
                            <div className="customer__right-panel">
                                <div className="right-panel__header">
                                    Chọn dịch vụ bên dưới
                                </div>
                                <div className="services-list">
                                    <div className="services__item">
                                        <input type="checkbox" defaultChecked className="custom-checkbox-rectangle" />
                                        <span>Đồ ăn</span>
                                    </div>
                                    <div className="services__item">
                                        <input type="checkbox" className="custom-checkbox-rectangle" />
                                        <span>Mùng mền</span>
                                    </div>
                                    <div className="services__item">
                                        <input type="checkbox" className="custom-checkbox-rectangle" />
                                        <span>Ghế Vip</span>
                                    </div>
                                </div>
                                <button className="custom-btn"
                                    onClick={
                                        () => {
                                            clickOpen();
                                            setProcessState(3);
                                            if (processStatus > 3) {
                                                setPreStatus(2)
                                            } else {
                                                setPreStatus(1)
                                            }
                                            if (3 > processHandled) {
                                                setProcessHandled(3);
                                            }

                                        }
                                    }

                                >Tiếp tục</button>
                            </div>
                        </div>

                        <div className={processStatus === 3 ?
                            (prevStatus === 1 ? "content__pickup-point active slide-left" : "content__pickup-point active slide-right")
                            : "content__pickup-point"
                        }>
                            <LeftPannel
                                loginImg={pickupPointImg}
                                title="Chọn điểm đón, điểm đến"
                                desc="Hãy chọn nơi xe luân chuyển của chúng tôi sẽ đón bạn, nơi bạn dừng ở điểm đến"
                                isLogin="false"
                                linkText="Tìm hiểu thêm"
                                info={props.info}
                            >
                            </LeftPannel>
                            <div className="customer__right-panel">
                                <div className="right-panel__header">
                                    Chọn điểm đón, trả khách
                                </div>
                                <div className="pickup-dropoff__chossing">

                                    <div className="pickup-dropoff__main__choosing">
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
                                <button className="custom-btn"
                                    onClick={() => {

                                        clickOpen();
                                        setProcessState(4);
                                        if (processStatus > 4) {
                                            setPreStatus(2)
                                        } else {
                                            setPreStatus(1)
                                        }
                                        if (4 > processHandled) {
                                            setProcessHandled(4);
                                        }
                                    }}

                                >Tiếp tục</button>
                            </div>
                        </div>

                        <div className={processStatus === 4 ? "content__confirm active slide-left" : "content__confirm"}>
                            <LeftPannel
                                loginImg={confirmImg}
                                title="Xác nhận"
                                desc="Hãy kiểm tra lại các thông tin rồi bấm xác nhận để tiến hành đặt vé bạn nha"
                                isLogin="false"
                                linkText="Tìm hiểu thêm"
                                info={props.info}
                            >
                            </LeftPannel>
                            <div className="customer__right-panel">
                                <div className="right-panel__header">
                                    Kiểm tra thông tin và xác nhận
                                </div>
                                <form action="" className="form-info-input">

                                </form>
                                <button className="custom-btn"
                                    onClick={() => {
                                        dispatch(createNew({idUser: localStorage.getItem('id'), idTicket: props.info.ticket._id, time: Date.now(), status: "cho xac nhan"},
                                        {idTrip: props.info.trip._id, quantity: props.info.ticket.quantity - 1, type: props.info.ticket.type, price: props.info.ticket.price, _id: props.info.ticket._id}));
                                        alert('Đặt vé thành công');
                                        window.location.reload();
                                    }}

                                >Hoàn tất</button>
                            </div>
                        </div>


                    </div>

                    <div className="close-btn" onClick={props.closeModal}>
                        <i class="fas fa-times"></i>
                    </div>
                </div>
            </div>
        </div>
    )

}