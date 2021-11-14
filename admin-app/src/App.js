import React, { useEffect, useState } from "react";

import { Route, Switch } from "react-router-dom";
import { Home } from "./containers/Home";
import { Signin } from "./containers/Signin";
import { Signup } from "./containers/Signup";
import PrivateRoute from "./components/HOC/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./actions";
import { Routes } from "./containers/Routes";
import { Enterprise } from "./containers/Enterprise";

import { Analytics } from "./containers/Analytics";

import { DashBoard } from "./pages/Dashboard";
import { Customer } from "./pages/Customers";

import "./asset/css/main.css";
import { EnterpriseDetails } from "./containers/EnterpriseDetails";
import { RouteDetails } from "./containers/RouteDetails";
import { User } from "./containers/User";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route
          path="/enterprises/:enterpriseId/informations"
          component={EnterpriseDetails}
        ></Route>
        <Route
          path="/routes/:routeId/informations"
          component={RouteDetails}
        ></Route>
        <Route path="/routes" component={Routes} />
        <Route path="/enterprises" exact component={Enterprise} />
        <Route path="/analytics" component={Analytics} />

        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/user" component={User} />

        {/* New Route */}
        <Route path="/" component={DashBoard} />
        <Route path="/customers" component={Customer} />
      </Switch>
    </div>
  );
}

export default App;
