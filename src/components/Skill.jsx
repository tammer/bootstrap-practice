import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import LevelSlider from "./LevelSlider";
import AnchorRow from "./AnchorRow";

const Skill = ({
  id,
  selectedSkill,
  selectedLevel,
  minLevel = 0,
  maxLevel = 100,
  update,
  destroy,
  isHeader = false,
}) => {
  const [state, setState] = useState(selectedLevel);

  function updateState(newState) {
    setState(newState);
    update(id, newState);
  }

  return (
    <>
      <Container hidden={state === "dead" ? true : false}>
        <Row style={{ margin: "20px" }}>
          <Col sm="2">
            {isHeader ? (
              ""
            ) : (
              <div style={{ textAlign: "right", marginRight: "20px" }}>
                {selectedSkill}
              </div>
            )}
          </Col>
          <Col sm="5">
            {isHeader ? (
              ""
            ) : (
              <LevelSlider
                value={state}
                handleChange={updateState}
                minLevel={minLevel}
                maxLevel={maxLevel}
              />
            )}
          </Col>
          <Col>
            {isHeader ? (
              <AnchorRow isHeadingRow />
            ) : (
              <AnchorRow skill={selectedSkill} />
            )}
          </Col>
          <Col>
            <div style={{ marginLeft: "50px" }}>
              {isHeader ? (
                ""
              ) : (
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
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Skill;
