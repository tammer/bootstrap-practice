import { useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Form, Badge } from "react-bootstrap";
import Spec from "../components/Spec";

const Join = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formState = location.state;
  console.log(formState);

  function makeList(level) {
    return formState["TechStack"]["attributes"]
      .filter((att) => att["level"] === level)
      .map((att) => att["label"]);
  }

  function skillRow(level, color, skills) {
    if (skills.length == 0) {
      return "";
    }
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
          {skills.join(", ")}
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
                <Button
                  variant="secondary"
                  className="btn-sm"
                  onClick={() => {
                    navigate("/requirements", { state: formState });
                  }}
                >
                  Revise
                </Button>
              </h2>
              <div style={{ fontSize: "0.5em" }}>
                <Spec formState={formState} />
              </div>
              <h2>
                Your Quantification&nbsp;
                <Button
                  variant="secondary"
                  className="btn-sm"
                  onClick={() => {
                    navigate("/skills", { state: formState });
                  }}
                >
                  Revise
                </Button>
              </h2>
              {[
                "authority",
                "expert",
                "proficient+",
                "proficient",
                "capable+",
                "capable",
                "novice",
              ].map((level) => skillRow(level, "green", makeList(level)))}

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
