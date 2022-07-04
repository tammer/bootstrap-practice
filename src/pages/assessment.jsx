import React, { useState, useEffect } from "react";
import Skill from "../components/Skill";
import { Container, Row, Col } from "react-bootstrap";
import SkillSelector from "../components/SkillSelector";
import Privilaged from "../components/Privilaged";

const Assessment = () => {
  const token = localStorage.getItem("token");
  const [skillList, setSkillList] = useState();

  async function fetchList() {
    const z = await fetch(`http://localhost:8000/assessments/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Token ${token}`,
      },
    });
    const y = await z.json();
    setSkillList(y);
  }

  useEffect(() => {
    fetchList();
  }, []);

  function destroy(id) {
    fetch(`http://localhost:8000/assessment/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    }).then((e) => fetchList());
  }

  function create(tech) {
    fetch("http://localhost:8000/assessments/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify({ skill: tech, level: { id: 1, name: "novice" } }),
    }).then((e) => fetchList());
  }

  function update(id, level) {
    fetch(`http://localhost:8000/assessment/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify({ level: { id: level } }),
    }).then((e) => fetchList());
  }

  function renderItems() {
    return (
      <>
        <Container>
          <Row>
            {skillList.map((item) => (
              <Skill
                key={item["id"]}
                id={item["id"]}
                selectedSkill={item["skill"]["name"]}
                selectedLevel={item["level"]}
                update={update}
                destroy={item["required"] ? null : destroy}
              />
            ))}
          </Row>
          <Row>
            <Col sm="1">new:</Col>
            <Col sm="5">
              <SkillSelector
                value={null}
                handleChange={create}
                isMulti={false}
              />
            </Col>
          </Row>
        </Container>
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
