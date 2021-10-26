import React, {useState} from 'react'
import { HeaderLogin } from '../HeaderComponents/HeaderLogin';
import { HeaderLogined } from '../HeaderComponents/HeaderLogined';
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
    
                <HeaderLogin open={openModal} ></HeaderLogin>
                {/* <HeaderLogined ></HeaderLogined> */}
            </div>
    </div>
    {showModal ?  <ModalLogin close={openModal} /> : null }
    
    </>

   )

 }