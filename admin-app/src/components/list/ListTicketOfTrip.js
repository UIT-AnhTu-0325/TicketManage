import React from "react";
import { FunctionBar } from "./functionBar";
import { Link } from "react-router-dom";

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
            <div class="card1 selected" style={{ width: "25rem" }}>
              <div class="card1-header">
                <span className="number-chair"> Ghế {i + 1}</span>
                <span className="status">Chưa xác nhận</span>
              </div>
              <div class="card1-body">
                <h5 class="customer-name">
                  {ticketInfor.idUser.firstName} {ticketInfor.idUser.lastName}
                </h5>
                <p class="card1-text">Nơi đón: {ticketInfor.getOn}</p>
                <p class="card1-text">Nơi trả: {ticketInfor.getOff}</p>
                <p class="card1-text">
                  Giá vé:{" "}
                  {tickets.price.toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}
                </p>
                <FunctionBar />
              </div>
            </div>
          );
        } else if (ticketInfor.type === "OfflineTicket") {
          myTickets.push(
            <div class="card1 " style={{ width: "25rem" }}>
              <div class="card1-header">
                <span className="number-chair"> Ghế {i + 1}</span>
                <span className="status paid">Đã thanh toán</span>
              </div>
              <div class="card1-body">
                <h5 class="card1-title">AAAAAAAAAAAAAA</h5>
                <p class="card1-text">
                  Giá vé:{" "}
                  {tickets.price.toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}
                </p>
              </div>
            </div>
          );
        } else {
          myTickets.push(
            <div class="card1 " style={{ width: "25rem" }}>
              <div class="card1-header">Ghế {i + 1}</div>
              <div class="card1-body">
                <h5 class="card1-title">{ticketInfor.Name}</h5>
                <p class="card1-text">
                  Giá vé:{" "}
                  {tickets.price.toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}
                </p>
              </div>
            </div>
          );
        }
      } else {
        myTickets.push(
          <div class="card1" style={{ width: "25rem" }}>
            <div class="card1-header">Ghế {i + 1}</div>
            <div class="card1-body">
              <p class="card1-text">
                Giá vé:{" "}
                {tickets.price.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })}
              </p>
              <button className="btn-add-ticket">Thêm vé</button>
            </div>
          </div>
        );
      }
    }

    return myTickets;
  };

  return <div className="list-ticket">{renderTickets()}</div>;
};
