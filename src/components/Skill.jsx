import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import LevelSlider from "./LevelSlider";

const Skill = ({ id, selectedSkill, selectedLevel, update, destroy }) => {
  const [state, setState] = useState(selectedLevel);

  function updateState(newState) {
    setState(newState);
    update(id, newState);
  }

  return (
    <>
      <Container hidden={state === "dead" ? true : false}>
        <Row style={{ margin: "20px" }}>
          <Col>{selectedSkill}</Col>
          <Col>
            <LevelSlider value={state} handleChange={updateState} />
          </Col>
          <Col>
            <div style={{ marginLeft: "50px" }}>
              <Button
                className={
                  "btn btn-sm btn-danger" + (destroy ? "" : " disabled")
                }
                onClick={(e) => {
                  setState("dead");
                  destroy(id);
                }}
              >
                Delete
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Skill;
