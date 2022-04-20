import React from "react";

/**
 * @author
 * @function HeaderLogin
 **/

export const HeaderLogin = (props) => {
  return (
    <>
      {localStorage.getItem("id") == null ? (
        <div className="flex items-center">
          <div
            className="min-w-[160px] w-fit grid place-items-center  lg:hidden  mr-4 text-base  py-2  rounded-lg text-blue-500 border-2 dark:text-white  dark:border-blue-300 border-blue-500 hover:bg-blue-500 hover:text-white hover:border-none cursor-pointer"
            onClick={props.open}
            ref={props.nodeRef}
          >
            Đăng ký
          </div>

          <div
            className="min-w-[160px] w-fit px- mr-6 text-base grid place-items-center py-2 rounded-lg border-transparent border-2 bg-blue-500 text-white hover:bg-blue-400 cursor-pointer"
            onClick={props.open}
          >
            Đăng nhập
          </div>
        </div>
      ) : (
        <div className="header__login  js-btn-login">
          <a className="mybtn" href="/profile">
            <i className="btn-icon bx bx-user"></i>
            <span>
              {localStorage.getItem("firstName")}{" "}
              {localStorage.getItem("lastName")}
            </span>
          </a>
        </div>
      )}
    </>
  );
};
