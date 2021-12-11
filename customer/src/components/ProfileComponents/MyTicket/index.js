import React, { useEffect, useState } from "react";
import { ActiveTicket } from "../ActiveTicket";
import { DeleteTicket } from "../DeleteTicket";
import { UsedTicket } from "../UsedTicket";
import { useSelector, useDispatch } from "react-redux";
import { getAll } from "../../../action/user_ticket";
import axios from "axios";
/**
 * @author
 * @function MyTicket
 **/

export const MyTicket = (props) => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.userTicket);
  //console.log(books);
  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);
  const active = books.filter(
    (item) =>
      new Date(item.trip.startDate) >= Date.now() &&
      item.book.idUser === localStorage.getItem("id") &&
      !item.book.canceled
  );
  const used = books.filter(
    (item) =>
      new Date(item.trip.startDate) < Date.now() &&
      item.book.idUser === localStorage.getItem("id") &&
      !item.book.canceled
  );
  const canceled = books.filter(
    (item) =>
      item.book.canceled && item.book.idUser === localStorage.getItem("id")
  );

  const [currentTab, setCurrentTab] = useState(1);
  console.log(books);
  return (
    <React.Fragment>
      <div className="ticket-tab">
        <div
          className={currentTab === 1 ? "tab active" : "tab "}
          onClick={() => setCurrentTab(1)}
        >
          Chuyến sắp đi
        </div>
        <div
          className={currentTab === 2 ? "tab active" : "tab "}
          onClick={() => setCurrentTab(2)}
        >
          Chuyến đã đi
        </div>
        <div
          className={currentTab === 3 ? "tab active" : "tab "}
          onClick={() => setCurrentTab(3)}
        >
          Chuyến đã hủy
        </div>
      </div>
      <div
        className={
          "ticket-tab__indicator " +
          (currentTab === 1 ? "indi1" : currentTab === 2 ? "indi2" : "indi3")
        }
      ></div>

      <div className="ticket-tab__line"></div>

      <div className="ticket-tab__main">
        <div className={currentTab === 1 ? "tab active" : "tab"}>
          <ActiveTicket info={active} />
        </div>

        <div className={currentTab === 2 ? "tab active" : "tab"}>
          <UsedTicket info={used} />
        </div>

        <div className={currentTab === 3 ? "tab active" : "tab"}>
          <DeleteTicket info={canceled} />
        </div>
      </div>
    </React.Fragment>
  );
};
