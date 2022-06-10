import { Container, Row, Col, Button } from "react-bootstrap";

const LoggedinHome = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2>Job Spec</h2>
            <div>
              <code>
                Job.role ∈ ["Senior Frontend Engineer", "Senior Full Stack
                Engineer"]
              </code>
            </div>
            <div>
              <code></code>
            </div>
            <div>
              <code>AND </code>
            </div>
            <div>
              <code>job.workModel ∈ ["Remote", "Hybrid"]</code>
            </div>
            <div>
              <code>AND </code>
            </div>
            <div>
              <code>
                job.techStack ⊇ ['Javascript', 'React', 'Django','DynamoDB']
                <br />
                etc
              </code>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>My Skill Levels</h2>
            <code>
              "Python": profecient+
              <br />
              "Django": profecient
              <br />
              "React": capable+
            </code>
          </Col>
        </Row>
        <Row>
          <h2>My Calibrations</h2>
          <p>Credibility Level: 1</p>
          <p>Calibration links...</p>
        </Row>
      </Container>
    </>
  );
};

export default LoggedinHome;
