import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { HomePage } from "./containers/HomPage";
import { TicketPage } from "./containers/TiketPage";
import { ProfileSetting } from "./containers/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import "./asset/css/base.css";
import "./asset/css/main.css";

const AppRoute = () => {
  let routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/ticket", element: <TicketPage /> },
    { path: "profile", element: <ProfileSetting /> },
  ]);

  return routes;
};

const App = (props) => {
  return (
    <Router>
      <AppRoute />
    </Router>
  );
};

export default App;
