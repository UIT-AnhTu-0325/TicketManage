import React from 'react'

/**
* @author
* @function FuncBar
**/

export const FuncBar = (props) => {
  return(
    <div className="wrapper-func-bar">
                <div className="func-bar flex-item-center">

                    <div className="func-bar__type-choosing flex-item-center">
                        <input type="checkbox" className="custom-radio block-check" />
                        <span> Xe khách</span>
                        <i className='btn-choose-down bx bxs-chevron-down'></i>
                    </div>
    
                    <div className="func-bar__main-choosing flex-item-center">
                        <div className="input">
                            <i className='custom-icon bx bx-home-alt'></i>
                            <input className="custom-input" type="text" placeholder="Chọn nơi đi" />
                        </div>
                        <div className=" input">
                            <i className='custom-icon bx bxs-edit-location'></i>
                            <input className="custom-input" type="text" placeholder="Chọn nơi đi" />
                        </div>
        
                        <div className="input">
                            <i className='custom-default-icon bx bx-calendar-event'></i>
                            <input className="custom-input" type="text" placeholder="27/9/2021" />
                            <i className='custom-default-icon bx bxs-chevron-down'></i>
                        </div>
        
                        <div className="mybtn">
                            <button className="fun-bar__btn-search" >
                                <a className="link-in-btn in-func-bar" href="./bus.html">Tìm xe</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
   )

 }