import AsyncSelect from "react-select/async";
import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

const Skill = ({ id, selectedSkill, selectedLevel, update, destroy }) => {
  const [state, setState] = useState({
    skill: selectedSkill,
    level: selectedLevel,
  });

  function updateState(name, value) {
    let newState = {};
    newState["level"] = state["level"];
    newState["skill"] = state["skill"];
    newState[name] = value["name"];
    setState(newState);
    if (
      (typeof newState["skill"] === "undefined") |
      (typeof newState["level"] === "undefined")
    ) {
      return;
    }
    update(id, newState);
    if (id === "new") {
      newState["level"] = selectedSkill;
      newState["skill"] = selectedLevel;
      setState(newState);
    }
  }

  const loadTechOptions = (inputValue) => {
    return fetch(`http://localhost:8000/skills/${inputValue}`).then((res) =>
      res.json()
    );
  };

  const loadLevelOptions = (inputValue) => {
    return fetch(`http://localhost:8000/levels/`).then((res) => res.json());
  };

  return (
    <>
      <Container hidden={state === "dead" ? true : false}>
        <Row style={{ margin: "20px" }}>
          <Col>
            <AsyncSelect
              closeMenuOnSelect={true}
              cacheOptions
              isClearable
              getOptionLabel={(e) => e["name"]}
              getOptionValue={(e) => e["id"]}
              loadOptions={loadTechOptions}
              placeholder={"Type a technology"}
              defaultOptions
              value={state["skill"] ? { name: state["skill"] } : null}
              onChange={(e) => updateState("skill", e)}
            />
            <AsyncSelect
              closeMenuOnSelect
              isSearchable={false}
              cacheOptions
              defaultOptions
              getOptionLabel={(e) => e["name"]}
              getOptionValue={(e) => e["id"]}
              loadOptions={loadLevelOptions}
              value={state["level"] ? { name: state["level"] } : null}
              placeholder="Set Level"
              onChange={(e) => updateState("level", e)}
            />
          </Col>
          <Col>
            {id === "new" ? (
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
