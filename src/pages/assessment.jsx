import React, { useState, useEffect } from "react";
import Skill from "../components/Skill";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const Assessment = () => {
  const [skillList, setSkillList] = useState();

  useEffect(() => {
    async function fetchList(url, updateFunction) {
      const z = await fetch(`http://localhost:8000/assessments/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: "Token 34ee690514522faae3fa01f8792c71eb9bacd561",
        },
      });
      const y = await z.json();
      setSkillList(y);
    }
    fetchList();
  }, []);

  function update(id, field, value) {
    if (!value) {
      return;
    }
    let info = {};
    info[field] = value["name"];
    fetch(`http://localhost:8000/assessment/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Token 34ee690514522faae3fa01f8792c71eb9bacd561",
      },
      body: JSON.stringify(info),
    });
  }

  function renderItems() {
    return (
      <>
        {skillList.map((item) => (
          <Skill
            key={item["id"]}
            id={item["id"]}
            selectedSkill={item["skill"]}
            selectedLevel={item["level"]}
            update={update}
          />
        ))}
      </>
    );
  }

  return (
    <>
      <Container>{skillList ? renderItems() : "loading"}</Container>
    </>
  );
};

export default Assessment;
