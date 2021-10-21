import React from 'react'

/**
* @author
* @function DatePicker
**/

export const DatePicker = (props) => {
  return(
    <div>
        <div className="date-picker-container">
            <div className="calendar__header">

                <span className="year-picker" id="year-picker">
                     2021
                </span>

                <div className="month-picker">
                    <div className="month-change" id="prev-month">
                        <i class='bx bxs-left-arrow' ></i>
                    </div>

                    <div id="year">Tháng 10</div>

                    <div className="month-change" id="next-month">
                        <i class='bx bxs-right-arrow' ></i>
                    </div>
                </div>

            </div>

            <div className="calendar__body">
                    <div className="calendar__week-day">
                        <span>T2</span>
                        <span>T3</span>
                        <span>T4</span>
                        <span>T5</span>
                        <span>T6</span>
                        <span>T7</span>
                        <span>CN</span>
                    </div>

                    <div className="calendar__days">
                        <div>
                            1
                        </div>
                        <div>
                            2
                        </div>
                        <div>
                            3
                        </div>
                        <div>
                            4
                        </div>
                        <div>
                            5
                        </div>
                        <div>
                            6
                        </div>
                        <div>
                            7
                        </div>

                        <div>
                            1
                        </div>
                        <div>
                            2
                        </div>
                        <div>
                            3
                        </div>
                        <div>
                            4
                        </div>
                        <div>
                            5
                        </div>
                        <div>
                            6
                        </div>
                        <div>
                            7
                        </div>
                    </div>
                </div>
        </div>
    </div>
   )

 }