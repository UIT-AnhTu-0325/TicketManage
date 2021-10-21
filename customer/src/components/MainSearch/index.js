import React from 'react'
import travelImg from '../../asset/img/travel.png'
import { useSelector } from 'react-redux'
import { DatePicker } from '../DatePicker'

// Css
import '../../asset/css/main-ticket.css'


/**
* @author
* @function MainSearch
**/

export const MainSearch = (props) => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () =>{
        setShowModal(true);
    }
    const closePicker = ()=>{
        if(showModal)
        {
            setShowModal(false)
        }
    }
        const routes = useSelector((state) => state.routes);
    const startLocations = Array.from(new Set(routes.map((route) => route.startLocation)));
    const endLocations = Array.from(new Set(routes.map((route) => route.endLocation)));
  return(
     <div>
        <div className="content" onClick={closePicker}>
      
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
                               <select name="startLocation">
                                <option value="Tất cả">Tất cả</option>
                                    {startLocations.map((location) => (
                                        <option value={location}>{location}</option>
                                    ))}
                                </select>
                           </div>
                           <div className="main-func__site__choose input">
                               <i className='bx bxs-edit-location' ></i>
                               <input type="text" placeholder="Chọn nơi đến" />
                               <select name="endLocation">
                                    <option value="Tất cả">Tất cả</option>
                                    {endLocations.map((location) => (
                                        <option value={location}>{location}</option>
                                    ))}
                                </select>
                           </div>
                           
                           <div className="main-func__site__swap">
                                <i className="fas fa-exchange-alt"></i>
                           </div>
                    </div>
   
                    <div className="main-func__date">
                       <div className="main-func__date__choose input">
                           <i className='bx bx-calendar-event' ></i>
                           <input type="text" placeholder="27/9/2021" />

                           <div className="wrapper-dialog">
                            <i className='btn-choose-down bx bxs-chevron-down' onClick={openModal} >
                            </i >
                            <div onClick={(e)=>{
                                e.stopPropagation();
                            }}>
                                {showModal ?  <DatePicker /> : null  }
                            </div>
                                
                           </div>
                          
                       </div>
                    </div>
                    <div className="main-func__btn-search mybtn">
                        <button className="search-home">
                            <a className="link-in-btn" href="./bus.html">Tìm xe</a>
                        </button>
                    </div>
                </div>

                <div className="content__main-img">
                    <img src={travelImg} alt="hong" />
                </div>
            </div>



        </div>
    )

}