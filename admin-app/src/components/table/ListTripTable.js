import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addTrip } from "../../actions/trip.actions";
import { Input } from "../UI/Input";
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
                <Button
                  onClick={() => {
                    handleModalShow("Add");
                  }}
                >
                  Thêm chuyến xe
                </Button>
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
      <Modal show={modalShow} onHide={handleModalClose}>
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
            {listVehicle.map((option) => (
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
    </div>
  );
};
