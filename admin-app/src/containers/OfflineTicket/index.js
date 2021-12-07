import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllCities } from "../../actions";
import { addOfflineTicket } from "../../actions/offlineTicket.actions";
import { getTripDetailsById } from "../../actions/trip.actions";
import { Layout } from "../../components/Layout";
import { InputTitleLeft } from "../../components/UI/inputTitleLeft/InputTitleLeft";
import { SelectBox } from "../../components/UI/select/SelectBox";

/**
 * @author
 * @function OfflineTicket
 **/

export const OfflineTicket = (props) => {
  const state_trip = useSelector((state) => state.trip.tripDetails.trip);
  const state_ticket = useSelector((state) => state.trip.tripDetails.tickets);
  //console.log(props.match.params);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCities());
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
  const state_city = useSelector((state) => state.city);

  const getLocationByCityName = (ctName) => {
    for (const ct of state_city.cities) {
      if (ct.name === ctName) {
        return ct.location;
      }
    }
    return [];
  };

  const initOffTicket = () => {
    return {
      _id: "",
      idTicket: "",
      //idUser: "",
      name: "",
      contactNumber: "",
      dob: "",
      address: "",
      seatNumber: localStorage.getItem("seatSelect"),
      getOn: "",
      getOff: "",
      canceled: "false",
    };
  };
  const [offTicket, setOffTicket] = useState(initOffTicket);

  const createOfflineTicket = () => {
    const ticket = state_ticket;
    ticket.quantity[offTicket.seatNumber - 1] = true;
    const form = offTicket;
    form.idTicket = state_ticket._id;
    //form.seatNumber = localStorage.getItem("seatSelect");
    delete form._id;
    dispatch(addOfflineTicket(form, ticket));
  };

  if (!state_trip) return <></>;
  if (!state_ticket) {
    return <></>;
  }

  //console.log(getLocationByCityName(trip.idRoute.endLocation));

  const genSeatSelect = () => {
    let listSeat = [];
    for (let i = 0; i < state_ticket.quantity.length; i++) {
      listSeat.push({ num: i + 1, isSel: state_ticket.quantity[i] });
    }
    return listSeat;
  };

  return (
    <Layout sidebar>
      <h1>.</h1>
      <h1>Đặt vé offline</h1>
      <h2>
        Tuyến: {state_trip.idRoute.startLocation} -{" "}
        {state_trip.idRoute.endLocation}
      </h2>
      <h2>Ngày đi: {state_trip.startDate}</h2>
      <h2>Giờ đi: {state_trip.idRoute.startTime}</h2>
      <h2>Thời gian đi: {state_trip.idRoute.totalTime}</h2>
      {/* <h2>Số ghế: {localStorage.getItem("seatSelect")}</h2> */}
      <SelectBox
        value={offTicket.seatNumber}
        onChange={(e) => {
          setOffTicket({ ...offTicket, seatNumber: e.target.value });
        }}
        list={genSeatSelect()}
        type="SeatSelect"
        title="Số ghế"
      />
      <InputTitleLeft
        title="Họ và tên"
        value={offTicket.name}
        placeholder={``}
        onChange={(e) => {
          setOffTicket({ ...offTicket, name: e.target.value });
        }}
      />
      <InputTitleLeft
        title="Số điện thoại"
        value={offTicket.contactNumber}
        placeholder={``}
        onChange={(e) => {
          setOffTicket({ ...offTicket, contactNumber: e.target.value });
        }}
      />
      <InputTitleLeft
        title="Ngày sinh"
        value={offTicket.dob}
        placeholder={``}
        onChange={(e) => {
          setOffTicket({ ...offTicket, dob: e.target.value });
        }}
      />
      <InputTitleLeft
        title="Địa chỉ"
        value={offTicket.address}
        placeholder={``}
        onChange={(e) => {
          setOffTicket({ ...offTicket, address: e.target.value });
        }}
      />

      <SelectBox
        value={offTicket.getOn}
        onChange={(e) => {
          setOffTicket({ ...offTicket, getOn: e.target.value });
        }}
        list={getLocationByCityName(state_trip.idRoute.startLocation)}
        addShow={state_trip.idRoute.startLocation}
        type="LocationSelect"
        title="Nơi đón"
      />

      <SelectBox
        value={offTicket.getOff}
        onChange={(e) => {
          setOffTicket({ ...offTicket, getOff: e.target.value });
        }}
        list={getLocationByCityName(state_trip.idRoute.endLocation)}
        addShow={state_trip.idRoute.endLocation}
        type="LocationSelect"
        title="Nơi trả"
      />
      <Button onClick={createOfflineTicket}>Hoàn thành</Button>
    </Layout>
  );
};
