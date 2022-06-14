import { useLocation, useNavigate } from "react-router-dom";
import SkillSection from "../components/SkillSection";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

// import "bootstrap/dist/css/bootstrap.min.css";

import curve from "./../assets/curve.png";

const Skills = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formState = location.state;

  function skillList() {
    let x = 1;
    console.log(formState["TechStack"]["attributes"]);
    return formState["TechStack"]["attributes"].map((att) => ({
      id: x++,
      name: att["label"],
    }));
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <h1>Skill Quantification</h1>
            <p>Please quantify your skill level for the following:</p>
          </Col>
        </Row>
        <Row>
          <Col sm="7">
            <SkillSection skills={skillList()} />

            <Form>
              <Button
                variant="secondary"
                onClick={() => navigate("/requirements", { state: formState })}
              >
                Revise Spec
              </Button>
              {/* <Button
                variant="primary"
                onClick={() => navigate("/skills", { state: formState })}
              >
                Next
              </Button> */}
            </Form>
          </Col>
          <Col sm="5">
            <div style={{ fontSize: "0.7em" }}>
              <h4 className="text-center">Label Definitions</h4>
              <div style={{ textAlign: "center" }}>
                <img src={curve} width="300px" alt="" />
              </div>
              <p className="text-center">Learning Curve</p>
              <dl className="row">
                <dt className="col-sm-3">Novice</dt>
                <dd className="col-sm-9">
                  You have trialed the technology in sandbox and "toy app"
                  environments or have been exposed to it in an educational
                  setting. You have not used the technology in a professional
                  setting.
                </dd>
                <dt className="col-sm-3">Capable</dt>
                <dd className="col-sm-9">
                  You have an understanding of the technology and have used it
                  in a professional setting. When working with the technology
                  you probably make frequent use of internet resources to
                  continue to learn it and to overcome obsticles, but you are
                  nonetheless able to use the technology productively.
                </dd>
                <dt className="col-sm-3">Proficient</dt>
                <dd className="col-sm-9">
                  You know this technology well and are approaching expert level
                  on many aspects of it. You are productive with this
                  technology, occationally consulting documentation and internet
                  resources. There are certain advanced features and/or
                  techniques that you do not yet know thoroughly.
                </dd>
                <dt className="col-sm-3">Expert</dt>
                <dd className="col-sm-9">
                  You have mastered the technology. There is essentially nothing
                  you don't know about it. You are able to leverage the
                  technology for any feasible purpose effeciently, rarely
                  needing to consult documentation or internet resources. You
                  are probably the most knowledge person on this technology in
                  your organization.
                </dd>
                <dt className="col-sm-3">Authority</dt>
                <dd className="col-sm-9">
                  You are not only an expert; you are part of the group of
                  people who create, develop, maintain and evolve this
                  technology.
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
