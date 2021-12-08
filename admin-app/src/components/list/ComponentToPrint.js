// Using a class component, everything works without issue
// export class ComponentToPrint extends React.PureComponent {
//     render() {
//       return (
//         <div>My cool content here!</div>
//       );
//     }
//   }

import React from "react";

//   // Using a functional component, you must wrap it in React.forwardRef, and then forward the ref to
//   // the node you want to be the root of the print (usually the outer most node in the ComponentToPrint)
//   // https://reactjs.org/docs/refs-and-the-dom.html#refs-and-function-components
export const ComponentToPrint = React.forwardRef((props, ref) => {
  const ticketInfor = props.selected;
  const tickets = props.tickets;
  const trip = props.trip;
  return (
    <h1 ref={ref}>
      {ticketInfor.type === "OnlineTicket" ? (
        <div>
          <h1>Nhà xe: {trip.idVehicle.idEnterprise.name}</h1>
          <h1>
            Tuyến đường: {trip.idRoute.startLocation} -{" "}
            {trip.idRoute.endLocation}
          </h1>
          <h3>Mã vé {ticketInfor._id}</h3>
          <h1>VÉ XE KHÁCH</h1>
          <h2 class="customer-name">
            {ticketInfor.idUser.firstName} {ticketInfor.idUser.lastName}
          </h2>
          <h2>Số ghế {ticketInfor.seatNumber}</h2>
          <h2>Biển số: {trip.idVehicle.lisensePlate}</h2>
          <p class="card1-text">Nơi đón: {ticketInfor.getOn}</p>
          <p class="card1-text">Nơi trả: {ticketInfor.getOff}</p>
          <p class="card1-text">
            Giá vé:{" "}
            {tickets.price.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </p>
          <h2>Giờ khởi hành: {trip.idRoute.startTime} </h2>
          <h2>
            Ngày khởi hành:{" "}
            {new Intl.DateTimeFormat("vi", {
              month: "long",
              day: "2-digit",
              year: "numeric",
            }).format(new Date(trip.startDate))}
          </h2>
          <h2>Ngày: ... tháng .... năm ....</h2>
          <h2> Người bán vé</h2>
        </div>
      ) : (
        <div>
          <h1>Nhà xe: {trip.idVehicle.idEnterprise.name}</h1>
          <h1>
            Tuyến đường: {trip.idRoute.startLocation} -{" "}
            {trip.idRoute.endLocation}
          </h1>
          <h3>Mã vé {ticketInfor._id}</h3>
          <h1>VÉ XE KHÁCH</h1>
          <h2 class="customer-name">{ticketInfor.name}</h2>
          <h2>Số ghế {ticketInfor.seatNumber}</h2>
          <h2>Biển số: {trip.idVehicle.lisensePlate}</h2>
          <p class="card1-text">Nơi đón: {ticketInfor.getOn}</p>
          <p class="card1-text">Nơi trả: {ticketInfor.getOff}</p>
          <p class="card1-text">
            Giá vé:{" "}
            {tickets.price.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </p>
          <h2>Giờ khởi hành: {trip.idRoute.startTime} </h2>
          <h2>
            Ngày khởi hành:{" "}
            {new Intl.DateTimeFormat("vi", {
              month: "long",
              day: "2-digit",
              year: "numeric",
            }).format(new Date(trip.startDate))}
          </h2>
          <h2>Ngày: ... tháng .... năm ....</h2>
          <h2> Người bán vé</h2>
        </div>
      )}
    </h1>
  );
});
