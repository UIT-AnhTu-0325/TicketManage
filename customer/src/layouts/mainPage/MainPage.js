import React, { useEffect, useState } from "react";
import PickModal from "./PickModal";
import { ReactDom } from "react-dom";
import useClickOutSide from "../../hooks/useClickOutSide";
import PickQuantityTicket from "./PickQuantityTicket";
import "./mainPage.scss";

const MainPage = () => {
  const {
    show: show1,
    setShow: setShow1,
    nodeRef: nodeRef1,
  } = useClickOutSide();
  const {
    show: show2,
    setShow: setShow2,
    nodeRef: nodeRef2,
  } = useClickOutSide();

  const {
    show: showQuantity,
    setShow: setShowQuantity,
    nodeRef: nodeRefQuantity,
  } = useClickOutSide(".quantity-box");
  // const { show, setshow1, nodeRef } = useClickOutSide();
  const [coords, setCoords] = useState({});
  const handleOpenModal1 = () => {
    setShow1(true);
    console.log(nodeRef1.current.getBoundingClientRect());
    setCoords(nodeRef1.current.getBoundingClientRect());
  };
  const handleOpenModal2 = () => {
    setShow2(true);
    console.log(nodeRef1.current.getBoundingClientRect());
    setCoords(nodeRef2.current.getBoundingClientRect());
  };
  const handleOpenModalQuantity = () => {
    setShowQuantity(true);
    setCoords(nodeRefQuantity.current.getBoundingClientRect());
  };

  return (
    <div className="relative mb-[150px] !transition-colors !duration-1000">
      <div className="min-h-[200px]">
        <img
          className="w-full h-[500px] object-cover"
          src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/f5b01j54xainwtaosf8r/TourNg%C3%A0yThamQuanGrandCanyonWestRimT%E1%BB%ABLasVegas.webp"
          alt=""
        />
      </div>
      <div className="main-form rounded-lg bg-white  dark:!bg-[#2f2f2f] absolute pb-8 2xl:-bottom-16 lg:top-[150px] -translate-x-2/4 left-2/4 2xl:w-[1100px] lg:w-[85%] lg:mx-1 h-fit ">
        <div className="flex flex-col 2xl:px-14 lg:px-16 sm:px-8 pt-12 gap-10 ">
          <div className="flex justify-between  dark:text-white 2xl:flex-row lg:flex-col 2xl:border-b-gray-[#ccc] 2xl:border-b-2 lg:border-none ">
            <div className="flex content-center 2xl:gap-10 sm:gap-2 lg:border-b-gray-[#ccc] lg:border-b-2 ">
              <div className="flex  2xl:gap-3 lg:gap-2 text-lg leading-7 pr-1 mr-2 border-b-blue-400 pb-3 border-b-2 cursor-pointer">
                <i class="fa-solid fa-bus text-base"></i>
                <span className="">Bus</span>
              </div>
              <div className="flex 2xl:gap-3 lg:gap-2 text-lg leading-7 pr-1 mr-2 opacity-40 cursor-pointer hidden">
                <i class="fa-solid fa-cart-flatbed text-base"></i>
                <span className="">Transport</span>
              </div>
              <div className="flex 2xl:gap-3 lg:gap-2 text-lg leading-7 pr-1 mr-2 opacity-40 cursor-pointer">
                <i class="fa-solid fa-hotel text-base"></i>
                <span className="">Hotel</span>
              </div>
            </div>
            <div
              ref={nodeRefQuantity}
              onClick={handleOpenModalQuantity}
              className="flex gap-3 text-base items-center mb-4 2xl:mt-0 lg:mt-4 relative cursor-pointer"
            >
              <span className="w-fit block">1 Passenger</span>
              <i class="fa-solid fa-angle-down opacity-60"></i>
              {showQuantity && <PickQuantityTicket coords={coords} />}
            </div>
          </div>

          <div className="search-component content-between ">
            <div className="form-input  flex text-base 2xl:gap-2 lg:gap-4 2xl:flex-row lg:flex-col lg:-mt-10">
              <div
                ref={nodeRef1}
                onClick={handleOpenModal1}
                className="pl-10 pr-16 py-2 dark:bg-[#575757] dark:text-white rounded-lg bg-blue-50 flex flex-col relative cursor-pointer"
              >
                <span>Location</span>
                <span className="opacity-40">Your location?</span>
                {show1 && <PickModal coords={coords} />}
              </div>
              <div
                ref={nodeRef2}
                onClick={handleOpenModal2}
                className="pl-10 pr-16 py-2 dark:bg-[#575757] dark:text-white rounded-lg bg-gray-50 flex flex-col relative cursor-pointer"
              >
                <span>Location</span>
                <span className="opacity-40">Where do you go?</span>
                {show2 && <PickModal coords={coords} />}
              </div>
              <div className="pl-10 pr-16 py-2 dark:bg-[#575757] dark:text-white rounded-lg bg-gray-50 flex flex-col relative cursor-pointer">
                <span>Time</span>
                <span className="opacity-40">When you go?</span>
              </div>

              <div className="min-w-[160px] hover:bg-blue-400 cursor-pointer text-white btn-search bg-blue-500 2xl:ml-6 lg:ml-0 rounded-lg text-center grid content-center 2xl:max-w-[100px] lg:max-w-full min-h-[40px] lg:w-full 2xl:mt-0 lg:mt-6 lg:py-3">
                Search
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
