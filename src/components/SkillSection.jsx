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

const SkillSection = ({ skills }) => {
  function renderLabels() {
    return (
      <>
        <div className="skills-container">
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
            <div class="slider-label">{skill.name}</div>
          </Col>
          <Col sm="8">
            <div className="slider-div">
              <Slider
                marks={noMarks}
                step={null}
                defaultValue={50}
                included={false}
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
