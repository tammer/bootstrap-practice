import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import CalibrationSlider from "./CalibrationSlider";

const AnchorAcceptor = () => {
  const [inRange, setInRange] = useState("new");

  return (
    <>
      <Row>
        <Col sm="7">
          <CalibrationSlider handleChange={setInRange} />
        </Col>
        <Col style={{ marginLeft: "30px" }}>
          <span>
            <Button className="btn btn-sm btn-danger">Decline</Button>
          </span>
          <span hidden={(inRange == "new") | !inRange}>
            <Button className="btn btn-sm btn-primary">Accept</Button>
          </span>
        </Col>
      </Row>
    </>
  );
};

export default AnchorAcceptor;
