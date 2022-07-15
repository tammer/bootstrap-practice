import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { destroyAnchor } from "../helpers/helpers";

const SentEndorsementSummary = ({ spec, onChange }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Row style={{ margin: "20px", border: "solid" }}>
        <Col sm="8">
          Levelset request sent to{" "}
          <strong>{spec["receiver_display_name"]}</strong> on{" "}
          <strong>{spec["skill"]}</strong>
        </Col>
        <Col>
          {spec["status"] == "pending" ? (
            <Button
              onClick={() => destroyAnchor(spec["id"]).then(() => onChange())}
              className="btn btn-sm btn-danger"
            >
              Revoke
            </Button>
          ) : spec["status"] == "accepted" ? (
            "Accepted"
          ) : (
            "Declined"
          )}
        </Col>
      </Row>
    </>
  );
};

export default SentEndorsementSummary;
