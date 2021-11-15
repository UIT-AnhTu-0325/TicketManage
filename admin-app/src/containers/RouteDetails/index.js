import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllRoutes,
  getRouteDetailssById,
  getRouteDetailssByIdInEnterprise,
} from "../../actions";
import { addTrip } from "../../actions/trip.actions";
import { getAllVehicles } from "../../actions/vehicle.actions";
import { Layout } from "../../components/Layout";
import { Table } from "../../components/table/Table";
import { Input } from "../../components/UI/Input";

import busImg from "../../asset/img/bus.png";
import { SelectBox } from "../../components/UI/select/SelectBox";
import { InputTitleLeft } from "../../components/UI/inputTitleLeft/InputTitleLeft";
/**
 * @author
 * @function RouteDetails
 **/

export const RouteDetails = (props) => {
  const dispatch = useDispatch();
  //const state_route = useSelector((state) => state.route);
  const state_vehicle = useSelector((state) => state.vehicle);

  const [modalShow, setModalShow] = useState(false);
  const [modalFlag, setModalFlag] = useState("Add");
  const [modalTitle, setModalTitle] = useState();
  const [editData, setEditData] = useState(false);

  const routeDetails = useSelector((state) => state.route.routeDetails);
  // event handle
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
    const form = { ...trip, idRoute: routeDetails.route._id };
    if (modalFlag === "Add") {
      dispatch(addTrip(form));
      loadRouteDetails();
    } else {
      //dispatch(editRoute(form));
    }
    setTrip(initTrip);
    setModalShow(false);
  };
  const handleModalClose = () => {
    setTrip(initTrip);
    setModalShow(false);
  };

  const initTrip = () => {
    return {
      //_id: "",
      idVehicle: "",
      idRoute: "",
      startDate: "1945-12-31T12:00:00.000Z",
    };
  };
  const [trip, setTrip] = useState(initTrip);

  useEffect(() => {
    loadRouteDetails();
    dispatch(getAllRoutes());
    dispatch(getAllVehicles());
  }, []);

  const loadRouteDetails = () => {
    const { routeId, enterpriseId } = props.match.params;
    //console.log(props);
    const payload = {
      params: {
        routeId,
        enterpriseId,
      },
    };
    dispatch(getRouteDetailssById(payload));
    //dispatch(getRouteDetailssByIdInEnterprise(payload));
  };

  const renderHead = (item, ind) => {
    return <th key={ind}>{item}</th>;
  };

  const trips = {
    header: ["Ngày khởi hành", "Biển số xe", "Số ghế", "Tùy chọn"],
    body: [],
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
          </td>
        </tr>
      );
    }
    return myTrips;
  };

  if (Object.keys(routeDetails).length === 0) {
    return null;
  }

  return (
    <Layout sidebar>
      <div className="enterprise-info">
        <div className="image image--big">
          <img src={busImg} alt="" />
        </div>
        <div className="info">
          <h1>Nhà Xe: {routeDetails.route.idEnterprise.name}</h1>
          <p className="start-locate">
            Bắt đầu: {routeDetails.route.startLocation}
          </p>
          <p className="end-locate">
            Kết thúc: {routeDetails.route.endLocation}
          </p>
          <p className="start-time">
            Thời gian xuất phát: {routeDetails.route.startTime}
          </p>
          <p className="end-time">
            Thời gian đi: {routeDetails.route.totalTime}
          </p>
        </div>
      </div>

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
                  Thêm nhà xe
                </button>
              </div>
              <div className="card__body">
                <Table
                  headData={trips.header}
                  renderHead={(item, ind) => renderHead(item, ind)}
                  render2Body={() => renderTrips(routeDetails.trips)}
                />
              </div>
              <div className="card__footer"></div>
            </div>
          </div>
        </div>
      </div>
      {/* SHOW MODAL - FIX THEM */}
      <Modal show={false} onHide={handleModalClose}>
        <Modal.Header>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <select
            className="form-control"
            value={trip.idRoute}
            onChange={(e) => setTrip({ ...trip, idRoute: e.target.value })}
          >
            <option>Tuyến đường</option>
            {state_route.routes.map((option) => (
              <option key={option._id} value={option._id}>
                {option.startLocation} - {option.endLocation}
              </option>
            ))}
          </select> */}

          <select
            className="form-control"
            value={trip.idVehicle}
            onChange={(e) => setTrip({ ...trip, idVehicle: e.target.value })}
          >
            <option>Xe</option>
            {state_vehicle.vehicles.map((option) => (
              <option key={option._id} value={option._id}>
                {option.quality} - {option.totalSeat}
              </option>
            ))}
          </select>

          <Input
            value={trip.startDate}
            placeholder={`Start Time`}
            onChange={(e) => setTrip({ ...trip, startDate: e.target.value })}
          ></Input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleModalSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* show modal new */}

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
                listCity={state_vehicle.vehicles}
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
    </Layout>
  );
};
