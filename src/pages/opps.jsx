import { Container, Row, Col, Button } from "react-bootstrap";
import { Border } from "react-bootstrap-icons";

const Opps = () => {
  const someJobs = ["ACME Corp", "Vandelay Industries", "Omni Corp"];
  return (
    <Container>
      <Row>
        <Col sm="9">
          <h3>Current Opportunities</h3>
          {someJobs.map((j) => (
            <>
              <Row style={{ margin: "20px", border: "solid" }}>
                <Col sm="6">
                  {j} (<a href="#">job desc&raquo;</a>)
                </Col>
                <Col sm="3">
                  <Button className="btn btn-sm">Intro me</Button>
                </Col>
                <Col sm="3">
                  <Button className="btn btn-sm btn-danger">Pass</Button>
                </Col>
              </Row>
            </>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Opps;
