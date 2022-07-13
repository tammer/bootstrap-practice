import { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import ConfirmSkill from "./ConfirmSkill";

const PendingEndorsementSummary = ({ spec, onChange }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Row style={{ margin: "20px", border: "solid" }}>
        <Col sm="8">
          Levelset request from <strong>{spec["passer_display_name"]}</strong>{" "}
          on <strong>{spec["skill"]}</strong>
        </Col>
        <Col>
          <Button onClick={() => setShow(true)} className="btn btn-sm">
            Handle
          </Button>
        </Col>
        {spec["confirmable"] ? (
          spec["my_level"] ? (
            <ConfirmSkill
              spec={spec}
              show={show}
              onHide={() => setShow(false)}
              onDecline={onChange}
              onAccept={onChange}
            />
          ) : (
            "confirmable, but I dont have a level"
          )
        ) : (
          "not ocnfirmable"
        )}
      </Row>
    </>
  );
};

export default PendingEndorsementSummary;
