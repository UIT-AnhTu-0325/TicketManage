import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllRoutes, getRouteDetailssById } from "../../actions";
import { addTrip } from "../../actions/trip.actions";
import { getAllVehicles } from "../../actions/vehicle.actions";
import { Layout } from "../../components/Layout";
import { ListTripTable } from "../../components/table/ListTripTable";
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
  const state_routeDetails = useSelector((state) => state.route.routeDetails);
  // event handle
  useEffect(() => {
    loadRouteDetails();
    dispatch(getAllRoutes());
    dispatch(getAllVehicles());
  }, []);

  const loadRouteDetails = () => {
    const { routeId } = props.match.params;
    const payload = {
      params: {
        routeId,
      },
    };
    dispatch(getRouteDetailssById(payload));
  };

  if (Object.keys(state_routeDetails).length === 0) {
    return null;
  }

  return (
    <Layout sidebar>
      <h1>Nhà Xe: {state_routeDetails.route.idEnterprise.name}</h1>
      <h2>Bắt đầu: {state_routeDetails.route.startLocation}</h2>
      <h2>Kết thúc: {state_routeDetails.route.endLocation}</h2>
      <h2>Thời gian xuất phát: {state_routeDetails.route.startTime}</h2>
      <h2>Thời gian đi: {state_routeDetails.route.totalTime}</h2>

      <ListTripTable
        listTrip={state_routeDetails.trips}
        listVehicle={state_vehicle.vehicles}
        idRoute={state_routeDetails.route._id}
        reLoad={loadRouteDetails}
      ></ListTripTable>
    </Layout>
  );
};
