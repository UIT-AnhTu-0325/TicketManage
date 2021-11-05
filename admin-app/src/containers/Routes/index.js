import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addRoute,
  deleteRoute,
  editRoute,
  getAllEnterprises,
  getAllRoutes,
} from "../../actions";
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
import { Input } from "../../components/UI/Input";

/**
 * @author
 * @function Routes
 **/

export const Routes = (props) => {
  const dispatch = useDispatch();
  const state_route = useSelector((state) => state.route);
  const state_enterprise = useSelector((state) => state.enterprise);
  const [modalShow, setModalShow] = useState(false);
  const [modalFlag, setModalFlag] = useState("Add");
  const [modalTitle, setModalTitle] = useState();

  const initRoute = () => {
    return {
      _id: "",
      idEnterprise: "",
      startLocation: "",
      endLocation: "",
      startTime: 0.0,
      totalTime: 0.0,
    };
  };
  const [route, setRoute] = useState(initRoute);

  useEffect(() => {
    dispatch(getAllRoutes());
    dispatch(getAllEnterprises());
  }, []);

  const createAddressList = (options = []) => {
    options.push({ value: 1, name: "Ho Chi Minh" });
    options.push({ value: 2, name: "Da Lat" });
    options.push({ value: 3, name: "Nha Trang" });
    return options;
  };

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
          <Button
            onClick={() => {
              handleModalShow("Edit", route);
            }}
          >
            Edit
          </Button>
          <Button
            onClick={() => {
              delRoute(route);
            }}
          >
            Delete
          </Button>
        </ListGroupItem>
      );
    }
    return myRoutes;
  };

  const handleModalShow = (iFlag, route) => {
    if (iFlag === "Add") {
      setModalFlag("Add");
      setModalTitle("Add Route");
    } else {
      setModalFlag("Edit");
      setModalTitle("Edit Route");
      setRoute(route);
    }
    console.log(modalFlag);
    setModalShow(true);
  };
  const handleModalSave = () => {
    const form = route;
    if (modalFlag === "Add") {
      dispatch(addRoute(form));
      console.log("doAdd");
    } else {
      dispatch(editRoute(form));
      console.log("doEdit");
    }
    setRoute(initRoute);
    setModalShow(false);
  };
  const handleModalClose = () => {
    setRoute(initRoute);
    setModalShow(false);
  };

  const delRoute = (selectedRot) => {
    const form = {
      _id: selectedRot._id,
    };
    dispatch(deleteRoute(form));
  };

  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Routes</h3>
              <button
                onClick={() => {
                  modalFlag = "Add";
                  handleModalShow("Add");
                }}
              >
                Add
              </button>
            </div>
          </Col>
        </Row>
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

      {/* SHOW MODAL FOR ADD - FIX THEM */}
      <Modal show={modalShow} onHide={handleModalClose}>
        <Modal.Header>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <select
            className="form-control"
            value={route.startLocation}
            onChange={(e) =>
              setRoute({ ...route, startLocation: e.target.value })
            }
          >
            <option>Start Location</option>
            {createAddressList().map((option) => (
              <option key={option.value} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
          <select
            className="form-control"
            value={route.endLocation}
            onChange={(e) =>
              setRoute({ ...route, endLocation: e.target.value })
            }
          >
            <option>End Location</option>
            {createAddressList().map((option) => (
              <option key={option.value} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
          <select
            className="form-control"
            value={route.idEnterprise}
            onChange={(e) =>
              setRoute({ ...route, idEnterprise: e.target.value })
            }
          >
            <option>Enterprise</option>
            {state_enterprise.enterprises.map((option) => (
              <option key={option._id} value={option._id}>
                {option.name}
              </option>
            ))}
          </select>
          <Input
            value={route.startTime}
            placeholder={`Start Time`}
            onChange={(e) => setRoute({ ...route, startTime: e.target.value })}
          ></Input>
          <Input
            value={route.totalTime}
            placeholder={`Total Time`}
            onChange={(e) => setRoute({ ...route, totalTime: e.target.value })}
          ></Input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleModalSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
};
