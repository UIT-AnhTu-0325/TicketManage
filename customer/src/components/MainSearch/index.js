import React, { useState } from 'react'
import travelImg from '../../asset/img/travel.png'


/**
* @author
* @function MainSearch
**/

export const MainSearch = (props) => {


  
  return(
     <div>
        <div className="content">
            <div className="content__main-func">
                 <div className="content__main-func__wrapper">
                    <div className="main-func__selection">
                        <div className="main-func__selection__item">
                           <input type="radio" name="radio" checked />
                            <p>Xe khách</p>
                       </div>
                       <div className="main-func__selection__item" >
                           <input type="radio" name="radio" />
                           <p>Xe du lịch</p>
                       </div>
                    </div>
   
                    <div className="main-func__site">
                           <div className="main-func__site__choose input">
                               <i className='bx bx-home-alt' ></i>
                               <input type="text" placeholder="Chọn nơi đi" />
                           </div>
                           <div className="main-func__site__choose input">
                               <i className='bx bxs-edit-location' ></i>
                               <input type="text" placeholder="Chọn nơi đi" />
                           </div>
                           
                           <div className="main-func__site__swap">
                                <i className="fas fa-exchange-alt"></i>
                           </div>
                    </div>
   
                    <div className="main-func__date">
                       <div className="main-func__date__choose input">
                           <i className='bx bx-calendar-event' ></i>
                           <input type="text" placeholder="27/9/2021" />
                           <i className='btn-choose-down bx bxs-chevron-down' ></i>
                       </div>
                    </div>
                    <div className="main-func__btn-search mybtn">
                        <button className="search-home">
                            <a className="link-in-btn" href="./bus.html">Tìm xe</a>
                        </button>
                    </div>
                 </div>
            </div>

            <div className="content__main-img">
                <img src={travelImg} alt="hong" />
            </div>
        </div>

        
       
     </div>
   )

 }