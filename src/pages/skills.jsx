import SkillSection from "../components/SkillSection";

// import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col, Table } from "react-bootstrap";

import curve from "./../assets/curve.png";

const someSkills = [
  "Python",
  "React",
  "Javascript",
  "jQuery",
  "Django",
  "Bootstrap",
];

const Skills = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <h1>Self-Quantification</h1>
            <p>Please quantify your skill level for the following:</p>
          </Col>
        </Row>
        <Row>
          <Col sm="7">
            <SkillSection />
          </Col>
          <Col sm="5">
            <div style={{ fontSize: "0.7em" }}>
              <h4>Definitions</h4>
              <h5>Learning Curve</h5>
              <div style={{ textAlign: "center" }}>
                <img src={curve} width="300px" alt="" />
              </div>
              <dl className="row">
                <dt className="col-sm-3">Novice</dt>
                <dd className="col-sm-9">
                  Exaples of novice level include having trialed this technology
                  in sandbox or "toy app" environments or having been exposed to
                  a the technology in an educational setting, but not used it
                  professionally yet.
                </dd>
                <dt className="col-sm-3">Capable</dt>
                <dd className="col-sm-9">
                  You have good understanding of the technology and can be
                  productive while continuing to round out your skills in the
                  tech. you might need to reference docs and sampel code often,
                  but are able to leverage that into productivity.
                </dd>
                <dt className="col-sm-3">Proficient</dt>
                <dd className="col-sm-9">
                  You know this technology well. You are productive on a day to
                  day basis, occationally needing to consult documentation or
                  Google.
                </dd>
                <dt className="col-sm-3">Expert</dt>
                <dd className="col-sm-9">
                  Expert implies an mastery of the technology. You understand it
                  completely. You are almost certainly the most capable
                  pracitioner in your workplace. And as good as anyone you know
                  at it.
                </dd>
                <dt className="col-sm-3">Authority</dt>
                <dd className="col-sm-9">
                  You are part of the group of people who create, develop,
                  maintain and evolve this technology.
                </dd>
              </dl>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Skills;
