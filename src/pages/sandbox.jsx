import { useState } from "react";
import AnchorAcceptor from "../components/AnchorAcceptor";

import LocationSelector from "../components/LocationSelector";
import GeneralModal from "../components/GeneralModal";
import { Col, Container, Row } from "react-bootstrap";

import AnchorRow from "../components/AnchorRow";
import LevelSlider from "../components/LevelSlider";
import SkillSelector from "../components/SkillSelector";
import GeneralSelector from "../components/GeneralSelector";

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
            {/* <AnchorRow skill="1" /> */}
            {/* <LevelSlider /> */}
            {/* <SkillSelector /> */}
            <GeneralSelector
              api="/assessments/"
              handleChange={(e) => {
                return true;
              }}
              isMulti={true}
              value={null}
              placeholder="Input one or more roles"
              getOptionLabel={(e) => e["skill"]["name"]}
              getOptionValue={(e) => e["skill"]["id"]}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Sandbox;
