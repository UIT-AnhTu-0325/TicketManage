import React from 'react'

/**
* @author
* @function Policy
**/

export const Policy = (props) => {
  return(
     <div>
       <div className="ticket-policy">
          <div className="ticket-session">
             <ul className="policy-item">
               <li >
                  <div className="policy-item__title">
                    An toàn với covid 19
                    
                  </div>
                  <ul className="policy-item__detail">
                      <li>
                      Tạm ngưng phục vụ khách nước ngoài do diễn biến phức tạp của dịch Covid-19
                      </li>
                      <li>
                      Xuất trình Khai báo Y tế trước khi lên xe
                      </li>
                      <li>
                      Cung cấp đầy đủ họ tên, số điện thoại, địa chỉ cư trú khi đặt vé
                      </li>
                      <li>
                      Yêu cầu đeo khẩu trang khi lên xe
                      </li>
                      <li>
                      Xuất trình Chứng nhận là F0 đã khỏi bệnh
                      </li>
                    </ul>
               </li>

               <li >
                  <div className="policy-item__title">
                  Yêu cầu khi lên xe
                    
                  </div>
                  <ul className="policy-item__detail">
                      <li>
                      Có mặt tại văn phòng/ quầy vé/ bến xe trước 15 phút để làm thủ tục lên xe
                      </li>
                      <li>
                      Xuất trình SMS/ Email đặt vé trước khi lên xe
                      </li>
                      <li>
                      Không mang đồ ăn, thức ăn có mùi lên xe
                      </li>
                      <li>
                      Không hút thuốc, uống rượu, sử dụng chất kích thích trên xe
                      </li>
                      <li>
                      Không mang các vật dễ cháy nổ lên xe
                      </li>
                    </ul>
               </li>
             </ul>

           
             
          </div>
       </div>
     </div>
   )

 }