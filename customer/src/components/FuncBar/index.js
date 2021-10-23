import React from 'react'
import { useSelector } from 'react-redux'

/**
* @author
* @function FuncBar
**/

export const FuncBar = ({ start, end }) => {

    const routes = useSelector((state) => state.routes);
    const startLocations = Array.from(new Set(routes.map((route) => route.startLocation)));
    const endLocations = Array.from(new Set(routes.map((route) => route.endLocation)));

    return (
        <div className="wrapper-func-bar">
            <form action="/ticket" method="get">
                <div className="func-bar flex-item-center">

                    <div className="func-bar__type-choosing flex-item-center">
                        <input type="checkbox" className="custom-radio block-check" />
                        <span> Xe khách</span>
                        <i className='btn-choose-down bx bxs-chevron-down'></i>
                    </div>

                    <div className="func-bar__main-choosing flex-item-center">
                        <div className="input">
                            <i className='custom-icon bx bx-home-alt'></i>
                            <select name="startLocation" className="custom-input">
                            <option value="" disabled selected>Chọn nơi đi</option>
                                <option value="Mọi nơi" selected={start === "Mọi nơi" ? true : false}>Mọi nơi</option>
                                {startLocations.map((location) => (
                                    <option value={location} selected={location === start ? true : false}>{location}</option>
                                ))}
                            </select>
                        </div>
                        <div className=" input">
                            <i className='custom-icon bx bxs-edit-location'></i>
                            <select name="endLocation" className="custom-input">
                            <option value="" disabled selected>Chọn nơi đến</option>
                                <option value="Mọi nơi" selected={end === "Mọi nơi" ? true : false}>Mọi nơi</option>
                                {endLocations.map((location) => (
                                    <option value={location} selected={location === end ? true : false}>{location}</option>
                                ))}
                            </select>
                        </div>

                        <div className="input">
                            <i className='custom-default-icon bx bx-calendar-event'></i>
                            <input className="custom-input" type="text" placeholder="27/9/2021" />
                            <i className='custom-default-icon bx bxs-chevron-down'></i>
                        </div>

                        <div className="mybtn">
                            <button className="fun-bar__btn-search link-in-btn" type="submit">
                                Tìm xe
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )

}