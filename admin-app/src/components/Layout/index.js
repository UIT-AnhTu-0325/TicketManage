import React from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";

import { Header } from "../Header";
import "../../asset/css/components-css/Layout.css";
import { Sidebar } from "../sidebar/Sidebar";
import Routes from "../../MainRoutes";
import MainRoutes from "../../MainRoutes";
import { TopNav } from "../topnav/TopNav";
import BreakCrumb from "../breakcrumb/BreakCrumb";

/**
 * @author
 * @function Layout
 **/

export const Layout = (props) => {
  return (
    <>
      {props.sidebar ? (
        <Container fluid>
          <Row>
            {/* Side bar */}
            <Col md={2} className="slidebar">
              {/* <ul>
                <li>
                  <NavLink exact to={`/`}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`/routes`}>Routes</NavLink>
                </li>
                <li>
                  <NavLink to={`/enterprises`}>Enterprises</NavLink>
                </li>

                <li>
                  <NavLink to={`/analytics`}>Analytics</NavLink>
                </li>
            

              </ul> */}
              <Sidebar />
            </Col>

            {/* Right content */}
            <Col
              className="right-content"
              md={10}
              style={{
                marginLeft: "300px",
                position: "relative",
                paddingTop: "110px",
              }}
            >
              <TopNav dashboard={props.dashboard} />
              {props.children}
            </Col>
          </Row>
        </Container>
      ) : (
        props.children
      )}
    </>
  );
};
