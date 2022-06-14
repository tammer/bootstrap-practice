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

const labels = [
  ["23%", "Novice"],
  ["30%", "Capable"],
  ["38%", "Proficient"],
  ["45%", "Expert"],
  ["53%", "Authority"],
];

const SkillSection = ({ skills, handleChange }) => {
  function translate(x) {
    if (x == 37) {
      return "capable+";
    }
    if (x == 62) {
      return "proficient+";
    }
    return marks[x];
  }
  function itranslate(level) {
    if (!level) {
      return 50;
    }
    if (level === "proficient+") {
      return 62;
    }
    if (level === "capable+") {
      return 37;
    }
    let rv = -1;
    Object.keys(marks).forEach((key) => {
      if (marks[key] === level) {
        rv = key;
      }
    });
    return rv;
  }
  function renderLabels() {
    return (
      <>
        <div className="skills-container">
          {labels.map((l) => (
            <span
              key={l[1]}
              style={{
                position: "absolute",
                left: l[0],
                transform: `translateX(-50%)`,
              }}
            >
              {l[1]}
            </span>
          ))}
        </div>
      </>
    );
  }

  return (
    <Container fluid>
      <Row>
        <Col></Col>
        <Col>{renderLabels()}</Col>
      </Row>
      {skills.map((skill) => (
        <Row key={skill.id} style={{ marginBottom: "10px" }}>
          <Col sm="4">
            <div className="slider-label">{skill.name}</div>
          </Col>
          <Col sm="8">
            <div className="slider-div">
              <Slider
                marks={noMarks}
                step={null}
                defaultValue={(e) => itranslate(skill["level"])}
                included={false}
                onChange={(e) => handleChange(skill.id, translate(e))}
              />
            </div>
          </Col>
        </Row>
      ))}
      <Row>
        <Col></Col>
        <Col>{skills.length > 8 ? renderLabels() : ""}</Col>
      </Row>
    </Container>
  );
};

export default SkillSection;
