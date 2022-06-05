import { Container, Row, Col, Table } from "react-bootstrap";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import "./slider.css";

const marks = {
  0: "novice",
  25: "capable",
  37: " ",
  50: "proficient",
  62: " ",
  75: "expert",
  100: "authority",
};

const noMarks = {
  0: " ",
  25: " ",
  37: " ",
  50: " ",
  62: " ",
  75: " ",
  100: " ",
};

const skills = [
  { id: 1, name: "Python" },
  { id: 2, name: "Javascript" },
  { id: 3, name: "React" },
  { id: 4, name: "Node.js" },
  { id: 5, name: "C++" },
  { id: 6, name: "DynamboDB" },
  { id: 7, name: "Postgres" },
];

const labels = [
  ["14%", "Novice"],
  ["24%", "Capable"],
  ["34%", "Proficient"],
  ["44%", "Expert"],
  ["54%", "Authority"],
];

const SkillSection = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h3>Skills</h3>
        </Col>
        <Col>
          {labels.map((l) => (
            <span
              id={l[1]}
              style={{
                position: "absolute",
                left: l[0],
                transform: `translateX(-50%)`,
              }}
            >
              {l[1]}
            </span>
          ))}
        </Col>
      </Row>
      {skills.map((skill) => (
        <Row key={skill.id}>
          <Col sm="2">
            <div style={{ textAlign: "right" }}>{skill.name}</div>
          </Col>
          <Col sm="10">
            <Slider
              marks={noMarks}
              step={null}
              defaultValue={50}
              included={false}
            />
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default SkillSection;
