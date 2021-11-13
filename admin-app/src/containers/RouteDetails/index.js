import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllRoutes, getRouteDetailssById } from "../../actions";
import { addTrip } from "../../actions/trip.actions";
import { getAllVehicles } from "../../actions/vehicle.actions";
import { Layout } from "../../components/Layout";
import { Table } from "../../components/table/Table";
import { Input } from "../../components/UI/Input";

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
    const { routeId } = props.match.params;
    //console.log(props);
    const payload = {
      params: {
        routeId,
      },
    };
    dispatch(getRouteDetailssById(payload));
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
    return myTrips;
  };

  if (Object.keys(routeDetails).length === 0) {
    return null;
  }

  return (
    <Layout sidebar>
      <h1>Nhà Xe: {routeDetails.route.idEnterprise.name}</h1>
      <h2>Bắt đầu: {routeDetails.route.startLocation}</h2>
      <h2>Kết thúc: {routeDetails.route.endLocation}</h2>
      <h2>Thời gian xuất phát: {routeDetails.route.startTime}</h2>
      <h2>Thời gian đi: {routeDetails.route.totalTime}</h2>
      <Button
        onClick={() => {
          handleModalShow("Add");
          //console.log(routeDetails);
        }}
      >
        Thêm chuyến xe
      </Button>

      <div className="routes">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card__header">
                <h3>Các chuyến xe</h3>
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
    </Layout>
  );
};
