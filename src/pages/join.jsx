import { useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Form, Badge } from "react-bootstrap";
import Spec from "../components/Spec";

const Join = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formState = location.state;
  console.log(formState);

  function skillRow(level, color, skills) {
    return (
      <Row className="skill-row">
        <Col
          sm="2"
          className="skill-summary-left"
          style={{ backgroundColor: color }}
        >
          {level}
        </Col>
        <Col sm="10" className="skill-summary-right">
          {skills.map((item) => item + ", ")}
        </Col>
      </Row>
    );
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col sm="2"></Col>
          <Col sm="8">
            <div>
              <h1 className="display-4">Activation</h1>
              <h2>
                Your Process&nbsp;
                <Button variant="secondary" className="btn-sm">
                  Revise
                </Button>
              </h2>
              <div style={{ fontSize: "0.5em" }}>
                <Spec formState={formState} />
              </div>
              <h2>
                Your Quantification&nbsp;
                <Button variant="secondary" className="btn-sm">
                  Revise
                </Button>
              </h2>
              {skillRow("Authority", "#dcffcc", ["one", "two"])}
              {skillRow("Expert", "#dcefcc", ["one", "two"])}
              {skillRow("Proficient+", "#dcefcc", ["one", "two"])}
              {skillRow("Proficient", "#dcdfcc", ["one", "two"])}
              {skillRow("Capable+", "#dccfcc", ["one", "two"])}
              {skillRow("Capable", "#dcbfcc", ["one", "two"])}
              {skillRow("Novice", "#dcafcc", ["one", "two"])}
              <h2>Activation</h2>
              <div className="alert alert-success text-center" role="alert">
                You can now activate Background Process
              </div>
              <Form>
                <Row>
                  <Col sm="auto">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Email" />
                      <Form.Text className="text-muted">
                        You will receive a confirm link to set your password and
                        finalize activation
                      </Form.Text>
                    </Form.Group>
                  </Col>
                  <Col>
                    <div style={{ marginLeft: "20px" }}>
                      <Button variant="primary">Activate</Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Join;
