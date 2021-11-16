import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addTrip } from "../../actions/trip.actions";
import { Input } from "../UI/Input";
import { InputTitleLeft } from "../UI/inputTitleLeft/InputTitleLeft";
import { SelectBox } from "../UI/select/SelectBox";
import { Table } from "./Table";

/**
 * @author
 * @function ListTripTable
 **/

export const ListTripTable = (props) => {
  const dispatch = useDispatch();
  const listTrip = props.listTrip;
  const listVehicle = props.listVehicle;
  const initTrip = () => {
    return {
      //_id: "",
      idVehicle: "",
      idRoute: "",
      startDate: "1945-12-31T12:00:00.000Z",
    };
  };
  const [trip, setTrip] = useState(initTrip);

  const [modalShow, setModalShow] = useState(false);
  const [modalFlag, setModalFlag] = useState("Add");
  const [modalTitle, setModalTitle] = useState();

  const handleModalShow = (iFlag, trip = []) => {
    if (iFlag === "Add") {
      setModalFlag("Add");
      setModalTitle("Thêm chuyến xe");
    } else {
      setModalFlag("Edit");
      setModalTitle("Sửa chuyến xe");
      setTrip(trip);
    }
    setModalShow(true);
  };
  const handleModalSave = () => {
    const form = { ...trip, idRoute: props.idRoute };
    if (modalFlag === "Add") {
      dispatch(addTrip(form));
      props.reLoad();
    } else {
      //dispatch(editRoute(form));
    }
    setTrip(initTrip);
    setModalShow(false);
  };
  const [editData, setEditData] = useState(false);
  const handleModalClose = () => {
    setTrip(initTrip);
    setModalShow(false);
  };

  const trips = {
    header: ["Ngày khởi hành", "Biển số xe", "Số ghế", "Tùy chọn"],
    body: [],
  };
  const renderHead = (item, ind) => {
    return <th key={ind}>{item}</th>;
  };

  const renderTrips = (trips) => {
    let myTrips = [];
    for (let trip of trips) {
      myTrips.push(
        <tr>
          <td>{trip.startDate}</td>
          <td>{trip.idVehicle.lisensePlate}</td>
          <td>{trip.idVehicle.totalSeat}</td>
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
            <Link to={`/trips/${trip._id}/informations`}>
              <button type="button" onClick={() => {}}>
                Chi tiết
              </button>
            </Link>
          </td>
        </tr>
      );
    }
    return myTrips;
  };

  return (
    <div>
      <div className="routes">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card__header">
                <h3>Các chuyến xe</h3>
                <button
                  className="add-enterprise"
                  onClick={() => {
                    handleModalShow("Add");
                  }}
                >
                  Thêm chuyến xe
                </button>
              </div>
              <div className="card__body">
                <Table
                  headData={trips.header}
                  renderHead={(item, ind) => renderHead(item, ind)}
                  render2Body={() => renderTrips(listTrip)}
                />
              </div>
              <div className="card__footer"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          modalShow ? "add-modal__wrapper active" : "add-modal__wrapper"
        }
      >
        <div className={modalShow ? "add-modal active" : "add-modal"}>
          <div className="add-modal__header">Thêm chuyến xe</div>

          <div className="add-modal__body">
            <div className="input-enterprise-name">
              <InputTitleLeft
                title="Bus"
                value={trip.startDate}
                placeholder={``}
                onChange={(e) => {
                  setTrip({ ...trip, startDate: e.target.value });
                  if (e.target.value != "" && trip.idVehicle) {
                    setEditData(true);
                  } else {
                    setEditData(false);
                  }
                }}
              />

              <SelectBox
                value={trip.idVehicle}
                onChange={(e) => {
                  setTrip({ ...trip, idVehicle: e.target.value });
                  if (e.target.value != "" && trip.startDate) {
                    setEditData(true);
                  } else {
                    setEditData(false);
                  }
                }}
                listCity={listVehicle}
                title="Address"
                routeDetail="true"
              />
            </div>
          </div>

          <div className="add-modal__footer">
            <button className="btn-cancel" onClick={handleModalClose}>
              {" "}
              Hủy bỏ
            </button>
            <button
              className="btn-save"
              disabled={!editData}
              onClick={handleModalSave}
            >
              {" "}
              Lưu lại
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
