import React from "react";

/**
 * @author
 * @function ListTicketOfTrip
 **/

export const ListTicketOfTrip = (props) => {
  const tickets = props.tickets;

  const renderTickets = () => {
    let myTickets = [];
    for (let i = 0; i < tickets.quantity.length; i++) {
      myTickets.push(
        <div
          class="card text-white bg-primary mb-3"
          style={{ "max-width": "18rem" }}
        >
          <div class="card-header">Ghế {i + 1}</div>
          <div class="card-body">
            <h5 class="card-title">Đặng Anh Tú</h5>
            <p class="card-text">Giá vé: {tickets.price}</p>
          </div>
        </div>
      );
    }
    console.log(myTickets);
    return myTickets;
  };

  return <div>{renderTickets()}</div>;
};
