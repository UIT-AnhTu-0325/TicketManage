import React from "react";
import ReactDom from "react-dom";

const AuthModal = ({ handleClose }) => {
  return ReactDom.createPortal(
    <div className="fixed inset-0 modal-login ">
      <div className="overlay absolute inset-0 bg-[#0000009a]"></div>
      <div className="relative w-screen inset-0 ">
        <div className="w-[450px] h-[600px] mx-auto mt-10 rounded-2xl p-10 bg-white relative">
          <div className="heading text-2xl font-bold">
            Welcome to Ticket Booking
          </div>
          <div className="method-login flex items-center gap-3 text-base mt-4">
            <div className="login-gg flex-1 p-6 rounded-xl bg-blue-500 text-white flex h-[60px] items-center justify-center gap-4">
              <i class="fa-brands fa-google"></i>
              Sign in with Google
            </div>
            <div className="login-fb rounded-xl bg-gray-800 p-4 text-white w-[60px] h-[60px] grid place-items-center">
              <i class="fa-brands fa-facebook-f"></i>
            </div>
          </div>

          <div className="mb-6 txt-orlogin mt-4 text-center relative before:absolute before:content-[''] before:w-[30%] before:border-2 before:border-gray-100 before:left-2 before:top-2/4 after:absolute after:content-[''] after:w-[30%] after:right-2 after:border-2 after:border-gray-100 after:top-2/4">
            or login with
          </div>

          <div className="opacity-70 text-sm ">Email address</div>
          <input
            type="email"
            placeholder="email@gmail.com"
            className="w-full px-6 py-3 rounded-xl bg-gray-100 mt-2 outline-none focus:border-2 focus:border-gray-300 border-2 border-transparent"
          />
          <div className="opacity-70 text-sm mt-4 ">Password</div>
          <input
            type="password"
            placeholder="password..."
            className="w-full px-6 py-3 rounded-xl bg-gray-100 mt-2 outline-none focus:border-2 focus:border-gray-300 border-2 border-transparent"
          />

          <div className="text-right mt opacity-70 text-sm mt-2 mr-1">
            Forgot your password?
          </div>

          <button className="px-4 py-3 text-center uppercase w-full bg-blue-500 text-white mt-3 rounded-xl hover:bg-blue-400">
            Login
          </button>
          <div className="mt-3 text-center">
            Dont have account ?{" "}
            <span className="text-blue-400 cursor-pointer">Sign Up</span>
          </div>

          {/* exit  */}
          <div
            onClick={handleClose}
            className="absolute right-0 top-0 w-[60px] h-[60px] rounded-full shadow-xl mt-2 mr-2 translate-x-2/4 -translate-y-2/4 text-4xl cursor-pointer  bg-white hover:!bg-blue-100   grid place-items-center"
          >
            <i class="bx bx-x opacity-70 "></i>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default AuthModal;
