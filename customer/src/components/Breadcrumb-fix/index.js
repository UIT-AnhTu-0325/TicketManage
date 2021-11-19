import React from 'react'
import '../../asset/css/component-css/breadcrumb.css'
/**
* @author
* @function Breadcrumb1
**/

export const Breadcrumb1 = (props) => {
  return(
    <div>
        <div className="border-page"></div>
        <div className="breadcrumb1">
            <a className="page1" href="/ticket">Trang chủ</a>
            <i className="fas fa-chevron-right"></i>
            <div className="page2">Thông tin tài khoản</div>
        </div>
       
    </div>
   )

 }