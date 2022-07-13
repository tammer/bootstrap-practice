import React, { useState, useEffect } from "react";
import Skill from "../components/Skill";
import { Container, Row, Col } from "react-bootstrap";
import SkillSelector from "../components/SkillSelector";
import Privilaged from "../components/Privilaged";
import NewAnchor from "../components/NewAnchor";
import PendingEndorsements from "../components/PendingEndorsements";

const Assessment = () => {
  const token = localStorage.getItem("token");
  const [skillList, setSkillList] = useState();

  function fetchList() {
    fetch(`${process.env.REACT_APP_API}/assessments/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Token ${token}`,
      },
    })
      .then((res) => res.json())
      .then((j) => setSkillList(j));
  }

  useEffect(() => {
    fetchList();
  }, []);

  function destroy(id) {
    fetch(`${process.env.REACT_APP_API}/assessment/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    }).then((e) => fetchList());
  }

  function create(tech) {
    fetch(process.env.REACT_APP_API + "/assessments/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify({ skill: tech, level: 0 }),
    }).then((e) => fetchList());
  }

  function update(id, level) {
    fetch(`${process.env.REACT_APP_API}/assessment/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify({ level: level }),
    }).then((e) => fetchList());
  }

  function renderItems() {
    return (
      <>
        <Container>
          <Row>
            <Skill isHeader></Skill>
          </Row>
          <Row>
            {skillList.map((item) => (
              <Skill
                key={item["id"]}
                id={item["id"]}
                selectedSkill={item["skill"]["name"]}
                selectedLevel={item["level"]}
                minLevel={item["min_level"]}
                maxLevel={item["max_level"]}
                update={update}
                destroy={item["required"] ? null : destroy}
              />
            ))}
          </Row>
          <hr />
          <Row>
            <Col sm="2">add a new skill:</Col>
            <Col sm="4">
              <SkillSelector
                value={null}
                handleChange={create}
                isMulti={false}
              />
            </Col>
          </Row>
          <hr />
          <Row>
            <Col sm="2">add an calibration link:</Col>
            <Col sm="4">
              <NewAnchor />
            </Col>
          </Row>
        </Container>

        <PendingEndorsements />
      </>
    );
  }

  return (
    <Privilaged>
      <Container>{skillList ? renderItems() : "loading"}</Container>
    </Privilaged>
  );
};

export default Assessment;
