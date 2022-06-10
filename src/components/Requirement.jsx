import { Row, Col, Form } from "react-bootstrap";
import React, { useState } from "react";

const Requirement = ({ title, selector, helper }) => {
  const [isActive, setActive] = useState(true);
  const [isHover, setHover] = useState(false);

  function toggleAction() {
    setActive(!isActive);
  }

  function noMatter() {
    return (
      <>
        <h6>Doesn't Matter</h6>
      </>
    );
  }

  return (
    <>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{ marginBottom: "30px" }}
      >
        <Row>
          <Col sm="4"></Col>
          <Col sm="auto">
            <h5>{title}</h5>
          </Col>
          <Col>
            <Form.Check
              onChange={toggleAction}
              defaultChecked={isActive}
              type="switch"
              id="custom-switch"
            />
          </Col>
        </Row>
        <Row>
          <Col sm="4">
            <div style={{ fontSize: "0.8em" }}>
              {isActive && isHover ? helper : ""}
            </div>
          </Col>
          <Col sm="8">
            <div>{isActive ? selector : noMatter()}</div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Requirement;
