import React, { useEffect, useState } from 'react'
import { HeaderLogin } from '../HeaderComponents/HeaderLogin';
import { HeaderLogined } from '../HeaderComponents/HeaderLogined';
import { ModalLogin } from '../Modal/ModalLogin/index'
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
/**
* @author
* @function HeaderCustomer
**/

export const HeaderCustomer = ({ props }) => {

    const [showModal, setShowModal] = useState(false);

    // const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    // const dispatch = useDispatch();
    // const history = useHistory();
    // const location = useLocation();

    // console.log(user);

    // const logout = () => {
    //     dispatch({ type: LOGOUT })
    //     history.push('/');
    //     setUser(null);
    // }

    // useEffect(() => {
    //     const token = user?.token;

    //     setUser(JSON.parse(localStorage.getItem('profile')));
    // }, [location]);

    const openModal = () => {
        setShowModal(prev => !prev);
    }
    return (
        <>
            <div className="grid">
                <div className="header">
                    <div className="header__logo ">
                        <a href="/" >5TING BUS</a>
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
            {showModal ? <ModalLogin close={openModal} /> : null}

        </>

    )

}