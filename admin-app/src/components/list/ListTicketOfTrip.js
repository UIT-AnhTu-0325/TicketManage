import React from "react";

/**
 * @author
 * @function ListTicketOfTrip
 **/

export const ListTicketOfTrip = (props) => {
  const tickets = props.tickets;
  const listTicket = props.listTicket;

  const findInListTicket = (index) => {
    for (let i = 0; i < listTicket.length; i++) {
      if (listTicket[i].seatNumber === index) {
        return listTicket[i];
      }
    }
    return;
  };

  const renderTickets = () => {
    let myTickets = [];
    for (let i = 0; i < tickets.quantity.length; i++) {
      if (tickets.quantity[i] === true) {
        const ticketInfor = findInListTicket(i + 1);
        if (ticketInfor.type === "OnlineTicket") {
          myTickets.push(
            <div
              class="card text-white bg-success mb-3"
              style={{ width: "25rem" }}
            >
              <div class="card-header">Ghế {i + 1}</div>
              <div class="card-body">
                <h5 class="card-title">
                  {ticketInfor.idUser.firstName} {ticketInfor.idUser.lastName}
                </h5>
                <p class="card-text">Nơi đón: {ticketInfor.getOn}</p>
                <p class="card-text">Nơi trả: {ticketInfor.getOff}</p>
                <p class="card-text">Giá vé: {tickets.price}</p>
              </div>
            </div>
          );
        } else if (ticketInfor.type === "OfflineTicket") {
          myTickets.push(
            <div class="card text-dark bg-info mb-3" style={{ width: "25rem" }}>
              <div class="card-header">Ghế {i + 1}</div>
              <div class="card-body">
                <h5 class="card-title">AAAAAAAAAAAAAA</h5>
                <p class="card-text">Giá vé: {tickets.price}</p>
              </div>
            </div>
          );
        } else {
          myTickets.push(
            <div
              class="card text-dark bg-warning mb-3"
              style={{ width: "25rem" }}
            >
              <div class="card-header">Ghế {i + 1}</div>
              <div class="card-body">
                <h5 class="card-title">{ticketInfor.Name}</h5>
                <p class="card-text">Giá vé: {tickets.price}</p>
              </div>
            </div>
          );
        }
      } else {
        myTickets.push(
          <div
            class="card text-white bg-danger mb-3"
            style={{ width: "25rem" }}
          >
            <div class="card-header">Ghế {i + 1}</div>
            <div class="card-body">
              <h5 class="card-title">Ghế trống</h5>
              <p class="card-text">Giá vé: {tickets.price}</p>
              <button>Thêm vé</button>
            </div>
          </div>
        );
      }
    }
    return myTickets;
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>{renderTickets()}</div>
  );
};
