import React, { Fragment, useEffect, useState } from "react";
import { LayoutCustomer } from "../components/Layout";
import { Steps } from "antd";
import { Link } from "react-router-dom";
import { checkDark } from "../ultils/darkMode";

const PaymentPage = () => {
  const [timeRemain, setTimeRemain] = useState(180);
  const { Step } = Steps;
  const isDark = checkDark();
  useEffect(() => {}, []);

  useEffect(() => {
    setTimeout(() => {
      setTimeRemain(timeRemain - 1);
    }, 1000);
  });
  return (
    <div className="dark:!bg-dark_primary_bg">
      <LayoutCustomer></LayoutCustomer>
      <div className="flex gap-4 mt-4 mx-8 px-10 ">
        <div className="flex flex-col max-w-[900px] ">
          <div className=" min-h-[60px] dark:!bg-dark_primary_pnl rounded-lg bg-white shadow-sm ">
            <div className="flex justify-between h-full items-center px-8 ">
              <span className="text-lg opacity-80 font-bold dark:text-white">
                Payment Options
              </span>
              <div className="flex gap-1 dark:text-white">
                <span className="opacity-50">The session will exprire in:</span>
                <span className="text-blue-500 dark:!text-white ">{`${timeRemain}s`}</span>
              </div>
            </div>
          </div>
          <div
            className={`payment-process  dark:!text-white min-h-[60px] rounded-lg bg-white dark:!bg-dark_primary_pnl mt-2 shadow-sm grid ${
              isDark ? "dark" : ""
            }`}
          >
            <div className="flex justify-between h-full items-center  px-8">
              <Steps size="small" className="dark:!text-white" current={2}>
                <Step className="dark:text-white" title="Select Set" />
                <Step title="Information" />
                <Step title="Payment" />
              </Steps>
            </div>
          </div>

          <div className="rounded-lg bg-white min-h-[400px] dark:!bg-dark_primary_pnl mt-4 px-10 pt-5">
            <div className="creadit-card">
              <h3 className="mb-3 dark:text-white">Credit Cards</h3>
              {/* method paying */}
              <div className="flex gap-4 ">
                <div className="item cursor-pointer bg-white dark:!bg-dark_secondary_pnl shadow-md  rounded-lg min-w-[140px] min-h-[50px]">
                  <label className="method-item w-full h-full cursor-pointer ">
                    <input type="radio" className="" name="credit-method" />
                    <div className="method-inside relative w-full h-full rounded-lg  flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 absolute bg-white  rounded-full overflow-hidden right-0 top-0 translate-x-1/3 z-10 -translate-y-1/3"
                        viewBox="0 0 20 20"
                        fill="#00CC17"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="w-12 h-12">
                        {" "}
                        <img
                          className="w-full h-full object-contain"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/800px-Mastercard-logo.svg.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </label>
                </div>

                <div className="item bg-white dark:!bg-dark_secondary_pnl shadow-md  rounded-lg min-w-[130px] min-h-[54px]">
                  <label className="method-item w-full h-full cursor-pointer ">
                    <input type="radio" className="" name="credit-method" />
                    <div className="method-inside relative w-full h-full rounded-lg  flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 absolute bg-white rounded-full overflow-hidden right-0 top-0 translate-x-1/3 z-10 -translate-y-1/3"
                        viewBox="0 0 20 20"
                        fill="#00CC17"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="w-12 h-12">
                        {" "}
                        <img
                          className="w-full h-full object-contain"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </label>
                </div>

                <div className="item bg-white shadow-md dark:!bg-dark_secondary_pnl rounded-lg min-w-[130px] min-h-[54px]">
                  <label className="method-item w-full h-full  cursor-pointer">
                    <input type="radio" className="" name="credit-method" />
                    <div className="method-inside relative w-full h-full rounded-lg  flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 absolute bg-white rounded-full overflow-hidden right-0 top-0 translate-x-1/3 z-10 -translate-y-1/3"
                        viewBox="0 0 20 20"
                        fill="#00CC17"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="w-10 h-10">
                        {" "}
                        <img
                          className="w-full h-full object-contain"
                          src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1458245625/pwegh6kadcb37kuz0woj.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </label>
                </div>

                <div className="item bg-white shadow-md  dark:!bg-dark_secondary_pnl rounded-lg min-w-[130px] min-h-[54px]">
                  <label className="method-item w-full h-full  cursor-pointer">
                    <input type="radio" className="" name="credit-method" />
                    <div className="method-inside relative w-full h-full rounded-lg  flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 absolute bg-white rounded-full overflow-hidden right-0 top-0 translate-x-1/3 z-10 -translate-y-1/3"
                        viewBox="0 0 20 20"
                        fill="#00CC17"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="w-12 h-12">
                        {" "}
                        <img
                          className="w-full h-full object-contain"
                          src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404__480.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <div className="mt-10 w-full bg-white dark:!bg-dark_primary_pnl rounded-lg">
                <div className="opacity-80 mb-2 dark:text-white">Name Card</div>
                <input
                  type="text"
                  className="w-full outline-none px-3 py-[10px] rounded-md bg-gray-100 border border-gray-200  dark:!bg-dark_input  dark:!border-gray-800 dark:text-white "
                />
                <div className="flex gap-4 mt-4">
                  <div className="item flex-[3]">
                    <div className="opacity-80 mb-2 dark:text-white">
                      Card Number
                    </div>
                    <input
                      type="text"
                      className="w-full outline-none px-3 py-[10px]  rounded-md bg-gray-100 dark:!bg-dark_input border dark:!border-gray-800 dark:text-white  border-gray-200 "
                    />
                  </div>
                  <div className="item">
                    <div className="opacity-80 mb-2 dark:text-white">CCV</div>
                    <input
                      type="text"
                      className="w-full outline-none px-3 py-[10px] rounded-md bg-gray-100 border border-gray-200 dark:!bg-dark_input  dark:!border-gray-800 dark:text-white  "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right pannel general info */}
        <div className="flex-1 min-w-[300px] min-h-[400px] rounded-lg dark:!opacity-90 dark:!text-white  bg-white dark:!bg-dark_primary_pnl flex-col ">
          <div className="flex justify-center mt-4 text-center">
            <div className="flex items-center gap-1 w-fit ">
              <div className="flex flex-col gap-1 text-sm">
                <span className="time-start">12:00 AM</span>
                <span className="font-bold opacity-90">Ga Da Nang</span>
              </div>
              <div className="flex flex-col gap-1 items-center text-sm">
                <div className="w-[100px] border-dotted border-b-2"></div>
                <span>13 gio</span>
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <span className="time-start">04:30 PM</span>
                <span className="font-bold opacity-90">Ga Sai Gon</span>
              </div>
            </div>
          </div>

          <div className="flex mt-4 justify-center dark:!text-white ">
            <div className="transport-image max-w-[280px] max-h-[280px] overflow-hidden ">
              <img
                className="w-full h-full rounded-lg dark:opacity-75"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Tile_Hill_train_727.jpg/640px-Tile_Hill_train_727.jpg"
                alt="tau_image"
              />
            </div>
          </div>

          <div className="flex gap-1 mt-2 items-center ml-10 dark:!text-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="#FFCC00"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            <span className="opacity-80 text-sm">4.8</span>
            <span className="opacity-50 text-sm">(23 rates)</span>
          </div>

          <div className="flex flex-col ml-10 mt-2 dark:!text-white ">
            <div className="flex gap-4">
              <div className="block border-r-2 border-r-gray-200  mt-2 pr-4">
                <div className="text-sm opacity-50">Ngay Di</div>
                <div className="text-sm opacity-90">30/4/2022</div>
              </div>
              <div className="block">
                <div className="text-sm opacity-50 mt-2">So luong</div>
                <div className="text-sm  opacity-90">2 nguoi</div>
              </div>
            </div>
          </div>

          <div className="text-lg font-bold opacity-80 mt-4 px-10">Summary</div>
          <div className="mt-2 flex flex-col gap-3 px-7 text-sm dark:!text-white ">
            <div className="item flex justify-between px-3">
              <div className="opacity-60">3x passenger</div>
              <div className="font-bold">480.000 vnd</div>
            </div>
            <div className="item flex justify-between px-3">
              <div className="opacity-60">Tax and fee</div>
              <div className="font-bold">1.240.000 vnd</div>
            </div>
            <div className="item flex justify-between px-3">
              <div className="opacity-60">Services</div>
              <div className="font-bold">100.000 vnd</div>
            </div>
            <div className="item flex justify-between bg-gray-100 dark:!bg-opacity-10 dark:!text-white rounded-lg py-2 px-3 ">
              <div className="opacity-60">Total</div>
              <div className="font-bold">1.590.000 vnd</div>
            </div>

            <Link
              to="/"
              className="px-4 py-[12px] rounded-lg bg-primary text-white text-center mt-3 mb-10"
            >
              Pay
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
