import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import SkillSelector from "./SkillSelector";
import LevelSelector from "./LevelSelector";

const Skill = ({ id, selectedSkill, selectedLevel, update, destroy }) => {
  const [state, setState] = useState({
    skill: selectedSkill,
    level: selectedLevel,
  });

  function updateState(name, value) {
    let newState = {};
    newState["level"] = state["level"];
    newState["skill"] = state["skill"];
    newState[name] = value;
    if (
      (typeof newState["skill"] === "undefined") |
      (typeof newState["level"] === "undefined")
    ) {
      setState(newState);
      return;
    }
    update(id, newState);
  }

  return (
    <>
      <Container hidden={state === "dead" ? true : false}>
        <Row style={{ margin: "20px" }}>
          <Col>
            <SkillSelector
              value={state["skill"]}
              handleChange={(e) => updateState("skill", e)}
            />
            <LevelSelector
              value={state["level"]}
              handleChange={(e) => updateState("level", e)}
            />
          </Col>
          <Col>
            {id < 1 ? (
              ""
            ) : (
              <div>
                <Button
                  className="btn btn-sm btn-danger"
                  onClick={(e) => {
                    setState("dead");
                    destroy(id);
                  }}
                >
                  Delete
                </Button>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Skill;
