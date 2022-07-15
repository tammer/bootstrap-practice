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
          {spec["status"] == "pending" ? (
            <Button onClick={() => setShow(true)} className="btn btn-sm">
              Handle
            </Button>
          ) : spec["status"] == "accepted" ? (
            "Accepted"
          ) : (
            "Declined"
          )}
        </Col>
        <ConfirmSkill
          spec={spec}
          show={show}
          onHide={() => setShow(false)}
          onDecline={onChange}
          onAccept={onChange}
        />
      </Row>
    </>
  );
};

export default PendingEndorsementSummary;
