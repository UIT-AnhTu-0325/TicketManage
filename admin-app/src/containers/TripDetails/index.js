import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTripDetailsById } from "../../actions/trip.actions";
import { Layout } from "../../components/Layout";
import { ListTicketOfTrip } from "../../components/list/ListTicketOfTrip";

/**
 * @author
 * @function TripDetails
 **/

export const TripDetails = (props) => {
  const dispatch = useDispatch();
  const state_tripDetails = useSelector((state) => state.trip.tripDetails);

  useEffect(() => {
    loadTripDetails();
  }, []);

  const loadTripDetails = () => {
    const { tripId } = props.match.params;
    const payload = {
      params: {
        tripId,
      },
    };
    dispatch(getTripDetailsById(payload));
  };

  if (Object.keys(state_tripDetails).length === 0) {
    return null;
  }

  return (
    <Layout sidebar>
      <h1>Chi tiết chuyến xe</h1>
      <h2>Nhà xe: {state_tripDetails.trip.idVehicle.idEnterprise.name}</h2>
      <h2>Biển số: {state_tripDetails.trip.idVehicle.lisensePlate}</h2>
      <h2>Số ghế: {state_tripDetails.trip.idVehicle.totalSeat}</h2>
      <h2>Loại xe: {state_tripDetails.trip.idVehicle.quality}</h2>
      <h2>Bắt đầu: {state_tripDetails.trip.idRoute.startLocation}</h2>
      <h2>Kết thúc: {state_tripDetails.trip.idRoute.endLocation}</h2>
      <h2>Ngày bắt đầu: {state_tripDetails.trip.startDate}</h2>
      <ListTicketOfTrip
        tickets={state_tripDetails.tickets}
        listTicket={state_tripDetails.listTicket}
      ></ListTicketOfTrip>
    </Layout>
  );
};
