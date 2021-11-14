import React from "react";
import { useDispatch } from "react-redux";
import { Table } from "./Table";

/**
 * @author
 * @function ListSteersmanTable
 **/

export const ListSteersmanTable = (props) => {
  const dispatch = useDispatch();
  const listSteersman = props.listSteersman;
  const listEnterprise = props.listEnterprise;
  const initSteersman = () => {
    return {
      _id: "",
    };
  };
  const steersmans = {
    header: ["Họ tên", "Số điện thoại", "Vị trí", "Tùy chọn"],
    body: [],
  };
  const renderHead = (item, ind) => {
    return <th key={ind}>{item}</th>;
  };
  const renderSteersmans = (steersmans) => {
    let mySteersmans = [];
    for (let steersman of steersmans) {
      mySteersmans.push(
        <tr>
          <td>
            {steersman.idUser.firstName} {steersman.idUser.lastName}
          </td>
          <td>{steersman.idUser.contactNumber}</td>
          <td>{steersman.position}</td>
          <td>
            <button
              className="edit"
              onClick={() => {
                //handleModalShow("Edit", route);
              }}
            >
              Edit
            </button>
            <button
              className="delete"
              onClick={() => {
                //delRoute(route);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    }
    return mySteersmans;
  };
  return (
    <div className="card">
      <div className="card__header">
        <h3>Các tài xế</h3>
      </div>
      <div className="card__body">
        <Table
          headData={steersmans.header}
          renderHead={(item, ind) => renderHead(item, ind)}
          render2Body={() => renderSteersmans(listSteersman)}
        />
      </div>
      <div className="card__footer"></div>
    </div>
  );
};
