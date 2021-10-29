import React from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Header } from "../Header";
import "../../asset/css/components-css/Layout.css";
/**
 * @author
 * @function Layout
 **/

export const Layout = (props) => {
  return (
    <>
      <Header />
      {props.sidebar ? (
        <Container fluid>
          <Row>
            <Col md={2} className="slidebar">
              <ul>
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
              </ul>
            </Col>
            <Col md={10} style={{ marginLeft: "auto", paddingTop: "60px" }}>
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
