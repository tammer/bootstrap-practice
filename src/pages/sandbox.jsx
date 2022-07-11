import { useState } from "react";
import AnchorAcceptor from "../components/AnchorAcceptor";

import LocationSelector from "../components/LocationSelector";
import GeneralModal from "../components/GeneralModal";
import { Col, Container, Row } from "react-bootstrap";

const Sandbox = () => {
  const [state, setState] = useState();
  return (
    <>
      {/* <LocationSelector isMulti={true} value={state} handleChange={setState} /> */}
      {/* <GeneralModal title="Title" message="here is the message" /> */}
      <Container>
        <br />
        <Row>
          <Col sm="12">
            <AnchorAcceptor />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Sandbox;
