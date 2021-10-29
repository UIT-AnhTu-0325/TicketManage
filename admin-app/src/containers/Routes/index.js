import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEnterprises, getAllRoutes } from "../../actions";
import { Layout } from "../../components/Layout";
import {
  Button,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Modal,
  Row,
} from "react-bootstrap";

/**
 * @author
 * @function Routes
 **/

export const Routes = (props) => {
  const dispatch = useDispatch();
  const state_route = useSelector((state) => state.route);
  const state_enterprise = useSelector((state) => state.enterprise);

  useEffect(() => {
    dispatch(getAllRoutes());
    dispatch(getAllEnterprises());
  }, []);

  const findEnterpriseName = (idEnterprise) => {
    for (let ent of state_enterprise.enterprises) {
      if (ent._id === idEnterprise) return ent.name;
    }
    return "";
  };

  const renderRoutes = (routes) => {
    let myRoutes = [];
    for (let route of routes) {
      myRoutes.push(
        <ListGroupItem className="d-flex justify-content-around">
          <strong>{route.startLocation}</strong>
          <strong>{route.endLocation}</strong>
          <div> {findEnterpriseName(route.idEnterprise)} </div>
          <div>{route.startTime}</div>
          <div>{route.totalTime}</div>
        </ListGroupItem>
      );
    }
    return myRoutes;
  };
  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <ul>
              <ListGroup className="mt-4">
                {renderRoutes(state_route.routes)}
              </ListGroup>
            </ul>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
