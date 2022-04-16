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
import { ListTripTable } from "../../components/table/ListTripTable";
import { Table } from "../../components/table/Table";
import { Input } from "../../components/UI/Input";

import busImg from "../../asset/img/bus.png";
import { SelectBox } from "../../components/UI/select/SelectBox";
import { InputTitleLeft } from "../../components/UI/inputTitleLeft/InputTitleLeft";
import { getAllTickets } from "../../actions/ticket.actions";
/**
 * @author
 * @function RouteDetails
 **/

export const RouteDetails = (props) => {
  const dispatch = useDispatch();
  //const state_route = useSelector((state) => state.route);
  const state_vehicle = useSelector((state) => state.vehicle);
  const state_routeDetails = useSelector((state) => state.route.routeDetails);
  const state_ticketR = useSelector((state) => state.ticketR);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // event handle
  useEffect(() => {
    loadRouteDetails();

    dispatch(getAllRoutes());
    dispatch(getAllVehicles());
  }, []);

  const loadRouteDetails = () => {
    const { routeId, enterpriseId } = props.match.params;

    const payload = {
      params: {
        routeId,
        enterpriseId,
      },
    };
    dispatch(getRouteDetailssById(payload));
    dispatch(getAllTickets());
    //dispatch(getRouteDetailssByIdInEnterprise(payload));
  };

  if (Object.keys(state_routeDetails).length === 0) {
    return null;
  }

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newTrips = state_routeDetails.trips.filter((trip) => {
        return Object.values(trip)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newTrips);
    } else {
      setSearchResults(state_routeDetails.trips);
    }
  };

  return (
    <Layout sidebar>
      <div className="enterprise-info">
        <div className="image image--big">
          <img src={busImg} alt="" />
        </div>
        <div className="info">
          <h1>Nhà Xe: {state_routeDetails.route.idEnterprise.name}</h1>
          <p className="start-locate">
            Bắt đầu: {state_routeDetails.route.startLocation}
          </p>
          <p className="end-locate">
            Kết thúc: {state_routeDetails.route.endLocation}
          </p>
          <p className="start-time">
            Thời gian xuất phát: {state_routeDetails.route.startTime}
          </p>
          <p className="end-time">
            Thời gian đi: {state_routeDetails.route.totalTime}
          </p>
        </div>
      </div>

      <ListTripTable
        listTrip={
          searchTerm.length < 1 ? state_routeDetails.trips : searchResults
        }
        listVehicle={state_vehicle.vehicles}
        listTicket={state_ticketR.tickets}
        idRoute={state_routeDetails.route._id}
        reLoad={loadRouteDetails}
        term={searchTerm}
        searchKeyword={searchHandler}
      ></ListTripTable>
    </Layout>
  );
};
