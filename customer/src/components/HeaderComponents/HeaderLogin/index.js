import React from 'react'

/**
* @author
* @function HeaderLogin
**/

export const HeaderLogin = (props) => {
  return(
    <div>
        <div className="header__login  js-btn-login">
                    <div className="mybtn" onClick={props.open}>
                        <i className='btn-icon bx bx-user'></i>
                        <span>Đăng nhập</span>
                    </div>
                </div>
    </div>
   )

 }