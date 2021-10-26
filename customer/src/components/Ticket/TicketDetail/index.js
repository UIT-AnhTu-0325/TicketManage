import React from 'react'
import busImg from '../../../asset/img/bus.png'
import { useState } from 'react'
import { ImageSlider } from '../../TicketDetail/Picture/ImageSlider';
import { TicketUtilities } from '../../TicketDetail/Utilities';
import { PickUpPoint } from '../../TicketDetail/PickupPoint';
import { Rating } from '../../TicketDetail/Rating'
import { Policy } from '../../TicketDetail/Policy';
import { ModalBuyTicket } from '../ModalBuyTicket';
/**
* @author
* @function TicketDetail
**/

export const TicketDetail = (props) => {

    const [currrentTab, setCurrentTab] = useState(1);
    const ChangeTab = (index) =>{
        setCurrentTab(index);
    }
    
    //quick-see control
    const [openQuickSee, setOpenQuickSee] = useState(false);

    const clickOpenQuickSee= ()=>{
        setOpenQuickSee(prev=> !prev);
    }

    const [openBuyingModal, setOpenBuyingModal] = useState(false);
    
    const clickOpenBuyingModal = ()=>{
        setOpenBuyingModal(true);
    }
    const clickCloseBuyingModal = ()=>{
        setOpenBuyingModal(false);
    }

    if(openBuyingModal ===true){
        document.body.style.overflowY='hidden';
        document.body.style.width='100%';
        document.body.style.marginRight="150px"
    }
    else{
        document.body.style.overflowY='auto';
        document.body.style.position='static';   
    }
    
    // css set style
   

  return(
    <>
        <div className="ticket-detail__wrapper">
            <div className="ticket-detail">
            <img src={busImg} alt="" />
            <div className="ticket-detail__short-info">
                <div className="short-info__heading">
                    <div className="short-info__name">
                        Xe Phương Trang
                    </div>
                    <div className="short-info__price">
                        499.000 VNĐ
                    </div>
                    <div className="short-info__mark">
                       <i class='bx bx-bookmark' ></i>
                    </div>
                </div>
                
                <div className="short-info__desc">
                    Giường nằm 40 chỗ
                </div>
                <div className="short-info__option">
                    <div className={openQuickSee ===true ?  "option__quick-see active" : "option__quick-see"} onClick={clickOpenQuickSee}>
                        <span>Xem nhanh</span>
                        <i class='bx bxs-down-arrow' ></i>

                    </div>
                   
                    <div className="option__choose-this custom-btn" onClick={clickOpenBuyingModal}>
                        <span>Đặt xe</span>
                    </div>
                </div>

            </div>
            </div>

            <div className={openQuickSee === true ? "quick-see__content active" : "quick-see__content"}>
                <div className="quick-see__tab">
                    <div className={currrentTab===1 ?"tab tab1 active" :"tab tab1"}  onClick={()=>ChangeTab(1)}>Hình ảnh</div>
                    <div className={currrentTab===2 ?"tab tab2 active" :"tab tab2"} onClick={()=>ChangeTab(2)}>Tiện ích</div>
                    <div className={currrentTab===3 ?"tab tab2 active" :"tab tab3"}  onClick={()=>ChangeTab(3)}>Điểm đón, trả</div>
                    <tab className={currrentTab===4 ?"tab tab2 active" :"tab tab2"}  onClick={()=>ChangeTab(4)}>Đánh giá</tab>
                    <div className={currrentTab===5 ?"tab tab2 active" :"tab tab2"}  onClick={()=>ChangeTab(5)}>Chính sách</div>
                </div>
                <div className={"quick-see__tab__indicator " + 
                   (currrentTab===1 ? "indi1" : currrentTab===2 ? "indi2":
                    currrentTab=== 3 ? "indi3" : currrentTab===4 ? "indi4":
                    currrentTab===5?"indi5" : "indi6")
                }>
                </div>
                <div className="quick-see__line"></div>

                <div className="quick-see__main">
                    <div className="quick-see__main__wrapper">
                        <div className={currrentTab===1? "quick-see__tab active" : "quick-see__tab"}>
                        <ImageSlider />
                        </div>
                        <div className={currrentTab===2? "quick-see__tab active" : "quick-see__tab"}>
                             <TicketUtilities />
                        </div>
                        <div className={currrentTab===3? "quick-see__tab active" : "quick-see__tab"}>
                             <PickUpPoint />
                        </div>
                        <div className={currrentTab===4? "quick-see__tab active" : "quick-see__tab"}>
                            <Rating />
                        </div>
                        <div className={currrentTab===5? "quick-see__tab active" : "quick-see__tab"}>
                             <Policy />
                        </div>
                    </div>
                </div>
            </div>
           
        </div>

        <div className="modal__buy-ticket">
            {openBuyingModal === true ?   <ModalBuyTicket closeModal={clickCloseBuyingModal  } /> : null}
           
        </div>
    </>
   )

 }