import React from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Header } from "../Header";
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
            <Col md={2} className="sidebar">
              <ul>
                <li>
                  <NavLink to={`/`}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={`/routes`}>Routes</NavLink>
                </li>
                <li>
                  <NavLink to={`/enterprises`}>Enterprises</NavLink>
                </li>
              </ul>
            </Col>
            <Col md={10} style={{ marginLeft: "auto" }}>
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
