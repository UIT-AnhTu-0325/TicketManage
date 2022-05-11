import { Select } from "antd";
import React from "react";

const SearchHeader = () => {
  const { Option } = Select;
  return (
    <div className="page-container w-full min-h-[90px] pt-2 bg-white rounded-lg pr-10 shadow-sm  pl-10 mt-4 dark:!bg-dark_primary_pnl dark:!text-white">
      <div className="flex gap-4 justify-end">
        <div className="flex flex-col gap-1">
          <span className="font-sm opacity-80">From</span>
          <div className="px-4 py-2 bg-gray-50   dark:!bg-dark_input  rounded-lg">
            <input
              className="bg-transparent outline-none "
              type="text"
              placeholder="Ha Noi"
              value="Ha Noi"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <span className="font-sm opacity-80">To</span>
          <div className="px-4 py-2 bg-gray-50 dark:!bg-dark_input rounded-lg">
            <input
              className="bg-transparent outline-none "
              type="text"
              placeholder="Da Nang"
              value="Da Nang"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <span className="font-sm opacity-80">Time</span>
          <div className="px-4 py-2 bg-gray-50  dark:!bg-dark_input  rounded-lg">
            <input
              className="bg-transparent  outline-none "
              type="text"
              placeholder="10/5/2022"
              value="10/5/2022"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <span className="font-sm opacity-80">Khoang</span>
          <div className="selected-option px-4 py-1 dark:!text-white dark:!bg-dark_input  bg-gray-50 rounded-lg">
            <Select defaultValue="lucy" style={{ width: 120 }}>
              <Option value="jack">1 seat</Option>
              <Option value="lucy">2 seat</Option>
              <Option value="disabled">3 seat</Option>
              <Option value="Yiminghe">4 seat</Option>
            </Select>
          </div>
        </div>
        <div className="flex-1 flex justify-end ">
          <div className=" btn px-10 py-2 rounded-lg bg-black mt-3 text-white inline-block h-fit">
            Search
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;
