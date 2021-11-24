import React from "react";
import userImg from "../../asset/img/user.jpg";
import "./userdetail.css";
/**
 * @author
 * @function UserDetail
 **/

export const UserDetail = (props) => {
  return (
    <div className="user-detail__wrapper">
      <div className="row1">
        <div className="left-panel">
          <div className="image-avatar">
            <img src={userImg} alt="" />
          </div>
          <h4 className="user-fullname">
            {"ggg"} {"aa"}
          </h4>
          {/* <span className="rank" id="">
            Hạng VIP
          </span> */}

          <div className="important-info">
            <div className="phone-number" id="phoneId">
              <i class="bx bx-phone"></i>
              <span>0396432406</span>
            </div>
            <div className="email" id="emailId">
              <i class="far fa-envelope"></i>
              <span>lamvanhong@gmail.com</span>
            </div>
          </div>
        </div>

        <div className=" right-panel">
          <h3>Giao dịch gần đây</h3>
          <div className="recent-transaction">
            <table>
              <tr>
                <td>
                  <div className="icon-left bus">
                    <i class=" fas fa-bus"></i>
                  </div>
                </td>
                <td>
                  <div className="ticket-booking">
                    <div className="location">
                      <span className="start">Quảng Nam</span>
                      <i class="startend fas fa-caret-right"></i>
                      <span className="end">Sài Gòn</span>
                    </div>
                    <div className="time-booking">08.10.2021</div>
                  </div>
                </td>
                <td>12.10.2021</td>
                <td>
                  <div className="status prepare">Chuẩn bị</div>
                </td>
                <td>
                  <div className="btn-detail">
                    <i class="fas fa-info"></i>
                    Chi tiết
                  </div>
                </td>
              </tr>
            </table>

            <table>
              <tr>
                <td>
                  <div className="icon-left bus">
                    <i class=" fas fa-bus"></i>
                  </div>
                </td>
                <td>
                  <div className="ticket-booking">
                    <div className="location">
                      <span className="start">Tây Ninh</span>
                      <i class="startend fas fa-caret-right"></i>
                      <span className="end">Hà Tĩnh</span>
                    </div>
                    <div className="time-booking">08.10.2021</div>
                  </div>
                </td>
                <td>23.12.2021</td>
                <td>
                  <div className="status prepare">Chuẩn bị</div>
                </td>
                <td>
                  <div className="btn-detail">
                    <i class="fas fa-info"></i>
                    Chi tiết
                  </div>
                </td>
              </tr>
            </table>

            <table>
              <tr>
                <td>
                  <div className="icon-left item">
                    <i class="fas fa-archive"></i>
                  </div>
                </td>
                <td>
                  <div className="ticket-booking">
                    <div className="location">
                      <span className="start">Quảng Nam</span>
                      <i class="startend fas fa-caret-right"></i>
                      <span className="end">Hà Nội</span>
                    </div>
                    <div className="time-booking">08.10.2021</div>
                  </div>
                </td>
                <td>02.11.2021</td>
                <td>
                  <div className="status cancel">Đã hủy</div>
                </td>
                <td>
                  <div className="btn-detail">
                    <i class="fas fa-info"></i>
                    Chi tiết
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
