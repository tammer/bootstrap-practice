import React, { useState, useEffect } from "react";
import Skill from "../components/Skill";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

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

  function update(id, state) {
    fetch(
      id === "new"
        ? "http://localhost:8000/assessments/"
        : `http://localhost:8000/assessment/${id}`,
      {
        method: id === "new" ? "POST" : "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(state),
      }
    ).then((e) => fetchList());
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
            destroy={destroy}
          />
        ))}
        New:
        <Skill
          key={"new"}
          id={"new"}
          // selectedSkill={item["skill"]}
          // selectedLevel={item["level"]}
          update={update}
        />
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