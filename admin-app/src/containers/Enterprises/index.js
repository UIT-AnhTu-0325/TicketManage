import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Layout } from "../../components/Layout";

/**
 * @author
 * @function Enterprises
 **/

export const Enterprises = (props) => {
  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Enterprises</h3>
              <button>Add</button>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
