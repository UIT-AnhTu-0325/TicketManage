import React, { useEffect, useState } from "react";
import { Layout } from "../../components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import { isUserLoggedIn, login } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";

/**
 * @author
 * @function Signin
 **/

export const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, []);

  const userLogin = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };
    dispatch(login(user));
  };

  if (auth.authenticate) {
    return <Redirect to={`/`}></Redirect>;
  }

  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <form onSubmit={userLogin}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
