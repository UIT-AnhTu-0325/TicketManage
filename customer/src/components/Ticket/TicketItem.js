import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const TicketItem = () => {
  const [detailPannel, setDetailPannel] = useState(false);
  const handleDetailPannel = () => {
    setDetailPannel((prev) => !prev);
  };
  return (
    <div>
      <div className="flex gap-0 py-10 px-8 bg-white dark:!bg-dark_primary_pnl rounded-lg">
        <div className="flex-1">
          <div className="block ">
            <div className="flex gap-3 mb-2 pb-1 border-b border-b-slate-100">
              <span className="pr-2 border-r-2 border-r-slate-100">Cheap</span>
              <span className="">Rating: </span>
              <span className="text-yellow-500 ">4.5</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="transport-image max-w-[160px] max-h-[220px] overflow-hidden -ml-4">
                <img
                  className="w-full h-full rounded-lg"
                  src="https://images.moneycontrol.com/static-mcnews/2021/08/Indian-Railways.jpg?impolicy=website&width=770&height=431"
                  alt="tau_image"
                />
              </div>

              <span className="p-2 font-bold text-lg ">Ga Da Nang</span>
              <div className="flex flex-col gap-1 text-sm">
                <span className="time-start">12:00</span>
                <span>DAN</span>
              </div>
              <div className="flex flex-col gap-1 items-center text-sm">
                <div className="w-[100px] border-dotted border-b-2"></div>
                <span>13 gio</span>
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <span className="time-start">12:00</span>
                <span>DAN</span>
              </div>

              <span className="p-2 font-bold text-lg ">Ga Sai Gon</span>

              <div className="flex flex-col gap-1">
                <div className="opacity-40 text-[13px] max-w-[160px]">
                  * Xem tong quan
                </div>
                <div
                  onClick={handleDetailPannel}
                  className="btn flex gap-1 items-center px-4 py-2 text-sm bg-slate-100 dark:!bg-gray-800 dark:text-white w-fit"
                >
                  Chi Tiet
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-3 w-3 font-bold arrow-detail ml-2 ${
                      detailPannel ? "active" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-2 pl-10">
          <div className="money px-2 font-bold">950.000 vnd</div>
          <Link
            to="/payment"
            className="btn-pay px-4 py-2 rounded-lg bg-primary text-white"
          >
            Dat Ngay
          </Link>
        </div>
      </div>
      <div className={detailPannel ? "block" : "hidden"}>
        {" "}
        <div className="flex gap-4 ml-2 mt-2 cursor-pointer">
          <span className="border-b-2 border-b-gray-200 px-2">Details</span>
          <span>Policy</span>
        </div>
        <div className="bg-white rounded-tl-none rounded-tr-none rounded-br-lg rounded-bl-lg w-full h-[200px]"></div>
      </div>
    </div>
  );
};

export default TicketItem;
