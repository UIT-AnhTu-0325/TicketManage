import React, { useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";
import { Home } from "./containers/Home";
import { Signin } from "./containers/Signin";
import { Signup } from "./containers/Signup";
import PrivateRoute from "./components/HOC/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./actions";
import { Routes as WayRouters } from "./containers/Routes";
import { Enterprise } from "./containers/Enterprise";
import { DashBoard } from "./pages/Dashboard";
import { Customer } from "./pages/Customers";

import "./asset/css/main.css";

function MainRoutes() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={Home} />
        <Route path="/routes" element={WayRouters} />
        <Route path="/enterprises" element={Enterprise} />
        <Route path="/signin" element={Signin} />
        <Route path="/signup" element={Signup} />

        {/* New Route */}
        <Route path="/home" element={DashBoard} />
        <Route path="/customers" element={Customer} />
      </Routes>
    </div>
  );
}

export default MainRoutes;
