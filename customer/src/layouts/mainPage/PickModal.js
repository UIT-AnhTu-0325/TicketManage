import React from "react";
import ReactDom from "react-dom";

const PickModal = ({ coords }) => {
  return ReactDom.createPortal(
    <div
      style={{
        top: coords.top + window.scrollY + coords.height,
        left: coords.left,
        minWidth: coords.width,
      }}
      className="absolute z-10 min-w-[300px] max-h-[350px] min-h-[50px] bg-white rounded-xl top-full mt-2 -ml-10 overflow-scroll shadow-lg"
    >
      <div className="item border-b-2 border-b-gray-50  flex gap-4 items-center hover:bg-gray-100 cursor-pointer px-4 py-3 pr-10 pt-4">
        <i class="fa-solid fa-location-dot"></i>
        <div className="flex flex-col">
          <span className=""> Quảng Nam</span>
          <span className="desc text-sm block mt-1 text-[#637280]">
            Tỉnh Quảng Nam, Viet Nam
          </span>
        </div>
      </div>
      <div className="item border-b-2 border-b-gray-50 flex gap-4 items-center hover:bg-gray-100 cursor-pointer px-4 py-3 ">
        <i class="fa-solid fa-location-dot"></i>
        <div className="flex flex-col">
          <span className=""> Hội An</span>
          <span className="desc text-sm block mt-1 text-[#637280]">
            Tỉnh Quảng Nam, Viet Nam
          </span>
        </div>
      </div>
      <div className="item border-b-2 border-b-gray-50  flex gap-4 items-center hover:bg-gray-100 cursor-pointer px-4 py-3 ">
        <i class="fa-solid fa-location-dot"></i>
        <div className="flex flex-col">
          <span className=""> Long An</span>
          <span className="desc text-sm block mt-1 text-[#637280]">
            Tỉnh Quảng Nam, Viet Nam
          </span>
        </div>
      </div>
      <div className="item border-b-2 border-b-gray-50  flex gap-4 items-center hover:bg-gray-100 cursor-pointer px-4 py-3 ">
        <i class="fa-solid fa-location-dot"></i>
        <div className="flex flex-col">
          <span className=""> An Giang</span>
          <span className="desc text-sm block mt-1 text-[#637280]">
            Tỉnh Quảng Nam, Viet Nam
          </span>
        </div>
      </div>

      <div className="item border-b-2 border-b-gray-50  flex gap-4 items-center hover:bg-gray-100 cursor-pointer px-4 py-3 ">
        <i class="fa-solid fa-location-dot"></i>
        <div className="flex flex-col">
          <span className=""> An Giang</span>
          <span className="desc text-sm block mt-1 text-[#637280]">
            Tỉnh Quảng Nam, Viet Nam
          </span>
        </div>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default PickModal;
