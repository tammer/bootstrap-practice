import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import GeneralModal from "./GeneralModal";

const PendingEndorsementSummary = ({ spec }) => {
  return (
    <>
      <Row style={{ margin: "20px", border: "solid" }}>
        <Col sm="8">
          Levelset request from <strong>{spec["passer_display_name"]}</strong>{" "}
          on <strong>{spec["skill"]}</strong>
        </Col>
        <Col>
          <Button className="btn btn-sm">Handle</Button>
        </Col>
        {spec["confirmable"]
          ? spec["my_level"]
            ? "confirmable and i have a level"
            : "confirmable, but I dont have a level"
          : "not ocnfirmable"}
      </Row>
    </>
  );
};

export default PendingEndorsementSummary;
