import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Table } from "./Table";

/**
 * @author
 * @function ListUserTable
 **/

export const ListUserTable = (props) => {
  const dispatch = useDispatch();
  const listUser = props.listUser;
  const initUser = () => {
    return {
      _id: "",
      firstName: "",
      lastName: "",
      email: "",
      contactNumber: "",
    };
  };
  const users = {
    header: ["Họ tên", "Giới tính", "Email", "Số điện thoại", "Tùy chọn"],
    body: [],
  };
  const renderHead = (item, ind) => {
    return <th key={ind}>{item}</th>;
  };
  const renderUsers = (users) => {
    let myUers = [];
    for (let user of users) {
      myUers.push(
        <tr>
          <td>
            {user.firstName} {user.lastName}
          </td>
          <td>{user.profile[0].gender === "Male" ? "Nam" : "Nữ"}</td>
          <td>{user.email}</td>
          <td>{user.contactNumber}</td>
          <td>
            <button
              className="edit"
              onClick={() => {
                //handleModalShow("Edit", route);
              }}
            >
              Sửa
            </button>
            <button
              className="delete"
              onClick={() => {
                //delRoute(route);
              }}
            >
              Xóa
            </button>
            {/* <Link to={`/routes/${route._id}/informations`}>
              <Button type="button" onClick={() => {}}>
                Chi tiết
              </Button>
            </Link> */}

            <Link to={`user/${user._id}/info`}>
              <button className="detail" onClick={() => {}}>
                Chi tiết
              </button>
            </Link>
          </td>
        </tr>
      );
    }
    return myUers;
  };
  if (Object.keys(listUser).length === 0) {
    return (
      <div>
        <h1>Quản lý tài khoản</h1>
      </div>
    );
  }
  return (
    <React.Fragment>
      <div className="user__main-content right-content-fixsize">
        <h1 className="manager-user__title">Quản lý tài khoản</h1>
        <div className="card">
          <div className="card__header">
            <h3>Danh sách admin</h3>
            {/* <Button
          onClick={() => {
            handleModalShow("Add");
          }}
          >
          Thêm tuyến đường
        </Button> */}
          </div>
          <div className="card__body">
            <Table
              headData={users.header}
              renderHead={(item, ind) => renderHead(item, ind)}
              render2Body={() => renderUsers(listUser.listAdmin)}
            />
          </div>
          <div className="card__footer"></div>
        </div>

        <div className="card">
          <div className="card__header">
            <h3>Danh sách người dùng</h3>
            {/* <Button
          onClick={() => {
            handleModalShow("Add");
          }}
          >
          Thêm tuyến đường
        </Button> */}
          </div>
          <div className="card__body">
            <Table
              headData={users.header}
              renderHead={(item, ind) => renderHead(item, ind)}
              render2Body={() => renderUsers(listUser.listCustomer)}
            />
          </div>
          <div className="card__footer"></div>
        </div>

        <div className="card">
          <div className="card__header">
            <h3>Danh sách tài xế</h3>
            {/* <Button
          onClick={() => {
            handleModalShow("Add");
          }}
          >
          Thêm tuyến đường
        </Button> */}
          </div>
          <div className="card__body">
            <Table
              headData={users.header}
              renderHead={(item, ind) => renderHead(item, ind)}
              render2Body={() => renderUsers(listUser.listSteersman)}
            />
          </div>
          <div className="card__footer"></div>
        </div>
      </div>
    </React.Fragment>
  );
};
