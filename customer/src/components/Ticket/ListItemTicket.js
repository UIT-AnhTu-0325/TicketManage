import React from "react";
import TicketItem from "./TicketItem";

const ListItemTicket = () => {
  return (
    <div className="bg-transparent dark:!text-white dark:!bg-dark_primary_bg w-full h-full min-h-[800px] flex flex-col gap-4">
      <div className=" min-h-[60px] rounded-lg bg-white dark:!bg-dark_primary_pnl -mb-5 flex justify-between items-center pl-6">
        <div className="flex gap-2 items-center ">
          <div className="name text-lg font-bold pr-2 border-r-2 border-r-gray-100">
            Train
          </div>
          <div className="">Total: </div>
          <div className="span text-primary">12 result</div>
        </div>
        <div className="flex items-center gap-1 mr-4">
          <div className="px-4 cursor-pointer hover:bg-gray-400 hover:text-white py-1 text-sm rounded-2xl bg-gray-700 text-white">
            Best
          </div>
          <div className="px-4 cursor-pointer hover:bg-gray-400 hover:text-white py-1 text-sm rounded-2xl bg-gray-50 dark:!bg-dark_primary_pnl ">
            Cheap
          </div>
          <div className="px-4 cursor-pointer hover:bg-gray-400 hover:text-white py-1 text-sm rounded-2xl bg-gray-50 dark:!bg-dark_primary_pnl ">
            Top rating
          </div>
        </div>
      </div>
      <TicketItem />
      <TicketItem />
      <TicketItem />
    </div>
  );
};

export default ListItemTicket;
