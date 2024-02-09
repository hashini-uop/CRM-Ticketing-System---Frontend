import React, { useState } from "react";
//import image1 from '../../assests/pexels-ron-lach-8100067.jpg'
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import "./entry.css";

const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [load, setLoad] = useState("login");
  const formSwich = (formtype) => {
    setLoad(formtype);
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert("Fill up all!");
    }
    //api call
  };
  return (
    <div className="log-card">
      <div className="form">
        <Container>
          <Row>
            <Col>
              <h1>Client Login</h1>
              <hr />
            </Col>
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
              <Form.Group>
                <Form.Label className="label">Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="name"
                  onChange={handleOnChange}
                  placeholder="Enter Email"
                  required
                ></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label className="label">Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  onChange={handleOnChange}
                  placeholder="Enter Password"
                  required
                ></Form.Control>
              </Form.Group>

              <Button className="btn" type="submit">
                Submit
              </Button>
            </Form>
          </Row>

          <Row>
            <Col>
              <a href="/reset" onClick={() => formSwich("reset")}>
                forget password?
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Entry;
