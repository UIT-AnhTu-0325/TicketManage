import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Modal,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addEnterprise,
  deleteEnterprise,
  editEnterprise,
  getAllCities,
  getAllEnterprises,
} from "../../actions";
import { Layout } from "../../components/Layout";
import { Input } from "../../components/UI/Input";

/**
 * @author
 * @function Enterprise
 **/

export const Enterprise = (props) => {
  const dispatch = useDispatch();
  const initEnterprise = () => {
    return {
      _id: "",
      name: "",
      address: "",
    };
  };
  const [enterprise, setEnterprise] = useState(initEnterprise);
  const state_enterprise = useSelector((state) => state.enterprise);
  const state_city = useSelector((state) => state.city);
  const [modalShow, setModalShow] = useState(false);
  const [modalFlag, setModalFlag] = useState("Add");
  const [modalTitle, setModalTitle] = useState();

  useEffect(() => {
    dispatch(getAllEnterprises());
    dispatch(getAllCities());
  }, []);

  const renderEnterprises = (enterprises) => {
    let myEnterprises = [];
    for (let enterprise of enterprises) {
      myEnterprises.push(
        <ListGroupItem className="d-flex justify-content-around">
          <strong> {enterprise.name}</strong>
          <div>{enterprise.address}</div>
          <div className="ml-auto">
            <Button
              color="warning"
              onClick={() => {
                handleModalShow("Edit", enterprise);
              }}
            >
              Edit
            </Button>
            <Button color="danger" onClick={() => delEnterprise(enterprise)}>
              Delete
            </Button>
          </div>
        </ListGroupItem>
      );
    }
    return myEnterprises;
  };

  const handleModalShow = (iFlag, enterprise = []) => {
    if (iFlag === "Add") {
      setModalFlag("Add");
      setModalTitle("Add Route");
    } else {
      setModalFlag("Edit");
      setModalTitle("Edit Route");
      setEnterprise(enterprise);
    }
    setModalShow(true);
  };
  const handleModalSave = () => {
    const form = enterprise;
    if (modalFlag === "Add") {
      dispatch(addEnterprise(form));
    } else {
      dispatch(editEnterprise(form));
    }
    setEnterprise(initEnterprise);
    setModalShow(false);
  };
  const handleModalClose = () => {
    setEnterprise(initEnterprise);
    setModalShow(false);
  };

  const delEnterprise = (selectedEnt) => {
    const form = {
      _id: selectedEnt._id,
    };
    dispatch(deleteEnterprise(form));
  };

  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Enterprises</h3>
              <button
                onClick={() => {
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
                {renderEnterprises(state_enterprise.enterprises)}
              </ListGroup>
            </ul>
          </Col>
        </Row>
      </Container>
      {/* SHOW MODAL - FIX THEM */}
      <Modal show={modalShow} onHide={handleModalClose}>
        <Modal.Header>
          <Modal.Title>Add New Enterprise</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input
            value={enterprise.name}
            placeholder={`Enterprise Name`}
            onChange={(e) =>
              setEnterprise({ ...enterprise, name: e.target.value })
            }
          ></Input>
          <select
            className="form-control"
            value={enterprise.address}
            onChange={(e) =>
              setEnterprise({ ...enterprise, address: e.target.value })
            }
          >
            <option>Address</option>
            {state_city.cities.map((option) => (
              <option key={option._id} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
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
