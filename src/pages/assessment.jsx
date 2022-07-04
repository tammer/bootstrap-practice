import React, { useState, useEffect } from "react";
import SkillO from "../components/Skill";
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
    // const x = {
    //   id: Math.random(),
    //   skill: undefined,
    //   level: undefined,
    // };
    // setSkillList([...y, x]);
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
      id < 1
        ? "http://localhost:8000/assessments/"
        : `http://localhost:8000/assessment/${id}`,
      {
        method: id < 1 ? "POST" : "PUT",
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
          <SkillO
            key={item["id"]}
            id={item["id"]}
            selectedSkill={item["skill"]}
            selectedLevel={item["level"]}
            update={update}
            destroy={destroy}
          />
        ))}
        New:
        <SkillO
          key={Math.random()}
          id={Math.random()}
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
