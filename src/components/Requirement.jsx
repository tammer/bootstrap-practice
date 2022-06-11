import { Row, Col, Form, Tooltip, OverlayTrigger } from "react-bootstrap";
import React, { useState } from "react";
import { QuestionCircle } from "react-bootstrap-icons";

const Requirement = ({ title, selector, helper, togglable }) => {
  const [isActive, setActive] = useState(true);
  const [isHover, setHover] = useState(false);

  function toggleAction() {
    setActive(!isActive);
  }

  function noMatter() {
    return (
      <>
        <div
          style={{
            marginBottom: "11px",
            marginLeft: "0px",
            paddingTop: "10px",
            marginLeft: "27px",
            fontSize: "0.7em",
            color: "gray",
          }}
        >
          Doesn't Matter
        </div>
      </>
    );
  }

  const renderTooltip = (props) => <Tooltip {...props}>{helper}</Tooltip>;
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          marginBottom: "5px",
          border: "1px",
          borderStyle: "solid",
          borderColor: "#d0d7de",
          //   borderColor: "black",
          paddingBottom: "6px",
        }}
      >
        <Row>
          <Col
            sm="auto"
            style={{
              fontWeight: "bold",
              fontSize: "0.9em",
              paddingLeft: "10px",
              color: isActive ? "black" : "gray",
            }}
          >
            {title}
          </Col>
          <Col style={{ paddingRight: "3px", paddingTop: "3px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "right",
                justifyContent: "right",
              }}
            >
              <OverlayTrigger
                placement="left"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <QuestionCircle />
              </OverlayTrigger>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>{isActive ? selector : noMatter()}</Col>
          <Col sm="auto" style={{ paddingTop: "7px", paddingLeft: "4px" }}>
            <Form.Check
              disabled={togglable ? false : true}
              onChange={toggleAction}
              defaultChecked={isActive}
              type="switch"
              id="custom-switch"
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

Requirement.defaultProps = {
  togglable: true,
};

export default Requirement;
