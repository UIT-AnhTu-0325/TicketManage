import React from 'react'

/**
* @author
* @function HeaderLogin
**/

export const HeaderLogin = (props) => {
  return (
    <div>
      {
        localStorage.getItem("id") == null ? (<div className="header__login  js-btn-login">
        <div className="mybtn" onClick={props.open}>
          <i className='btn-icon bx bx-user'></i>
          <span>Đăng nhập</span>
        </div>
      </div>) : <div className="header__login  js-btn-login">
        <a className="mybtn" href="/profile">
          <i className='btn-icon bx bx-user'></i>
          <span>{localStorage.getItem("firstName")} {localStorage.getItem("lastName")}</span>
        </a>
      </div>
      }
    </div>
  )

}