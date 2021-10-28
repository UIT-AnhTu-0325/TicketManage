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
  const [addShow, setAddShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [enterpriseID, setEnterpriseID] = useState("");
  const [enterpriseName, setEnterpriseName] = useState("");
  const [enterpriseAddress, setEnterpriseAddress] = useState("");
  const enterprise = useSelector((state) => state.enterprise);

  useEffect(() => {
    dispatch(getAllEnterprises());
  }, []);

  const createEnterPrisesAddressList = (options = []) => {
    options.push({ value: 1, name: "Ho Chi Minh" });
    options.push({ value: 2, name: "Da Lat" });
    options.push({ value: 3, name: "Nha Trang" });
    return options;
  };

  const renderEnterprises = (enterprises) => {
    let myEnterprises = [];
    for (let enterprise of enterprises) {
      myEnterprises.push(
        <ListGroupItem className="d-flex justify-content-around">
          <strong> {enterprise.name}</strong>
          <div className="ml-auto">
            <Button
              color="warning"
              onClick={() => {
                handleEditShow(enterprise);
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

  const handleAddShow = () => setAddShow(true);
  const handleAddSave = () => {
    const form = {
      name: enterpriseName,
      address: enterpriseAddress,
    };

    dispatch(addEnterprise(form));

    setEnterpriseName("");
    setEnterpriseAddress("");

    setAddShow(false);
  };
  const handleAddClose = () => {
    setAddShow(false);
  };

  const handleEditShow = (selectedEnt) => {
    setEditShow(true);
    setEnterpriseID(selectedEnt._id);
    setEnterpriseName(selectedEnt.name);
    setEnterpriseAddress(selectedEnt.address);
  };
  const handleEditSave = () => {
    const form = {
      _id: enterpriseID,
      name: enterpriseName,
      address: enterpriseAddress,
    };
    dispatch(editEnterprise(form));
    setEditShow(false);
  };
  const handleEditClose = () => {
    setEditShow(false);
  };

  const delEnterprise = (selectedEnt) => {
    //setEnterpriseID(selectedEnt._id);
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
              <button onClick={handleAddShow}>Add</button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <ul>
              <ListGroup className="mt-4">
                {renderEnterprises(enterprise.enterprises)}
              </ListGroup>
            </ul>
          </Col>
        </Row>
      </Container>
      {/* SHOW MODAL FOR ADD - FIX THEM */}
      <Modal show={addShow} onHide={handleAddClose}>
        <Modal.Header>
          <Modal.Title>Add New Enterprise</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input
            value={enterpriseName}
            placeholder={`Enterprise Name`}
            onChange={(e) => setEnterpriseName(e.target.value)}
          ></Input>
          <select
            className="form-control"
            value={enterpriseAddress}
            onChange={(e) => setEnterpriseAddress(e.target.value)}
          >
            <option>Address</option>
            {createEnterPrisesAddressList().map((option) => (
              <option key={option.value} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAddClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* SHOW MODAL FOR EDIT - FIX THEM */}
      <Modal show={editShow} onHide={handleEditClose}>
        <Modal.Header>
          <Modal.Title>Edit Enterprise</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input
            value={enterpriseName}
            placeholder={`Enterprise Name`}
            onChange={(e) => setEnterpriseName(e.target.value)}
          ></Input>
          <select
            className="form-control"
            value={enterpriseAddress}
            onChange={(e) => setEnterpriseAddress(e.target.value)}
          >
            <option>Address</option>
            {createEnterPrisesAddressList().map((option) => (
              <option key={option.value} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
};
