import React from "react";
import { Layout } from "../../components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import { Input } from "../../components/UI/Input";
/**
 * @author
 * @function Signup
 **/

export const Signup = (props) => {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <form class="row g-3">
              <Input
                div_class="col-md-6"
                for="inputFirstname"
                label="Fist name"
                type="text"
                placeholder="Anh Tu"
                onChange={() => {}}
              ></Input>
              <Input
                div_class="col-md-6"
                for="inputFirstname"
                label="Last name"
                type="text"
                placeholder="Dang"
                onChange={() => {}}
              ></Input>
              <Input
                div_class="col-md-6"
                for="inputFirstname"
                label="Password"
                type="password"
                //placeholder="Dang"
                onChange={() => {}}
              ></Input>

              <div class="col-12">
                <button type="submit" class="btn btn-primary">
                  Sign in
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
