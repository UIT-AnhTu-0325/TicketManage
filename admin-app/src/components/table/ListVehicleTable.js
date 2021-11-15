import React from "react";
import { useDispatch } from "react-redux";
import { Table } from "./Table";

/**
 * @author
 * @function ListVehicleTable
 **/

export const ListVehicleTable = (props) => {
  const dispatch = useDispatch();
  const listVehicle = props.listVehicle;
  const vehicles = {
    header: ["Biển số", "Số ghế", "Chất lượng", "Tùy chọn"],
    body: [],
  };
  const renderHead = (item, ind) => {
    return <th key={ind}>{item}</th>;
  };

  const renderVehicles = (vehicles) => {
    let myVehicles = [];
    for (let vehicle of vehicles) {
      myVehicles.push(
        <tr>
          <td>{vehicle.lisensePlate}</td>
          <td>{vehicle.totalSeat}</td>
          <td>{vehicle.quality}</td>
          <td>
            <button
              className="edit"
              onClick={() => {
                //handleModalShow("Edit", route);
              }}
            >
              <i class="far fa-edit"></i>
            </button>
            <button
              className="delete"
              onClick={() => {
                //delRoute(route);
              }}
            >
              <i class="far fa-trash-alt"></i>
            </button>
          </td>
        </tr>
      );
    }
    return myVehicles;
  };

  return (
    <div className="card">
      <div className="card__header">
        <h3>Các phương tiện</h3>
      </div>
      <div className="card__body">
        <Table
          headData={vehicles.header}
          renderHead={(item, ind) => renderHead(item, ind)}
          render2Body={() => renderVehicles(listVehicle)}
        />
      </div>
      <div className="card__footer"></div>
    </div>
  );
};
