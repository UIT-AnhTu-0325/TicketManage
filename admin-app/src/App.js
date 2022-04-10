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

import { Analytics } from "./containers/Analytics";

import { DashBoard } from "./pages/Dashboard";
import { Customer } from "./pages/Customers";

import "./asset/css/main.css";
import { EnterpriseDetails } from "./containers/EnterpriseDetails";
import { RouteDetails } from "./containers/RouteDetails";
import { User } from "./containers/User";
import { TripDetails } from "./containers/TripDetails";
import { UserDetail } from "./components/customer/UserDetail";

import { Rules } from "./pages/Rules";

import { AdminBooking } from "./pages/adminbooking/AdminBooking";
import { UserDetails } from "./containers/UserDetails";
import { OfflineTicket } from "./containers/OfflineTicket";
import PropTypes from "prop-types";

const App = (props) => {
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
        <Route path="/booking" component={AdminBooking} />
        <Route path="/home" exact component={Home} />
        <Route
          path="/enterprises/:enterpriseId/informations/:routeId/routeinfo"
          component={RouteDetails}
        ></Route>
        <Route
          path="/enterprises/:enterpriseId/informations"
          component={EnterpriseDetails}
        ></Route>
        <Route path="/user/:userId/info" component={UserDetails}></Route>
        <Route path="/user/:userId/userdetail" component={UserDetails}></Route>

        <Route
          path="/routes/:routeId/informations"
          component={RouteDetails}
        ></Route>
        <Route
          path="/trips/:tripId/informations"
          component={TripDetails}
        ></Route>
        <Route path="/trips/:tripId/tickets" component={OfflineTicket}></Route>
        <Route path="/routes" component={WayRouters} />
        <Route path="/enterprises" exact component={Enterprise} />
        <Route path="/analytics" component={Analytics} />

        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/user" component={User} />
        <Route path="/settings" component={Rules} />

        {/* New Route */}
        <Route path="/" component={DashBoard} />
        <Route path="/customers" component={Customer} />
        <Route path="/booking" component={AdminBooking} />
      </Routes>
    </div>
  );
};

App.propTypes = {};

export default App;
