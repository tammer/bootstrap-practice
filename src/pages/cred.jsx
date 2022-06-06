import { Container, Row, Col, Table } from "react-bootstrap";
// import "./../App.css";
import Credibility from "../components/Credibility";

const Cred = () => {
  return (
    <Container>
      <Row>
        <Col sm={12}>
          <h1>Calibration</h1>
          We achieve a platform wide consistency for the meaning of our 5 skills
          levels by peer group calibration. Calibration also ensures the
          accuracy of any one person's self assessment. Your credability on this
          network increased with calibration.
          <h3>How it Works</h3>
          <ul>
            <li>
              You select someone who is at or above your level at one or more
              skills
            </li>
            <li>You share a calibration link with them</li>
            <li>They confirm your skill level relative to theirs</li>
            <li>
              your (and your peer's) credibility on this platform increases
            </li>
          </ul>
          <Credibility count="1" />
          <Credibility count="2" />
        </Col>
      </Row>
    </Container>
  );
};

export default Cred;
