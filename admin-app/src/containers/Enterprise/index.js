import React, { useEffect, useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addEnterprise, getAllEnterprises } from "../../actions";
import { Layout } from "../../components/Layout";
import { Input } from "../../components/UI/Input";

/**
 * @author
 * @function Enterprise
 **/

export const Enterprise = (props) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [enterpriseName, setEnterpriseName] = useState("");
  const [enterpriseAddress, setEnterpriseAddress] = useState("");
  const enterprise = useSelector((state) => state.enterprise);

  useEffect(() => {
    dispatch(getAllEnterprises());
  }, []);

  const handleClose = () => {
    // const form = new FormData();

    // form.append("name", enterpriseName);
    // form.append("address", enterpriseAddress);

    const form = {
      name: enterpriseAddress,
      address: enterpriseName,
    };

    dispatch(addEnterprise(form));

    // const ent = {
    //   enterpriseName,
    //   enterpriseAddress,
    // };

    //console.log(ent);

    setShow(false);
  };
  const handleShow = () => setShow(true);
  const renderEnterprises = (enterprises) => {
    let myEnterprises = [];
    for (let enterprise of enterprises) {
      myEnterprises.push(<li key={enterprise.name}>{enterprise.name}</li>);
    }
    return myEnterprises;
  };

  const createEnterPrisesAddressList = (options = []) => {
    options.push({ value: 1, name: "Ho Chi Minh" });
    options.push({ value: 2, name: "Da Lat" });
    options.push({ value: 3, name: "Nha Trang" });
    return options;
  };
  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Enterprises</h3>
              <button onClick={handleShow}>Add</button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <ul>{renderEnterprises(enterprise.enterprises)}</ul>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
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
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
};
