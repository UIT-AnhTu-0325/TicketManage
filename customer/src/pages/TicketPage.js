import React, { Fragment } from "react";
import FilterSearch from "../components/filterSearch/FilterSearch";
import { LayoutCustomer } from "../components/Layout";
import SearchHeader from "../components/searchHeader/SearchHeader";
import ListItemTicket from "../components/Ticket/ListItemTicket";

const TicketPage = () => {
  return (
    <div className="dark:!bg-dark_primary_bg">
      <LayoutCustomer></LayoutCustomer>
      <SearchHeader />
      <div className="page-container mt-4">
        <div className="flex gap-10">
          <FilterSearch />
          <ListItemTicket />
        </div>
      </div>
    </div>
  );
};

export default TicketPage;
