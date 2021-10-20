import React from 'react'

/**
* @author
* @function FilterTicket
**/

export const FilterTicket = (props) => {
  return(
     <>
        <div className="filter-header">
            <h3>Bộ lọc  chi tiết</h3>
        </div>

       <div className="filter-body">
        <div className="session-filter">
                <div className="session-filter__title">
                    <i class='bx bx-time-five' ></i>
                    <span>Chọn thời gian</span>

                    <div className="filter__time filter-wrap-property">
                        <div className="time__item active">
                            5:00 am
                        </div>
                        <div className="time__item ">
                            7:00 am
                        </div>
                        <div className="time__item ">
                            9:00 am
                        </div>
                        <div className="time__item ">
                            11:00 am
                        </div>
                        <div className="time__item ">
                            3:00 pm
                        </div>
                        <div className="time__item ">
                            3:00 pm
                        </div>
                        <div className="time__item ">
                            3:00 pm
                        </div>
                    </div>
                </div>
            </div>

            <div className="session-filter">
                <div className="session-filter__title">
                    <i class='bx bx-bus' ></i>
                    <span>Chọn nhà xe</span>
                </div>

                <div className="filter__bus-house filter-wrap-property">
                    <div className="bus-house__item">
                        <input type="checkbox" defaultChecked className="custom-checkbox-rectangle" />
                        <span>Lâm Hồng</span>
                    </div>
                    <div className="bus-house__item">
                        <input type="checkbox" className="custom-checkbox-rectangle" />
                        <span>Phương Trang</span>
                    </div>
                    <div className="bus-house__item">
                        <input type="checkbox" className="custom-checkbox-rectangle" />
                        <span>Anh Tú</span>
                    </div>
                    <div className="bus-house__item">
                        <input type="checkbox" className="custom-checkbox-rectangle" />
                        <span>Ngọc Phúc</span>
                    </div>
                    <div className="bus-house__item">
                        <input type="checkbox" className="custom-checkbox-rectangle" />
                        <span>Tấn Hoài</span>
                    </div>
                </div>
            </div>

            <div className="session-filter">
                <div className="session-filter__title">
                    <i class="fas fa-toolbox"></i>
                    <span>Chọn dịch vụ</span>
                </div>


                <div className="filter__services filter-wrap-property">
                    <div className="services__item">
                        <input type="checkbox" defaultChecked className="custom-checkbox-rectangle" />
                        <span>Đồ ăn</span>
                    </div>
                    <div className="services__item">
                        <input type="checkbox" className="custom-checkbox-rectangle" />
                        <span>Mùng mền</span>
                    </div>
                    <div className="services__item">
                        <input type="checkbox" className="custom-checkbox-rectangle" />
                        <span>Ghế Vip</span>
                    </div>

                </div>
            </div>
       </div>
     </>
   )

 }