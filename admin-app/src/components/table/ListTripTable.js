import React, { useState } from "react";
import { Button, Fade, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addTrip } from "../../actions/trip.actions";
import { Input } from "../UI/Input";
import { InputTitleLeft } from "../UI/inputTitleLeft/InputTitleLeft";
import { SelectBox } from "../UI/select/SelectBox";
import { Table } from "./Table";
import swal from "sweetalert";
/**
 * @author
 * @function ListTripTable
 **/

export const ListTripTable = (props) => {
  const dispatch = useDispatch();
  const listTrip = props.listTrip;
  const listVehicle = props.listVehicle;
  const listTicket = props.listTicket;
  const initTrip = () => {
    return {
      _id: "",
      idVehicle: "",
      idRoute: "",
      startDate: "1945-12-31T12:00:00.000Z",
      price: "",
      totalSeat: 0,
    };
  };
  const [trip, setTrip] = useState(initTrip);

  const [modalShow, setModalShow] = useState(false);
  const [modalFlag, setModalFlag] = useState("Add");
  const [modalTitle, setModalTitle] = useState();
  const [editData, setEditData] = useState(false);

  const checkEditData = () => {
    if (trip.idVehicle && trip.startDate && trip.price) {
      setEditData(true);
    } else {
      setEditData(false);
    }
  };

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
      delete form._id;
      dispatch(addTrip(form));
      props.reLoad();
      swal({
        title: "Thêm thành công",
        text: "Bạn đã thêm chuyến xe thành công",
        icon: "success",
        button: "OK",
      });
    } else {
      //dispatch(editRoute(form));
    }
    setTrip(initTrip);
    props.reLoad();
    setModalShow(false);
    resetCss();
  };
  const handleModalClose = () => {
    setTrip(initTrip);
    setModalShow(false);
    resetCss();
  };

  const resetCss = () => {
    setEditData(false);
  };

  const trips = {
    header: ["Ngày khởi hành", "Biển số xe", "Số ghế", "Giá vé", "Tùy chọn"],
    body: [],
  };
  const renderHead = (item, ind) => {
    return <th key={ind}>{item}</th>;
  };

  const findPriceOfTrip = (idTrip) => {
    for (const tic of listTicket) {
      if (tic.idTrip === idTrip) {
        return tic.price;
      }
    }
    return 0;
  };

  const findTotalSeatOfVehicle = (idVehicle) => {
    for (const veh of listVehicle) {
      if (veh._id === idVehicle) {
        return veh.totalSeat;
      }
    }
    return 0;
  };

  const renderTrips = (trips) => {
    let myTrips = [];
    for (let trip of trips) {
      myTrips.push(
        <tr>
          <td>{trip.startDate}</td>
          <td>{trip.idVehicle.lisensePlate}</td>
          <td>{trip.idVehicle.totalSeat}</td>
          <td>{findPriceOfTrip(trip._id)}</td>
          <td>
            {/* <button
              className="edit"
              onClick={() => {
                handleModalShow("Edit", {
                  idVehicle: trip.idVehicle._id,
                  startDate: trip.startDate,
                  price: findPriceOfTrip(trip._id),
                  totalSeat: trip.idVehicle.totalSeat,
                });
              }}
            >
              <i class="far fa-edit"></i>
            </button>
            <button
              className="delete"
              onClick={() => {
                //to delete trip
              }}
            >
              <i class="far fa-trash-alt"></i>
            </button> */}
            <Link to={`/trips/${trip._id}/informations`}>
              <button className="detail" onClick={() => {}}>
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
          <div className="add-modal__header">{modalTitle}</div>

          <div className="add-modal__body">
            <div className="input-enterprise-name">
              <InputTitleLeft
                title="Ngày đi"
                value={trip.startDate}
                placeholder={``}
                onChange={(e) => {
                  setTrip({ ...trip, startDate: e.target.value });
                  checkEditData();
                }}
              />
              <SelectBox
                value={trip.idVehicle}
                onChange={(e) => {
                  setTrip({
                    ...trip,
                    idVehicle: e.target.value,
                    totalSeat: findTotalSeatOfVehicle(e.target.value),
                  });
                  checkEditData();
                }}
                list={listVehicle}
                title="Phương tiện"
                type="VehicleSelect"
              />
              <InputTitleLeft
                title="Giá vé"
                value={trip.price}
                placeholder={``}
                onChange={(e) => {
                  setTrip({ ...trip, price: e.target.value });
                  checkEditData();
                }}
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
