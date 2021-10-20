import React, {useState} from 'react'
import {ModalLogin} from '../Modal/ModalLogin/index'
/**
* @author
* @function HeaderCustomer
**/

export const HeaderCustomer = ({props}) => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () =>{
        setShowModal(prev => !prev);
    }
  return(
    <>
    <div className="grid">
            <div className="header">
                <div className="header__logo ">
                    <h1>5TING BUS</h1>
                </div>
                <div className="header__nav">
                    <ul className="mynavbar">
                        <li className="navbar__item navbar__item--actived">Thuê xe</li>
                        <li className="navbar__item ">Quản lý đơn hàng</li>
                        <li className="navbar__item ">Trở thành đối tác</li>
                    </ul>
                </div>
    
                <div className="header__login  js-btn-login">
                    <div className="mybtn" onClick={openModal}>
                        <i className='btn-icon bx bx-user'></i>
                        <span>Đăng nhập</span>
                    </div>
                </div>
            </div>
    </div>
    {showModal ?  <ModalLogin close={openModal} /> : null }
    
    </>

   )

 }