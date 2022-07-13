import Slider from "rc-slider";
import { useState } from "react";

import { Col, Container, Row } from "react-bootstrap";
import { FrozenLevelSlider } from "../components/LevelSlider";

const Sandbox = () => {
  const [state, setState] = useState();
  return (
    <>
      <Container>
        <br />
        <Row>
          <Col sm="5">
            <FrozenLevelSlider low="20" high="40" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Sandbox;
