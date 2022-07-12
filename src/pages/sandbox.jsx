import { useState } from "react";
import AnchorAcceptor from "../components/AnchorAcceptor";

import LocationSelector from "../components/LocationSelector";
import GeneralModal from "../components/GeneralModal";
import { Col, Container, Row } from "react-bootstrap";

import AnchorRow from "../components/AnchorRow";
import LevelSlider from "../components/LevelSlider";
import SkillSelector from "../components/SkillSelector";
import GeneralSelector from "../components/GeneralSelector";
import GeneralCreatable from "../components/GeneralCreatable";

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
            <GeneralCreatable
              isClearable
              api="/friends/"
              handleChange={setState}
              isMulti={false}
              value={state}
              placeholder="email"
              getOptionLabel={(e) => e["display_name"]}
              getOptionValue={(e) => e["id"]}
              getNewOptionData={(a, b) => {
                return { id: a, display_name: b };
              }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Sandbox;
